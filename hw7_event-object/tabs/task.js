// Находим все элементы вкладок и их содержимое
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab__content');

// Добавляем обработчик события клика на каждую вкладку
tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        // Убираем активный класс у всех вкладок и их содержимого
        tabs.forEach((t) => t.classList.remove('tab_active'));
        tabContents.forEach((content) => content.classList.remove('tab__content_active'));

        // Добавляем активный класс только к текущей вкладке и соответствующему содержимому
        tab.classList.add('tab_active');
        tabContents[index].classList.add('tab__content_active');
    });
});
