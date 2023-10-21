// Получаем ссылки на элементы управления размером шрифта
const smallFontLink = document.querySelector('.font-size_small');
const normalFontLink = document.querySelector('.font-size_active');
const bigFontLink = document.querySelector('.font-size_big');

const blackText = document.querySelector('.text_color_black');
const grayText = document.querySelector('.text_color_gray');
const whitesmokeText = document.querySelector('.text_color_whitesmoke');

const blackBg = document.querySelector('.bg_color_black');
const grayBg = document.querySelector('.bg_color_gray');
const whiteBg = document.querySelector('.bg_color_white');


// Получаем ссылку на элемент книги
const bookElement = document.querySelector('.book');
console.log(bookElement);

// Добавляем обработчики событий для каждого элемента управления размером шрифта
smallFontLink.addEventListener('click', function(event) {
  event.preventDefault();
  // Удаляем класс активного элемента управления размером шрифта
  normalFontLink.classList.remove('font-size_active');
  bigFontLink.classList.remove('font-size_active');
  // Добавляем класс активного элемента управления размером шрифта
  smallFontLink.classList.add('font-size_active');
  // Добавляем класс маленького размера шрифта к элементу книги
  bookElement.classList.add('book_fs-small');
  // Удаляем класс большого размера шрифта из элемента книги
  bookElement.classList.remove('book_fs-big');
});

normalFontLink.addEventListener('click', function(event) {
  event.preventDefault();
  // Удаляем классы активного элемента управления размером шрифта
  smallFontLink.classList.remove('font-size_active');
  bigFontLink.classList.remove('font-size_active');
  // Добавляем класс активного элемента управления размером шрифта
  normalFontLink.classList.add('font-size_active');
  // Удаляем классы маленького и большого размеров шрифта из элемента книги
  bookElement.classList.remove('book_fs-small');
  bookElement.classList.remove('book_fs-big');
});

bigFontLink.addEventListener('click', function(event) {
  event.preventDefault();
  // Удаляем класс активного элемента управления размером шрифта
  normalFontLink.classList.remove('font-size_active');
  smallFontLink.classList.remove('font-size_active');
  // Добавляем класс активного элемента управления размером шрифта
  bigFontLink.classList.add('font-size_active');
  // Добавляем класс большого размера шрифта к элементу книги
  bookElement.classList.add('book_fs-big');
  // Удаляем класс маленького размера шрифта из элемента книги
  bookElement.classList.remove('book_fs-small');
});

// Добавляем обработчики событий для каждого элемента управления цветом шрифта
blackText.addEventListener('click', function(event) {
    event.preventDefault();
    // Удаляем класс активного элемента управления цветом шрифта
    grayText.classList.remove('color_active');
    whitesmokeText.classList.remove('color_active');
    // Добавляем класс активного элемента управления размером шрифта
    blackText.classList.add('color_active');
    // Добавляем класс цвета шрифта к элементу книги
    bookElement.classList.add('book_color-black');
    // Удаляем класс цвета шрифта к элементу книги
    bookElement.classList.remove('book_color-gray');
    bookElement.classList.remove('book_color-whitesmoke');
});

grayText.addEventListener('click', function(event) {
    event.preventDefault();
    // Удаляем класс активного элемента управления цветом шрифта
    whitesmokeText.classList.remove('color_active');
    blackText.classList.remove('color_active');
    // Добавляем класс активного элемента управления размером шрифта
    grayText.classList.add('color_active');
    // Добавляем класс цвета шрифта к элементу книги
    bookElement.classList.add('book_color-gray');
    // Удаляем класс цвета шрифта к элементу книги
    bookElement.classList.remove('book_color-black');
    bookElement.classList.remove('book_color-whitesmoke');
});

whitesmokeText.addEventListener('click', function(event) {
    event.preventDefault();
    // Удаляем класс активного элемента управления цветом шрифта
    blackText.classList.remove('color_active');
    grayText.classList.remove('color_active');
    // Добавляем класс активного элемента управления размером шрифта
    whitesmokeText.classList.add('color_active');
    // Добавляем класс цвета шрифта к элементу книги
    bookElement.classList.add('book_color-whitesmoke');    
    // Удаляем класс цвета шрифта к элементу книги
    bookElement.classList.remove('book_color-gray');
    bookElement.classList.remove('book_color-black');

});

// Добавляем обработчики событий для каждого элемента управления цветом фона
blackBg.addEventListener('click', function(event) {
    event.preventDefault();
    // Удаляем класс активного элемента управления цветом фона
    grayBg.classList.remove('color_active');
    whiteBg.classList.remove('color_active');
    // Добавляем класс активного элемента управления размером фона
    blackBg.classList.add('color_active');
    // Добавляем класс цвета фона к элементу книги
    bookElement.classList.add('book_bg-black');
    // Удаляем класс цвета фона к элементу книги
    bookElement.classList.remove('book_bg-gray');
    bookElement.classList.remove('book_bg-white');
});

grayBg.addEventListener('click', function(event) {
    event.preventDefault();
    // Удаляем класс активного элемента управления цветом фона
    whiteBg.classList.remove('color_active');
    blackBg.classList.remove('color_active');
    // Добавляем класс активного элемента управления размером фона
    grayBg.classList.add('color_active');
    // Добавляем класс цвета фона к элементу книги
    bookElement.classList.add('book_bg-gray');
    // Удаляем класс цвета фона к элементу книги
    bookElement.classList.remove('book_bg-black');
    bookElement.classList.remove('book_bg-white');
});

whiteBg.addEventListener('click', function(event) {
    event.preventDefault();
    // Удаляем класс активного элемента управления цветом фона
    blackBg.classList.remove('color_active');
    grayBg.classList.remove('color_active');
    // Добавляем класс активного элемента управления размером фона
    whiteBg.classList.add('color_active');
    // Добавляем класс цвета фона к элементу книги
    bookElement.classList.add('book_bg-white');    
    // Удаляем класс цвета фона к элементу книги
    bookElement.classList.remove('book_bg-gray');
    bookElement.classList.remove('book_bg-black');
});