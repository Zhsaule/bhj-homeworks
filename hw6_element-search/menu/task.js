// Получаем все пункты меню с классом .menu__link и регистрируем обработчик события для каждого
const menuLinks = document.querySelectorAll('.menu__link');

Array.from(menuLinks).forEach((link) => {
    link.onclick = () => {

        // Находим вложенное подменю
        const submenu = link.closest('.menu__item').querySelector('.menu_sub'); 
        if (submenu) {
            //Открываем вложенные подменю
            submenu.classList.toggle('menu_active');
           
            // Закрываем другие открытые вложенные меню
            closeOtherSubmenus(submenu);
            
            // Запрещаем переход по ссылке для вложенного подменю
            return false;

        }

    }
});

// Функция для закрытия всех других открытых подменю
function closeOtherSubmenus(openSubmenu) {
    const allSubmenus = document.querySelectorAll('.menu_active');
    Array.from(allSubmenus).forEach(submenu => {
        if (submenu !== openSubmenu) {
            submenu.classList.remove('menu_active');
        }
    });
  }
