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