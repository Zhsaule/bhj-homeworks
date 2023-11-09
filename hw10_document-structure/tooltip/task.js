// Получаем все элементы с классом "has-tooltip"
const elements = document.querySelectorAll('.has-tooltip');

// Создаем функцию для удаления подсказки
function removeTooltip() {
    const activeTooltip = document.querySelector('.tooltip');
    if (activeTooltip) { activeTooltip.remove() }
};

// Создаем функцию для показа подсказки
function showTooltip(event) {
    // Prevent the default link behavior
    event.preventDefault();

    // Проверяем, есть ли открытая подсказка была на выбранном элементе и удаляем ее
    const sameTooltip = event.target.querySelector('.tooltip');
    if (sameTooltip) {
        sameTooltip.remove();
        return; // Останавливаем выполнение функции, чтобы предотвратить повторное открытие подсказки на выбранном элементе
    }

    // Проверяем, есть ли другие подсказки
    removeTooltip();
    
    // Создаем новый элемент подсказки
    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    tooltip.textContent = event.target.getAttribute('title');

    // Добавляем дополнительный атрибут data-position для настройки места появления подсказки
    const position = event.target.getAttribute('data-position');
    const rect = event.target.getBoundingClientRect();
    tooltip.style.left = rect.left + "px";
    tooltip.style.top = rect.bottom + "px";

    // Добавляем подсказку к элементу
    event.target.appendChild(tooltip);

    // Добавляем класс tooltip_active для показа подсказки
    tooltip.classList.add('tooltip_active');
}

// Добавляем обработчик клика для каждого элемента
elements.forEach(element => {
    element.addEventListener('click', showTooltip);
});

// Добавляем обработчик события прокрутки страницы
// Очистка подсказок при прокрутке
window.addEventListener('scroll', removeTooltip);