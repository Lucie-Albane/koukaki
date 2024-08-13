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
    // récupère la position de défilement
    const scrollPosition = window.scrollY;
    const bannerVideo = document.querySelector('.banner-video');
    const logoContainer = document.querySelector('.logo-container');

    // application de l'effet parallax sur les variables si elles existent
    if (bannerVideo) {
        bannerVideo.style.transform = `translateY(${scrollPosition * 0.1}px)`;
    }
    if (logoContainer) {
        logoContainer.style.transform = `translate(${scrollPosition * 0.3}px))`;
    }
});
/* ---------- FIN DE PARALLAX HERO HEADER ---------- */