/* ---------- FADE IN AU SCROLL DES TITRES ---------- */
let titles = document.querySelectorAll('h2');

document.addEventListener('scroll', fadeIn);

function fadeIn() {
    titles.forEach(title => {
        // variable pour obtenir les dimensions et la position du titre par raport à la fenêtre de visualisation
        const rect = title.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // si l'élément est dans la vue ou légèrement en dessous de la vue
        if (rect.top < windowHeight && rect.bottom >= 0) {
            title.classList.add('visible');
        } else {
            title.classList.remove('visible');
        }
    });
}
document.addEventListener('DOMContentLoaded', fadeIn);
/* ---------- FIN DE FADE IN AU SCROLL DES TITRES ---------- */

/* ---------- PARALLAX HERO HEADER ---------- */
document.addEventListener('scroll', function() {
    // variable stockant la distance en pixels entre le haut de la fenêtre du nav & le haut de la page web = la quantité de contenu scrollé 
    const scrollPosition = window.scrollY;
    const bannerVideo = document.querySelector('.banner-video');
    const logoContainer = document.querySelector('.logo-container');

    if (bannerVideo) {
        bannerVideo.style.transform = `translateY(${scrollPosition * 0.1}px)`;
    }
    if (logoContainer) {
        logoContainer.style.transform = `translateY(${scrollPosition * 0.3}px)`;
    }
});
/* ---------- FIN DE PARALLAX HERO HEADER ---------- */

/* ---------- SWIPER JS POUR LA SECTION PERSONNAGES ---------- */
document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: false,
        slidesPerView: 3,
        spaceBetween: 30,
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 70,
            modifier: 1,
            slideShadows: false,
        },
        loop: true,
        autoplay: {
            delay: 2000,
          },
    });
});
/* ---------- FIN SWIPER JS POUR LA SECTION PERSONNAGES ---------- */

/* ---------- PARALLAX LIEU NUAGES ---------- */
document.addEventListener('DOMContentLoaded', function () {
    const cloudsContainer = document.querySelector('.clouds');
    const clouds = document.querySelectorAll('.cloud');

    function isInView() {
        // variable pour obtenir les dimensions et la position du conteneur par raport à la fenêtre de visualisation
        const rect = cloudsContainer.getBoundingClientRect();
        // vérifie si le conteneur est visible : si le haut du conteneur est inferieur ou égal à la hauteur de la fenetre,
        // et que le bas du conteneur est supérieur ou égal à 0, c'est qu'il est dans la fenêtre du navigateur
        return rect.top <= window.innerHeight && rect.bottom >= 0;
    }

    function parallaxScroll() {
        if (isInView()) {
            const scrollPosition = window.scrollY;
            // position du conteneur par rapport au haut de la page
            const containerOffset = cloudsContainer.offsetTop;
            // hauteur du conteneur
            const containerHeight = cloudsContainer.offsetHeight;
            // scroll% = distance entre la position actuelle du scroll et le haut du conteneur / la hauteur du conteneur = la portion scrollée de la hauteur du conteneur
            // 200px - 50px / 800px = 0,18% scrollé
            const scrollPercent = (scrollPosition - containerOffset) / containerHeight;

            // translatex sur chaque nuage
            clouds.forEach((cloud) => {
                cloud.style.transform = `translateX(-${scrollPercent * 300}px)`;
            });
        }
    }

    window.addEventListener('scroll', parallaxScroll);
});
/* ---------- FIN DE PARALLAX LIEU NUAGES ---------- */

/* ---------- GESTION BURGER MENU ---------- */
document.addEventListener('DOMContentLoaded', function () {
    const burgerOpenIcon = document.querySelector('.burger-menu-open-icon');
    const burgerCloseIcon = document.querySelector('.burger-menu-close-icon');
    const burger = document.querySelector('.burger-menu');
    const overlayMenu = document.querySelector('.overlay-menu');
    const navmenu = document.querySelector('.nav-menu');

    function displayMenu() {
        // change les classes css pour rendre les éléments visibles ou non
        burgerCloseIcon.classList.toggle('hidden');
        burgerOpenIcon.classList.toggle('hidden');
        overlayMenu.classList.toggle('show');
    }
    burger.addEventListener('click', displayMenu);  
    navmenu.addEventListener('click', displayMenu);
});
/* ---------- FIN GESTION BURGER MENU ---------- */