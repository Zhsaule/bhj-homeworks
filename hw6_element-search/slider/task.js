const sliders = document.querySelectorAll('.slider__item');
const arrowPrev = document.querySelector('.slider__arrow_prev');
const arrowNext = document.querySelector('.slider__arrow_next');
const dots = document.querySelectorAll('.slider__dot');

// let currentSlide = 0;

 // Функция обновления слайдера
const updateSlider = () => {
    const currentSlide = Array.from(sliders).findIndex(item => item.classList.contains('slider__item_active'));
    sliders.forEach((item, index) => {
        item.classList.toggle('slider__item_active', index === currentSlide);
    });

    dots.forEach((dot, index) => {
        dot.classList.toggle('slider__dot_active', index === currentSlide);
    });
};

// Функция перехода к предыдущему слайду
const goToPrevSlide = () => {
    updateSlider();
    const currentSlide = Array.from(sliders).findIndex(item => item.classList.contains('slider__item_active'));
    const prevSlide = (currentSlide - 1 + sliders.length) % sliders.length;
    closeOther(currentSlide);
    sliders[prevSlide].classList.add('slider__item_active');    
    updateSlider();
};

// Функция перехода к следующему слайду
const goToNextSlide = () => {
    updateSlider();
    const currentSlide = Array.from(sliders).findIndex(item => item.classList.contains('slider__item_active'));
    const nextSlide = (currentSlide + 1) % sliders.length;
    closeOther(currentSlide);
    sliders[nextSlide].classList.add('slider__item_active');    
    updateSlider();
};

// Функция для деактивации всех других открытых слайдов
const closeOther = (activeSlider) => {
    const activeSliders = document.querySelectorAll('.slider__item_active');

    Array.from(activeSliders).forEach(sItems => {
        if (sItems !== activeSlider) {
            sItems.classList.remove('slider__item_active');
        }
    });
};

// Обработчики событий
arrowPrev.onclick = goToPrevSlide;
arrowNext.onclick = goToNextSlide;

dots.forEach((dot, index) => {
    dot.onclick = () => {
        updateSlider();
        closeOther(index);
        sliders[index].classList.add('slider__item_active');
        updateSlider();
    };
});

// Обновление слайдера
updateSlider(); 