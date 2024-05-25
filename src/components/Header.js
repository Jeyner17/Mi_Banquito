document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu-button');
    const dropdownMenu = document.getElementById('dropdown-menu');
    const menuTemplate = document.getElementById('menu-template').content;

    // Insertar el contenido del menú desde el template
    dropdownMenu.appendChild(document.importNode(menuTemplate, true));

    const closeMenuButton = document.getElementById('close-menu');

    menuButton.addEventListener('click', () => {
        dropdownMenu.classList.toggle('show');
    });

    closeMenuButton.addEventListener('click', () => {
        dropdownMenu.classList.remove('show');
    });

    const carouselContainer = document.querySelector('.carousel-container');
    const carouselTemplate = document.getElementById('carousel-template').content;
    
    // Datos del carrusel
    const carouselData = [
        { src: 'Diseño sin título/3.png'},
        { src: 'Diseño sin título/2.png'}
    ];

    // Crear slides del carrusel desde el template
    carouselData.forEach(data => {
        const slide = document.importNode(carouselTemplate, true);
        slide.querySelector('img').src = data.src;
        slide.querySelector('.carousel-caption').textContent = data.caption;
        carouselContainer.appendChild(slide);
    });

    let currentSlide = 0;

    function showSlide(index) {
        const slides = document.querySelectorAll('.carousel-slide');
        if (index >= slides.length) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = slides.length - 1;
        } else {
            currentSlide = index;
        }
        carouselContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    window.moveSlide = function (n) {
        showSlide(currentSlide + n);
    };

    showSlide(currentSlide);
});