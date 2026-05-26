

// 1. DONNÉES PRODUITS (Tableau JavaScript)

const products = [
    {
        id: 1,
        name: "Red Dead Redemption II",
        category: "action",
        price: 59.99,
        image: "./Rectangle 135.png",
        description: "Amérique, 1899. L'Ouest sauvage touche à sa fin. Après un braquage qui tourne mal, Arthur Morgan et le gang de Van der Linde sont traqués par les forces de l'ordre.",
        featured: true,
        promo: false,
        discount: 0,
        platforms: ["PC", "PS5", "Xbox"]
    },
    {
        id: 2,
        name: "Starfield",
        category: "rpg",
        price: 69.99,
        image: "./Rectangle 145.png",
        description: "Prépare-toi à explorer l'infini. Avec Starfield, embarque pour une aventure intergalactique où chaque planète est une nouvelle découverte et chaque mission un nouveau défi.",
        featured: true,
        promo: false,
        discount: 0,
        platforms: ["PC", "Xbox"]
    },
    {
        id: 3,
        name: "Cyberpunk 2077",
        category: "action",
        price: 49.99,
        image: "./Rectangle 137.png",
        description: "Bienvenue à Night City. Plonge dans l'univers sombre et futuriste de Cyberpunk où la technologie règne et le danger est partout.",
        featured: true,
        promo: false,
        discount: 0,
        platforms: ["PC", "PS5", "Xbox"]
    },
    {
        id: 4,
        name: "Call of Duty",
        category: "action",
        price: 69.99,
        image: "./Rectangle 166.png",
        description: "Prépare-toi pour le combat. Plonge dans l'univers intense de Call of Duty où chaque mission peut changer le cours de la bataille.",
        featured: true,
        promo: false,
        discount: 0,
        platforms: ["PC", "PS5", "Xbox"]
    },
    {
        id: 5,
        name: "Horizon Forbidden West",
        category: "aventure",
        price: 59.99,
        image: "./Horizon Forbidden West.jpg",
        description: "Aloy revient dans une aventure épique à l'ouest interdit.",
        featured: false,
        promo: true,
        discount: 20,
        platforms: ["PC", "PS5", "Xbox"]
    },
    {
        id: 6,
        name: "The Legend of Zelda",
        category: "aventure",
        price: 59.99,
        image: "./Zelda.jpg",
        description: "Une aventure légendaire dans un monde ouvert magnifique.",
        featured: false,
        promo: true,
        discount: 20,
        platforms: ["Switch"]
    },
    {
        id: 7,
        name: "Resident Evil Requiem",
        category: "horreur",
        price: 54.99,
        image: "./Resident Evil Requiem.jpg",
        description: "Survivez à l'horreur dans ce nouveau chapitre effrayant.",
        featured: false,
        promo: true,
        discount: 20,
        platforms: ["PC", "PS5", "Xbox"]
    },
    {
        id: 8,
        name: "Gran Turismo 7",
        category: "sport",
        price: 69.99,
        image: "./Rectangle 198.png",
        description: "La course ultime avec des graphismes époustouflants.",
        featured: false,
        promo: true,
        discount: 20,
        platforms: ["PS5"]
    },
    {
        id: 9,
        name: "Baldur's Gate",
        category: "rpg",
        price: 59.99,
        image: "./Baldu's gate.jpg",
        description: "Forgez votre destin dans ce RPG épique.",
        featured: false,
        promo: true,
        discount: 20,
        platforms: ["PC", "PS5", "Xbox"]
    },
    {
        id: 10,
        name: "God of War Ragnarok",
        category: "action",
        price: 69.99,
        image: "./God od war Ragnarok.jpg",
        description: "La saga continue avec Kratos et Atreus.",
        featured: false,
        promo: true,
        discount: 20,
        platforms: ["PS5"]
    },
    {
        id: 11,
        name: "Starfield",
        category: "rpg",
        price: 69.99,
        image: "./Startfield.jpg",
        description: "Explorez les étoiles dans ce RPG spatial.",
        featured: false,
        promo: true,
        discount: 20,
        platforms: ["PC", "Xbox"]
    },
    {
        id: 12,
        name: "Forza Horizon 5",
        category: "sport",
        price: 59.99,
        image: "./Forza Horizon5.jpg",
        description: "Explorez le Mexique dans ce jeu de course open-world.",
        featured: false,
        promo: true,
        discount: 20,
        platforms: ["PC", "Xbox"]
    }
];


// 2. UTILISATEURS SIMULÉS (Authentification)

const defaultUsers = [
    {
        id: 1,
        email: "demo@gaminghub.fr",
        password: "demo123",
        name: "Utilisateur Demo",
        registered: "2024-01-15"
    }
];


