
// DONNÉES DES PRODUITS

const produits = [
    // ===== HERO 1 : Baldur's Gate 3 (en haut) =====
    {
        id: 100,
        titre: "Baldur's Gate 3",
        categorie: "hero",
        image: "../images/clairObscurExpedition.jpg",
        plateformes: "PC  Xbox  PlayStation 5",
        description: "Avec Baldur's Gate 3, embarquez pour une aventure épique où tes décisions façonnent l'histoire, tes alliances changent le destin et chaque rencontre peut devenir légende... ou tragédie.\n\nEntre magie, mystères et combats stratégiques, ton destin n'est pas écrit - c'est à toi de le forger.",
        note: "(4/5)",
        isMainHero: true,
        heroPosition: "top"
    },
    // ===== HERO 2 : Clair Obscur (entre Survival et Exploration) =====
    {
        id: 101,
        titre: "Clair Obscur: Expedition 33",
        categorie: "hero",
        image: "../images/ClairObscurExpedition33.png",
        plateformes: "PC  Xbox  PlayStation",
        tagline: "chaque pas te rapproche de la vérité... ou de l'oubli.",
        dateSortie: "24 avril 2025",
        description: "Avec Clair Obscur: Expedition 33, plonge dans un monde où chaque année efface des vies et où une expédition devient le dernier espoir de l'humanité.\n\nEntre mystère, émotions et combats intenses.",
        note: "(4.2/5)",
        isMainHero: true,
        heroPosition: "after-survival"
    },
    // ===== HERO 3 : Resident Evil 6 (avant Sport) =====
    {
        id: 102,
        titre: "Resident Evil 6",
        categorie: "hero",
        image: "../images/Residentevil6.png",
        plateformes: "PC  PS5  PlayStation 5",
        tagline: "la survie dépend de ton courage et de ton instinct.",
        dateSortie: "2 octobre 2012",
        description: "Avec Resident Evil 6, plonge dans une course contre la montre où les menaces se multiplient à chaque coin de rue. Entre zombies, complots et créatures mutantes, chaque décision peut sauver... ou condamner.",
        note: "(4.2/5)",
        isMainHero: true,
        heroPosition: "before-sport"
    },
    
    // ===== SURVIVAL =====
    { id: 1, titre: "Alan Wake 2", categorie: "survival", image: "../images/AlaneWake2.png", dateSortie: "27 oct 2023", prix: 6999, genre: "Horreur" },
    { id: 2, titre: "Dead Island 2", categorie: "survival", image: "../images/Deadisland2.png", dateSortie: "21 avr 2023", prix: 5999, genre: "Horreur" },
    { id: 3, titre: "Resident Evil 4", categorie: "survival", image: "../images/Residentevil4.png", dateSortie: "24 mars 2023", prix: 5499, genre: "Horreur" },
    { id: 4, titre: "Dredge", categorie: "survival", image: "../images/Dredge.png", dateSortie: "30 mars 2023", prix: 2499, genre: "Aventure" },
    { id: 5, titre: "Callisto Protocol", categorie: "survival", image: "../images/Thecallistoprotocol.jpg", dateSortie: "2 déc 2022", prix: 4999, genre: "Horreur" },
    
    // ===== EXPLORATION =====
    { id: 6, titre: "Sea of Stars", categorie: "exploration", image: "../images/JJ.jpg", dateSortie: "29 août 2023", prix: 3499, genre: "RPG" },
    { id: 7, titre: "Horizon Forbidden West", categorie: "exploration", image: "../images/HorizonForbiddenWest.jpg", dateSortie: "18 fév 2022", prix: 6999, genre: "Aventure" },
    { id: 8, titre: "The Legend of Zelda", categorie: "exploration", image: "../images/Zelda.jpg", dateSortie: "12 mai 2023", prix: 6999, genre: "Aventure" },
    { id: 9, titre: "Starfield", categorie: "exploration", image: "../images/Startfield.jpg", dateSortie: "6 sept 2023", prix: 6999, genre: "RPG" },
    { id: 10, titre: "Dave the Diver", categorie: "exploration", image: "../images/DaveTheDriver.png", dateSortie: "28 juin 2023", prix: 1999, genre: "Aventure" },
    
    // ===== SPORT =====
    { id: 11, titre: "F1 23", categorie: "sport", image: "../images/F123.png", dateSortie: "16 juin 2023", prix: 5999, genre: "Course" },
    { id: 12, titre: "Rocket League", categorie: "sport", image: "../images/RocketLeague.png", dateSortie: "23 sept 2020", prix: 0, genre: "Sport" },
    { id: 13, titre: "NBA 2K23", categorie: "sport", image: "../images/NBA2K23.png", dateSortie: "9 sept 2022", prix: 5999, genre: "Sport" },
    { id: 14, titre: "Gran Turismo 7", categorie: "sport", image: "../images/GranTurismo7.png", dateSortie: "4 mars 2022", prix: 6999, genre: "Course" },
    { id: 15, titre: "FIFA 23", categorie: "sport", image: "../images/FIFA23.png", dateSortie: "30 sept 2022", prix: 5999, genre: "Sport" },
    
    // ===== POPULAIRE =====
    { id: 16, titre: "GTA V", categorie: "populaire", image: "../images/GTA.png", dateSortie: "17 sept 2013", prix: 2999, genre: "Action" },
    { id: 17, titre: "God of War Ragnarök", categorie: "populaire", image: "../images/GOW.png", dateSortie: "9 nov 2022", prix: 6999, genre: "Action" },
    { id: 18, titre: "Forza Horizon 5", categorie: "populaire", image: "../images/ForzaHorizon5.png", dateSortie: "9 nov 2021", prix: 5999, genre: "Course" },
    { id: 19, titre: "Red Dead Redemption 2", categorie: "populaire", image: "../images/Rectangle135.png", dateSortie: "26 oct 2018", prix: 3999, genre: "Aventure" },
    { id: 20, titre: "Fortnite", categorie: "populaire", image: "../images/Fortnite.png", dateSortie: "26 sept 2017", prix: 0, genre: "Battle Royale" }
];

