
// INSCRIPTION - Gaming.HUB
// Validation RegEx + localStorage + Messages


document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    const registerMessage = document.getElementById('registerMessage');
    
    const inputs = {
        nom: document.getElementById('registerNom'),
        prenom: document.getElementById('registerPrenom'),
        username: document.getElementById('registerUsername'),
        email: document.getElementById('registerEmail'),
        password: document.getElementById('registerPassword'),
        confirm: document.getElementById('registerConfirm'),
        conditions: document.getElementById('conditions')
    };


    // EXPRESSIONS RÉGULIÈRES (RegEx)
 
    const REGEX = {
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        username: /^[a-zA-Z0-9_-]{3,20}$/,
        password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/, // Min 8 chars, 1 maj, 1 min, 1 chiffre
        name: /^[a-zA-ZÀ-ÿ\s'-]{2,50}$/ // Noms avec accents, espaces, tirets, apostrophes
    };


    // UTILITAIRES localStorage
   
    const Storage = {
        getUsers: () => {
            const users = localStorage.getItem('gamingHub_users');
            return users ? JSON.parse(users) : [];
        },
        saveUsers: (users) => {
            localStorage.setItem('gamingHub_users', JSON.stringify(users));
        },
        userExists: (username, email) => {
            const users = Storage.getUsers();
            return users.some(u => 
                u.username.toLowerCase() === username.toLowerCase() || 
                u.email.toLowerCase() === email.toLowerCase()
            );
        }
    };


    // AFFICHAGE DES MESSAGES

    function showMessage(message, type = 'error') {
        registerMessage.textContent = message;
        registerMessage.className = `form-message ${type}`;
    }

    function clearMessage() {
        registerMessage.style.display = 'none';
        registerMessage.textContent = '';
    }


    // VALIDATION DES CHAMPS

    function validateField(value, regex) {
        return regex.test(value);
    }

    function setInputState(input, isValid, showIcon = true) {
        input.classList.toggle('invalid', !isValid && input.value !== '');
        input.classList.toggle('valid', isValid && input.value !== '');
        
        if (showIcon) {
            let icon = input.parentElement.querySelector('.validation-icon');
            if (!icon) {
                icon = document.createElement('i');
                icon.className = 'fas validation-icon';
                input.parentElement.appendChild(icon);
            }
            icon.className = `fas validation-icon ${isValid ? 'fa-check valid' : 'fa-times invalid'} show`;
        }
    }

    // Validation en temps réel
    Object.entries(inputs).forEach(([key, input]) => {
        if (input && key !== 'conditions') {
            input.addEventListener('input', (e) => {
                let isValid = true;
                
                switch(key) {
                    case 'nom':
                    case 'prenom':
                        isValid = validateField(e.target.value, REGEX.name);
                        break;
                    case 'username':
                        isValid = validateField(e.target.value, REGEX.username);
                        break;
                    case 'email':
                        isValid = validateField(e.target.value, REGEX.email);
                        break;
                    case 'password':
                        isValid = validateField(e.target.value, REGEX.password);
                        // Si le champ confirm est rempli, le re-valider aussi
                        if (inputs.confirm.value !== '') {
                            validateConfirm();
                        }
                        break;
                    case 'confirm':
                        isValid = e.target.value === inputs.password.value;
                        break;
                }
                
                setInputState(e.target, isValid);
                if (registerMessage.classList.contains('error')) clearMessage();
            });
        }
    });

    function validateConfirm() {
        const match = inputs.confirm.value === inputs.password.value && inputs.confirm.value !== '';
        setInputState(inputs.confirm, match);
        return match;
    }

  
    // SOUMISSION DU FORMULAIRE

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        clearMessage();

        // 1. Validation des champs avec RegEx
        const validations = {
            nom: validateField(inputs.nom.value, REGEX.name),
            prenom: validateField(inputs.prenom.value, REGEX.name),
            username: validateField(inputs.username.value, REGEX.username),
            email: validateField(inputs.email.value, REGEX.email),
            password: validateField(inputs.password.value, REGEX.password),
            confirm: inputs.confirm.value === inputs.password.value,
            conditions: inputs.conditions.checked
        };

        // Appliquer les états visuels
        Object.entries(validations).forEach(([key, isValid]) => {
            if (inputs[key]) {
                setInputState(inputs[key], isValid);
            }
        });

        // 2. Vérifier tous les champs
        const allValid = Object.values(validations).every(v => v === true);

        if (!allValid) {
            // Trouver le premier champ invalide pour le message
            const firstInvalid = Object.entries(validations).find(([_, v]) => v === false);
            const messages = {
                nom: 'Le nom doit contenir 2-50 lettres.',
                prenom: 'Le prénom doit contenir 2-50 lettres.',
                username: '3-20 caractères alphanumériques (sans espaces).',
                email: 'Adresse email invalide.',
                password: 'Min 8 caractères, 1 majuscule, 1 minuscule, 1 chiffre.',
                confirm: 'Les mots de passe ne correspondent pas.',
                conditions: 'Vous devez accepter les conditions.'
            };
            showMessage(messages[firstInvalid[0]], 'error');
            return;
        }

        // 3. Vérifier si l'utilisateur existe déjà
        if (Storage.userExists(inputs.username.value, inputs.email.value)) {
            showMessage('Ce nom d\'utilisateur ou email est déjà utilisé.', 'error');
            setInputState(inputs.username, false);
            setInputState(inputs.email, false);
            return;
        }

        // 4. Créer le nouvel utilisateur
        const newUser = {
            id: Date.now(), 
            nom: inputs.nom.value.trim(),
            prenom: inputs.prenom.value.trim(),
            username: inputs.username.value.trim(),
            email: inputs.email.value.trim().toLowerCase(),
            password: inputs.password.value, 
            createdAt: new Date().toISOString()
        };

        // 5. Sauvegarder dans localStorage
        const users = Storage.getUsers();
        users.push(newUser);
        Storage.saveUsers(users);

        // 6. Message de succès + redirection
        showMessage('✓ Compte créé avec succès ! Redirection...', 'success');
        
        setTimeout(() => {
            // Optionnel : connecter automatiquement l'utilisateur
            localStorage.setItem('gamingHub_currentUser', JSON.stringify({
                id: newUser.id,
                username: newUser.username,
                email: newUser.email,
                nom: newUser.nom
            }));
            window.location.href = './connexion.html';
        }, 2000);
    });
});