// CONNEXION - Gaming.HUB
// Validation RegEx + localStorage + Messages


document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const loginMessage = document.getElementById('loginMessage');
    const loginIdentifier = document.getElementById('loginIdentifier');
    const loginPassword = document.getElementById('loginPassword');


    // EXPRESSIONS RÉGULIÈRES (RegEx)

    const REGEX = {
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        username: /^[a-zA-Z0-9_-]{3,20}$/,
        password: /^.{6,}$/, // Min 6 caractères
        name: /^[a-zA-ZÀ-ÿ\s'-]{2,50}$/
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
        getCurrentUser: () => {
            const user = localStorage.getItem('gamingHub_currentUser');
            return user ? JSON.parse(user) : null;
        },
        setCurrentUser: (user) => {
            localStorage.setItem('gamingHub_currentUser', JSON.stringify(user));
        },
        clearCurrentUser: () => {
            localStorage.removeItem('gamingHub_currentUser');
        }
    };

  
    // AFFICHAGE DES MESSAGES
   
    function showMessage(message, type = 'error') {
        loginMessage.textContent = message;
        loginMessage.className = `form-message ${type}`;
        
        // Auto-hide après 5 secondes pour les succès
        if (type === 'success') {
            setTimeout(() => {
                loginMessage.style.display = 'none';
            }, 5000);
        }
    }

    function clearMessage() {
        loginMessage.style.display = 'none';
        loginMessage.textContent = '';
    }


    // VALIDATION DES CHAMPS
  
    function validateIdentifier(value) {
       
        return REGEX.email.test(value) || REGEX.username.test(value);
    }

    function validatePassword(value) {
        return REGEX.password.test(value);
    }

    function setInputState(input, isValid) {
        input.classList.toggle('invalid', !isValid);
        input.classList.toggle('valid', isValid);
    }

    // Validation en temps réel
    loginIdentifier.addEventListener('input', (e) => {
        const isValid = validateIdentifier(e.target.value);
        setInputState(e.target, isValid);
        if (loginMessage.classList.contains('error')) clearMessage();
    });

    loginPassword.addEventListener('input', (e) => {
        const isValid = validatePassword(e.target.value);
        setInputState(e.target, isValid);
        if (loginMessage.classList.contains('error')) clearMessage();
    });

    
    // VÉRIFICATION DES IDENTIFIANTS

    function verifyCredentials(identifier, password) {
        const users = Storage.getUsers();
        
        // Recherche l'utilisateur par email OU username
        const user = users.find(u => 
            (u.email.toLowerCase() === identifier.toLowerCase()) || 
            (u.username.toLowerCase() === identifier.toLowerCase())
        );

        if (!user) {
            return { success: false, message: 'Compte non trouvé. Vérifiez vos identifiants.' };
        }

        if (user.password !== password) {
            return { success: false, message: 'Mot de passe incorrect.' };
        }

        return { success: true, user };
    }


    // SOUMISSION DU FORMULAIRE

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        clearMessage();

        const identifier = loginIdentifier.value.trim();
        const password = loginPassword.value;

        // Validation finale
        if (!validateIdentifier(identifier)) {
            showMessage('Format invalide. Entrez un email ou un nom d\'utilisateur valide.');
            setInputState(loginIdentifier, false);
            return;
        }

        if (!validatePassword(password)) {
            showMessage('Le mot de passe doit contenir au moins 6 caractères.');
            setInputState(loginPassword, false);
            return;
        }

        // Vérification des credentials
        const result = verifyCredentials(identifier, password);

        if (result.success) {
         
            Storage.setCurrentUser({
                id: result.user.id,
                username: result.user.username,
                email: result.user.email,
                nom: result.user.nom
            });

            showMessage('✓ Connexion réussie ! Redirection...', 'success');
            
           
            setTimeout(() => {
                window.location.href = '../indexx.html'; 
            }, 1500);
        } else {
            // ❌ Échec
            showMessage(result.message, 'error');
            loginPassword.value = ''; // Clear password field
            setInputState(loginPassword, false);
        }
    });

  
    // VÉRIFIER SI UTILISATEUR DÉJÀ CONNECTÉ
  
    const currentUser = Storage.getCurrentUser();
    if (currentUser) {
        showMessage(`👋 Bon retour, ${currentUser.username} !`, 'success');

    }
});