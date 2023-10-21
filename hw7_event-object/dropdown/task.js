// Получаем все элементы с классом "dropdown"
const dropdowns = document.querySelectorAll('.dropdown');

// Добавляем обработчик события "click" для каждого элемента
dropdowns.forEach((dropdown) => {
    const valueElement = dropdown.querySelector('.dropdown__value');
    const listElement = dropdown.querySelector('.dropdown__list');

    // При клике на кнопку
    valueElement.addEventListener('click', () => {
        // Переключаем класс "dropdown__list_active" для открытия/закрытия списка
        listElement.classList.toggle('dropdown__list_active');
    });

    // При клике на пункт списка
    listElement.addEventListener('click', (event) => {
        // Предотвращаем переход по ссылке
        event.preventDefault();

        // Получаем выбранное значение
        const selectedValue = event.target.textContent;

        // Закрываем список
        listElement.classList.remove('dropdown__list_active');

        // Устанавливаем новое значение в элемент с классом "dropdown__value"
        valueElement.textContent = selectedValue;
    });
});