// 3. EXPRESSIONS RÉGULIÈRES 
const RegexPatterns = {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^0[1-9]([ .-]?[0-9]{2}){4}$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/,
    name: /^[a-zA-ZàâäéèêëïîôùûüÿçÀÂÄÉÈÊËÏÎÔÙÛÜŸÇ\s'-]{2,50}$/,
    postalCode: /^[0-9]{5}$/,
    city: /^[a-zA-ZàâäéèêëïîôùûüÿçÀÂÄÉÈÊËÏÎÔÙÛÜŸÇ\s'-]{2,100}$/
};


// 4. FONCTIONS D'AFFICHAGE DYNAMIQUE



function renderFeaturedGames() {
    const container = document.getElementById('games-grid') || document.querySelector('.games-grid');
    if (!container) return;
    
    const featured = products.filter(p => p.featured);
    
    
    if (container.children.length > 0 && !container.dataset.dynamic) return;
    
    container.innerHTML = featured.map((product, index) => {
        const isReverse = index % 2 === 1 ? 'reverse' : '';
        return `
            <article class="game-card ${isReverse}" data-id="${product.id}" data-category="${product.category}">
                <div class="bg-layer" style="--card-bg-image: url('${product.image}')"></div>
                <div class="game-text-box">
                    <h2 class="game-title">${product.name.toUpperCase()}</h2>
                    <p class="game-description">${product.description}</p>
                </div>
                <div class="game-image">
                    <img src="${product.image}" alt="${product.name}">
                    <button class="btn-panier" onclick="addToCart(${product.id})">Panier</button>
                </div>
            </article>
        `;
    }).join('');
    
    container.dataset.dynamic = 'true';
}


function renderPromoGames() {
    const container = document.querySelector('.promo-grid');
    if (!container) return;
    
    const promo = products.filter(p => p.promo);
    
    if (container.children.length > 0 && !container.dataset.dynamic) return;
    
    container.innerHTML = promo.map(product => {
        const discountedPrice = (product.price * (1 - product.discount/100)).toFixed(2);
        return `
            <div class="promo-card" data-id="${product.id}" data-category="${product.category}">
                <div class="discount-badge">-${product.discount}%</div>
                <img src="${product.image}" alt="${product.name}" class="game-cover">
                <div class="game-info">
                    <h3 class="game-title">${product.name}</h3>
                    <p class="game-platforms">(${product.platforms.join(', ')})</p>
                    <p class="game-date">18 février 2022</p>
                    <p style="color: #4CAF50; font-weight: bold; margin-top: 5px;">
                        ${discountedPrice}€ 
                        <small style="text-decoration: line-through; color: #888;">${product.price}€</small>
                    </p>
                </div>
            </div>
        `;
    }).join('');
    
    container.dataset.dynamic = 'true';
}


function renderFAQ() {
    const container = document.querySelector('.faq-container');
    if (!container || container.children.length > 0) return;
    
    const faqData = [
        { q: "Qui sommes-nous ?", a: "Gaming.HUB est une plateforme de référence dédiée aux passionnés de jeux vidéo. Fondée en 2020, notre équipe d'experts sélectionne pour vous les meilleurs jeux et accessoires gaming." },
        { q: "Que proposons-nous exactement ?", a: "Nous proposons une large gamme de produits gaming : jeux vidéo pour toutes les plateformes (PC, PlayStation, Xbox, Nintendo), consoles, accessoires et produits dérivés." },
        { q: "Pourquoi choisir notre site ?", a: "Prix compétitifs, livraison rapide, service client 6j/7, conseils d'experts, programme de fidélité et garantie satisfait ou remboursé de 30 jours." },
        { q: "Comment passer une commande ?", a: "Créez un compte, ajoutez les produits au panier, validez votre commande, choisissez votre mode de paiement et confirmez." }
    ];
    
    container.innerHTML = faqData.map(item => `
        <div class="faq-item">
            <div class="faq-question" onclick="toggleFaq(this)">
                <span>${item.q}</span>
                <i class="fas fa-chevron-down"></i>
            </div>
            <div class="faq-answer">
                <p>${item.a}</p>
            </div>
        </div>
    `).join('');
}


// 5. FILTRAGE ET RECHERCHE (Côté client)


// Filtrer par catégorie
function filterByCategory(category) {
    const allCards = document.querySelectorAll('.promo-card, .game-card');
    
    allCards.forEach(card => {
        const cardCategory = card.dataset.category;
        if (category === 'all' || cardCategory === category) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}

// Recherche en temps réel
function setupSearch() {
    const searchInput = document.querySelector('.search-bar input');
    if (!searchInput) return;
    
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const allCards = document.querySelectorAll('.promo-card, .game-card');
        
        allCards.forEach(card => {
            const title = card.querySelector('.game-title')?.textContent.toLowerCase() || '';
            const description = card.querySelector('.game-description')?.textContent.toLowerCase() || '';
            
            if (title.includes(query) || description.includes(query)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    });
}


// 6. PANIER AVEC LOCALSTORAGE


function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('gaminghub_cart')) || [];
    
    if (!cart.includes(productId)) {
        cart.push(productId);
        localStorage.setItem('gaminghub_cart', JSON.stringify(cart));
        updateCartDisplay();
        showToast('✅ Produit ajouté au panier!');
    } else {
        showToast('ℹ️ Déjà dans le panier');
    }
}

function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('gaminghub_cart')) || [];
    cart = cart.filter(id => id !== productId);
    localStorage.setItem('gaminghub_cart', JSON.stringify(cart));
    updateCartDisplay();
    showToast('🗑️ Produit retiré');
}

function updateCartDisplay() {
    const cart = JSON.parse(localStorage.getItem('gaminghub_cart')) || [];
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        cartCount.textContent = `(${cart.length})`;
    }
}

