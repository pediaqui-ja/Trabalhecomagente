

let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    
    slides.forEach(slide => (slide.style.display = 'none')); // Ocultar todos os slides

    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1; // Resetar se for o último slide

    slides[slideIndex - 1].style.display = 'block'; // Mostrar slide atual

    setTimeout(showSlides, 3000); // Mudar slide a cada 3 segundos
}