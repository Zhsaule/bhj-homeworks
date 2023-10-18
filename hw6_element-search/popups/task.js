const modalMain = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');
const modalCloseElements = document.querySelectorAll('.modal__close');
const showSuccessButton = document.querySelector('.show-success');

// Показать окно modal_main при загрузке страницы
modalMain.classList.add('modal_active');

// Функция для закрытия модального окна
const closeModal = (modal) => {
    modal.classList.remove('modal_active');
};

// Обработчик для закрытия модального окна по нажатию на крестик
Array.from(modalCloseElements).forEach((element) => {
    element.onclick = () => {
        closeModal(element.closest('.modal'));
    };
});

// Обработчик для показа окна modal_success при нажатии на кнопку
showSuccessButton.onclick = (event) => {
    closeModal(modalMain);  // Закрыть текущее активное окно
    modalSuccess.classList.add('modal_active');  // Показать окно modal_success
};