function getCartProducts() {
    const cart = JSON.parse(localStorage.getItem('gaminghub_cart')) || [];
    return products.filter(p => cart.includes(p.id));
}

function calculateCartTotal() {
    return getCartProducts().reduce((total, product) => {
        const price = product.discount > 0 
            ? product.price * (1 - product.discount/100) 
            : product.price;
        return total + price;
    }, 0);
}

//
// 7. AUTHENTIFICATION SIMULÉE
// 

function loadUsers() {
    const stored = localStorage.getItem('gaminghub_users');
    if (stored) {
        return JSON.parse(stored);
    }
    localStorage.setItem('gaminghub_users', JSON.stringify(defaultUsers));
    return [...defaultUsers];
}

function saveUsers(users) {
    localStorage.setItem('gaminghub_users', JSON.stringify(users));
}

function registerUser(email, password, name) {
    const users = loadUsers();
    
    if (users.find(u => u.email === email)) {
        return { success: false, message: "Cet email est déjà utilisé" };
    }
    
    const newUser = {
        id: users.length + 1,
        email,
        password,
        name,
        registered: new Date().toISOString()
    };
    
    users.push(newUser);
    saveUsers(users);
    return { success: true, message: "Compte créé avec succès!" };
}

function loginUser(email, password) {
    const users = loadUsers();
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        const session = {
            userId: user.id,
            email: user.email,
            name: user.name,
            loginTime: new Date().toISOString()
        };
        localStorage.setItem('gaminghub_session', JSON.stringify(session));
        return { success: true, user };
    }
    return { success: false, message: "Email ou mot de passe incorrect" };
}

function logoutUser() {
    localStorage.removeItem('gaminghub_session');
    updateAuthUI();
    window.location.href = 'index.html';
}

function getCurrentUser() {
    const session = localStorage.getItem('gaminghub_session');
    return session ? JSON.parse(session) : null;
}

function updateAuthUI() {
    const authButtons = document.querySelector('.auth-buttons');
    if (!authButtons) return;
    
    const user = getCurrentUser();
    
    if (user) {
        authButtons.innerHTML = `
            <i class="fas fa-shopping-cart cart-icon"></i>
            <span id="cart-count">(0)</span>
            <span style="color: #888; font-size: 0.9rem;">Bonjour, ${user.name.split(' ')[0]}!</span>
            <button class="btn-connexion" onclick="logoutUser()" style="background: #ff6b35;">Déconnexion</button>
        `;
        updateCartDisplay();
    }
}

//
// 8. VALIDATION FORMULAIRES (RegEx)
// 

function validateEmail(email) {
    return RegexPatterns.email.test(email);
}

function validatePhone(phone) {
    return RegexPatterns.phone.test(phone.replace(/\s/g, ''));
}

function validatePassword(password) {
    return RegexPatterns.password.test(password);
}

function validateName(name) {
    return RegexPatterns.name.test(name);
}

function showError(input, message) {
    const formGroup = input.closest('.form-group');
    if (!formGroup) {
        input.style.borderColor = '#ff4444';
        return;
    }
    
    input.classList.add('error');
    let errorSpan = formGroup.querySelector('.error-message');
    if (!errorSpan) {
        errorSpan = document.createElement('span');
        errorSpan.className = 'error-message';
        errorSpan.style.color = '#ff4444';
        errorSpan.style.fontSize = '0.85rem';
        errorSpan.style.display = 'block';
        formGroup.appendChild(errorSpan);
    }
    errorSpan.textContent = message;
}

function clearError(input) {
    input.classList.remove('error');
    input.style.borderColor = '';
    const errorSpan = input.closest('.form-group')?.querySelector('.error-message');
    if (errorSpan) errorSpan.textContent = '';
}

