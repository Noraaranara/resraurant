const carousel = document.querySelector('.testimonial__fb');
const slides = document.querySelectorAll('.testimonial__fb-card');
const indicators = document.querySelectorAll('.testimonial__indicator');

if (!carousel || !slides.length || !indicators.length) {
    console.error('Элементы не найдены!');
}

let currentSlide = 0;

const showSlides = (index) => {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });

    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
    });

    carousel.style.transform = `translateX(-${index * 33}%)`;
}

slides.forEach((slide, index) => {
    slide.addEventListener('click', () => {
        currentSlide = index;
        showSlides(currentSlide);

        const slideRect = slide.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const scrollTop = window.pageYOffset;

        const scrollTo = scrollTop + (slideRect.top - (windowHeight / 2) + (slideRect.height / 2));

        window.scrollTo({
            top: scrollTo,
            behavior: 'smooth'
        });
    });
});

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentSlide = index;
        showSlides(currentSlide);
    });
})


showSlides(currentSlide);