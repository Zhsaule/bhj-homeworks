const sliders = document.querySelectorAll('.slider__item');
const arrowPrev = document.querySelector('.slider__arrow_prev');
const arrowNext = document.querySelector('.slider__arrow_next');
const dots = document.querySelectorAll('.slider__dot');

let currentSlide = 0;

// Функция обновления слайдера
const updateSlider = () => {
    sliders.forEach((item, index) => {
        item.classList.toggle('slider__item_active', index === currentSlide);
    });

    dots.forEach((dot, index) => {
        dot.classList.toggle('slider__dot_active', index === currentSlide);
    });
};

// Функция перехода к предыдущему слайду
const goToPrevSlide = () => {
    currentSlide = (currentSlide - 1 + sliders.length) % sliders.length;
    updateSlider();
};

// Функция перехода к следующему слайду
const goToNextSlide = () => {
    currentSlide = (currentSlide + 1) % sliders.length;
    updateSlider();
};

// Обработчики событий
arrowPrev.onclick = goToPrevSlide;
arrowNext.onclick = goToNextSlide;

dots.forEach((dot, index) => {
    dot.onclick = () => {
        currentSlide = index;
        updateSlider();
    };
});

// Обновление слайдера
updateSlider();