function setupFormValidation() {
    // Formulaire d'inscription
    const inscriptionForm = document.getElementById('inscription-form');
    if (inscriptionForm) {
        inscriptionForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = {
                nom: document.getElementById('nom')?.value.trim(),
                prenom: document.getElementById('prenom')?.value.trim(),
                email: document.getElementById('email')?.value.trim(),
                password: document.getElementById('password')?.value,
                confirmPassword: document.getElementById('confirm-password')?.value,
                telephone: document.getElementById('telephone')?.value.trim()
            };
            
            // Validation
            if (!validateName(formData.nom)) {
                showError(document.getElementById('nom'), 'Nom invalide (2-50 lettres)');
                return;
            }
            if (!validateName(formData.prenom)) {
                showError(document.getElementById('prenom'), 'Prénom invalide');
                return;
            }
            if (!validateEmail(formData.email)) {
                showError(document.getElementById('email'), 'Email invalide');
                return;
            }
            if (!validatePassword(formData.password)) {
                showError(document.getElementById('password'), 'Mot de passe trop faible (8+ caractères, maj/min/chiffre/spécial)');
                return;
            }
            if (formData.password !== formData.confirmPassword) {
                showError(document.getElementById('confirm-password'), 'Les mots de passe ne correspondent pas');
                return;
            }
            
            // Inscription
            const result = registerUser(formData.email, formData.password, `${formData.prenom} ${formData.nom}`);
            if (result.success) {
                alert('✅ Compte créé! Connectez-vous maintenant.');
                window.location.href = 'connexion.html';
            } else {
                showError(document.getElementById('email'), result.message);
            }
        });
    }
    
    // Formulaire de connexion
    const connexionForm = document.getElementById('connexion-form');
    if (connexionForm) {
        connexionForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const email = document.getElementById('email')?.value.trim();
            const password = document.getElementById('password')?.value;
            
            if (!validateEmail(email)) {
                showError(document.getElementById('email'), 'Email invalide');
                return;
            }
            
            const result = loginUser(email, password);
            if (result.success) {
                alert(`✅ Bienvenue, ${result.user.name}!`);
                updateAuthUI();
                window.location.href = 'index.html';
            } else {
                showError(document.getElementById('email'), result.message);
            }
        });
    }
    
    // Clear errors on input
    document.querySelectorAll('.form-input').forEach(input => {
        input.addEventListener('input', () => clearError(input));
        input.addEventListener('blur', () => { if(input.value) clearError(input); });
    });
}


// 9. UTILITAIRES


function showToast(message) {
    
    const toast = document.createElement('div');
    toast.style.cssText = `
        position: fixed; bottom: 30px; right: 30px;
        background: linear-gradient(135deg, #4CAF50, #45a049);
        color: white; padding: 15px 25px; border-radius: 15px;
        font-family: 'Jaini Purva', cursive; z-index: 9999;
        box-shadow: 0 5px 20px rgba(76,175,80,0.4);
        animation: slideIn 0.3s ease;
    `;
    toast.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}


if (!document.getElementById('toast-styles')) {
    const style = document.createElement('style');
    style.id = 'toast-styles';
    style.textContent = `
        @keyframes slideIn { from { transform: translateX(150%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
        @keyframes slideOut { from { transform: translateX(0); opacity: 1; } to { transform: translateX(150%); opacity: 0; } }
    `;
    document.head.appendChild(style);
}

// FAQ Toggle
function toggleFaq(element) {
    const faqItem = element.parentElement;
    const isActive = faqItem.classList.contains('active');
    
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });
    
    if (!isActive) {
        faqItem.classList.add('active');
    }
}

// Newsletter
function handleNewsletterSubmit(event) {
    event.preventDefault();
    const email = document.querySelector('.newsletter-input')?.value;
    if (email && validateEmail(email)) {
        showToast('✅ Inscrit à la newsletter!');
        event.target.reset();
    }
}

// ============================================
// 10. INITIALISATION
//

document.addEventListener('DOMContentLoaded', () => {
    // Chargement des données
    loadUsers();
    
    // Rendu dynamique
    renderFeaturedGames();
    renderPromoGames();
    renderFAQ();
    
    // Fonctionnalités
    setupSearch();
    setupFormValidation();
    updateAuthUI();
    updateCartDisplay();
    
    // Animations au scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.promo-card, .game-card, .faq-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Bouton "Voir plus"
    const seeMoreBtn = document.querySelector('.btn-voir-plus');
    if (seeMoreBtn) {
        seeMoreBtn.addEventListener('click', () => {
            window.location.href = 'Content/produits.html';
        });
    }
    
    // Navigation smooth
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});


if (typeof module !== 'undefined' && module.exports) {
    module.exports = { products, addToCart, loginUser, registerUser, validateEmail };
}