const categories = [
    { key: "all", label: "Tout" },
    { key: "survival", label: "Survival" },
    { key: "exploration", label: "Exploration" },
    { key: "sport", label: "Sport" },
    { key: "populaire", label: "Populaire" }
];

let filtreActuel = "all";


// INITIALISATION

document.addEventListener('DOMContentLoaded', () => {
    afficherContenu(filtreActuel);
    
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const terme = e.target.value.toLowerCase().trim();
            if (terme === '') {
                afficherContenu(filtreActuel);
            } else {
                rechercher(terme);
            }
        });
    }
    

    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    updateCartCounterFromJeux(cart.reduce((sum, item) => sum + (item.quantity || 1), 0));
});


// GÉNÉRER LES FILTRES

function genererFiltres() {
    const container = document.getElementById('filtersContainer');
    if (!container) return;
    container.innerHTML = '';
    
    categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = `filter-btn ${cat.key === filtreActuel ? 'active' : ''}`;
        btn.textContent = cat.label;
        btn.onclick = () => afficherContenu(cat.key);
        container.appendChild(btn);
    });
}


// CRÉER UNE SECTION HERO

function creerHeroSection(jeu) {
    const heroSection = document.createElement('div');
    heroSection.className = 'hero-section';
    heroSection.style.backgroundImage = `url('${jeu.image}')`;
    
    const taglineHTML = jeu.tagline 
        ? `<p class="hero-tagline">${jeu.tagline} <span style="color:#4ade80; margin-left:8px;">${jeu.dateSortie}</span></p>` 
        : '';
    
   
    heroSection.innerHTML = `
        <div class="hero-overlay"></div>
        <div class="hero-content" onclick="window.location.href='./voirplusdejeux.html?id=${jeu.id}'" style="cursor:pointer">
            <div class="hero-info" onclick="event.stopPropagation()">
                <h1 class="hero-title">${jeu.titre}</h1>
                ${taglineHTML}
                <div class="hero-platforms">${jeu.plateformes}</div>
                <p class="hero-description">${jeu.description.replace(/\n/g, '<br>')}</p>
                <div class="hero-rating">
                    <div class="stars">
                        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star-half-stroke"></i>
                    </div>
                    <span class="rating-text">${jeu.note}</span>
                </div>
                <div class="hero-actions" onclick="event.stopPropagation()">
                    <button class="btn-panier" onclick="addToCartFromJeux(${jeu.id}, '${jeu.titre.replace(/'/g, "\\'")}', '${jeu.image}', ${jeu.prix || 7500}, '${jeu.genre || 'Action'}'); createRipple(event)">
                        <i class="fas fa-shopping-cart"></i> Ajouter au panier
                    </button>
                    <button class="btn-plus" onclick="event.stopPropagation(); window.location.href='./voirplusdejeux.html?id=${jeu.id}'; createRipple(event)">
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
    return heroSection;
}


// CRÉER UNE SECTION DE JEUX

function creerSectionJeux(titre, jeux) {
    const section = document.createElement('div');
    section.className = 'game-section';
    
  
    const cardsHTML = jeux.map(jeu => `
        <div class="card" onclick="window.location.href='./voirplusdejeux.html?id=${jeu.id}'" style="cursor:pointer">
            <div class="card-image" 
                 style="background-image: url('${jeu.image}');"
                 onerror="this.style.background='linear-gradient(135deg, #111, #222)'; this.innerHTML='<span style=\\'display:flex;align-items:center;justify-content:center;height:100%;color:#555;font-size:12px\\'>📷 Image indisponible</span>'">
            </div>
            <div class="card-info">
                <h3 class="card-title">${jeu.titre}</h3>
                <div class="card-meta">
                    <span>(PC, PS5, Xbox)</span>
                    <span>${jeu.dateSortie}</span>
                </div>
                <button class="btn-add-cart-small" onclick="event.stopPropagation(); addToCartFromJeux(${jeu.id}, '${jeu.titre.replace(/'/g, "\\'")}', '${jeu.image}', ${jeu.prix || 7500}, '${jeu.genre || 'Action'}'); createRipple(event)">
                    <i class="fas fa-cart-plus"></i>
                    <span>Ajouter</span>
                </button>
            </div>
        </div>
    `).join('');

    section.innerHTML = `
        <div class="section-header">
            <h2 class="section-title">${titre}</h2>
            <a href="#" class="view-all">Tout voir <i class="fa-solid fa-arrow-right"></i></a>
        </div>
        <div class="cards-container">
            ${cardsHTML}
        </div>
    `;
    return section;
}


// AFFICHER LE CONTENU

function afficherContenu(categorie) {
    filtreActuel = categorie;
    const main = document.getElementById('mainContent');
    if (!main) return;
    
    main.innerHTML = '';

    if (categorie === 'all') {
        const heroTop = produits.find(p => p.isMainHero && p.heroPosition === "top");
        if (heroTop) main.appendChild(creerHeroSection(heroTop));
        
        const filtersBar = document.createElement('div');
        filtersBar.className = 'filters-bar';
        filtersBar.innerHTML = `<div class="filters-container" id="filtersContainer"></div>`;
        main.appendChild(filtersBar);
        genererFiltres();
        
        const gamesContainer = document.createElement('div');
        gamesContainer.className = 'games-container';
        
        const survival = produits.filter(p => p.categorie === "survival");
        if (survival.length) gamesContainer.appendChild(creerSectionJeux("Survival", survival));
        
        const heroAfterSurvival = produits.find(p => p.isMainHero && p.heroPosition === "after-survival");
        if (heroAfterSurvival) gamesContainer.appendChild(creerHeroSection(heroAfterSurvival));
        
        const exploration = produits.filter(p => p.categorie === "exploration");
        if (exploration.length) gamesContainer.appendChild(creerSectionJeux("Exploration", exploration));
        
        const heroBeforeSport = produits.find(p => p.isMainHero && p.heroPosition === "before-sport");
        if (heroBeforeSport) gamesContainer.appendChild(creerHeroSection(heroBeforeSport));
        
        const sport = produits.filter(p => p.categorie === "sport");
        if (sport.length) gamesContainer.appendChild(creerSectionJeux("Sport", sport));
        
        const populaire = produits.filter(p => p.categorie === "populaire");
        if (populaire.length) gamesContainer.appendChild(creerSectionJeux("Populaire", populaire));
        
        main.appendChild(gamesContainer);
        
    } else {
        const heroTop = produits.find(p => p.isMainHero && p.heroPosition === "top");
        if (heroTop) main.appendChild(creerHeroSection(heroTop));
        
        const filtersBar = document.createElement('div');
        filtersBar.className = 'filters-bar';
        filtersBar.innerHTML = `<div class="filters-container" id="filtersContainer"></div>`;
        main.appendChild(filtersBar);
        genererFiltres();
        
        const gamesContainer = document.createElement('div');
        gamesContainer.className = 'games-container';
        const jeuxAAfficher = produits.filter(p => p.categorie === categorie);
        
        if (jeuxAAfficher.length > 0) {
            const titreSection = categorie.charAt(0).toUpperCase() + categorie.slice(1);
            gamesContainer.appendChild(creerSectionJeux(titreSection, jeuxAAfficher));
        }
        
        main.appendChild(gamesContainer);
    }
}


// RECHERCHE

function rechercher(terme) {
    const gamesContainer = document.querySelector('.games-container');
    if (!gamesContainer) return;
    
    gamesContainer.innerHTML = '';

    const resultats = produits.filter(p => 
        p.titre.toLowerCase().includes(terme) && !p.isMainHero
    );

    if (resultats.length === 0) {
        gamesContainer.innerHTML = '<p style="color:#666; padding:20px; text-align:center;">Aucun jeu trouvé pour "' + terme + '"</p>';
        return;
    }

    const section = creerSectionJeux(`Résultats`, resultats);
    gamesContainer.appendChild(section);
}


//  FONCTIONS PANIER



function addToCartFromJeux(id, titre, image, prix, genre) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find(item => item.id === id);
    
    if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 1) + 1;
        showToastPanier(`+1 ${titre} dans le panier`, 'info');
    } else {
        cart.push({
            id: id,
            name: titre,
            genre: genre,
            platform: 'PC/PS5/Xbox',
            price: prix,
            image: image,
            quantity: 1
        });
        showToastPanier(`${titre} ajouté au panier ✓`, 'success');
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCounterFromJeux(cart.reduce((sum, item) => sum + (item.quantity || 1), 0));
}

// Afficher notification toast
function showToastPanier(message, type = 'success') {
    let toast = document.getElementById('toast-jeux');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast-jeux';
        toast.className = 'toast-jeux';
        toast.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            background: #111;
            border: 1px solid ${type === 'success' ? '#4ade80' : '#ff4444'};
            padding: 15px 25px;
            border-radius: 10px;
            color: #fff;
            display: flex;
            align-items: center;
            gap: 10px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.5);
            z-index: 9999;
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.3s;
            font-family: 'Jaini Purva', cursive;
            pointer-events: none;
        `;
        document.body.appendChild(toast);
    }
    
    toast.innerHTML = `<i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}" style="color:${type === 'success' ? '#4ade80' : '#ff4444'}"></i><span>${message}</span>`;
    toast.style.opacity = '1';
    toast.style.transform = 'translateY(0)';
    
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(20px)';
    }, 3000);
}

//  Mettre à jour le badge du panier dans la navbar
function updateCartCounterFromJeux(totalItems) {
    const cartIcon = document.querySelector('.cart-icon');
    if (!cartIcon) return;
    
    let badge = cartIcon.querySelector('.cart-count');
    if (!badge) {
        badge = document.createElement('span');
        badge.className = 'cart-count';
        badge.style.cssText = `
            position: absolute;
            top: -8px;
            right: -8px;
            background: #ff6b00;
            color: white;
            font-size: 11px;
            font-weight: bold;
            width: 18px;
            height: 18px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            animation: pulse 0.3s ease;
        `;
        cartIcon.style.position = 'relative';
        cartIcon.appendChild(badge);
    }
    badge.textContent = totalItems;
    badge.style.display = totalItems > 0 ? 'flex' : 'none';
}

// Animation pour le badge
if (!document.getElementById('pulse-style')) {
    const style = document.createElement('style');
    style.id = 'pulse-style';
    style.textContent = `
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.3); }
            100% { transform: scale(1); }
        }
    `;
    document.head.appendChild(style);
}

//  Effet de vague au clic sur les boutons
function createRipple(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    
    button.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
}