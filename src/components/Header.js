document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu-button');
    const dropdownMenu = document.getElementById('dropdown-menu');
    const closeMenuButton = document.getElementById('close-menu');

    menuButton.addEventListener('click', () => {
        dropdownMenu.classList.toggle('show');
    });

    closeMenuButton.addEventListener('click', () => {
        dropdownMenu.classList.remove('show');
    });

    const carouselContainer = document.querySelector('.carousel-container');
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
