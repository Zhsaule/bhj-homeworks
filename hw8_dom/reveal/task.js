// Получить все элементы с классом "reveal"
const revealElements = document.querySelectorAll('.reveal');

// Функция, которая проверяет, находится ли элемент в поле зрения
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) 
    // && rect.left >= 0 &&
    // rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Функция для обработки события прокрутки
function handleScroll() {
  revealElements.forEach((element) => {
    if (isElementInViewport(element)) {
      element.classList.add('reveal_active');
    } else {
      element.classList.remove('reveal_active');
    }
  });
}

// Добавить обработчик события прокрутки
window.addEventListener('scroll', handleScroll);

// Вызвать обработчик при загрузке страницы, чтобы показать элементы, которые видны изначально
window.addEventListener('load', handleScroll);
