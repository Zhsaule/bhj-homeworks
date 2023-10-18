// Получаем все пункты меню с классом .menu__link и регистрируем обработчик события для каждого
const menuLinks = Array.from(document.querySelectorAll('.menu__link'));
menuLinks.forEach((link) => {
    link.onclick = () => {
        // Находим ближайший родительский элемент .menu__item
        const menuItem = link.closest('.menu__item'); 
        if (menuItem) {
            // Находим вложенное подменю
            const submenu = menuItem.querySelector('.menu_sub'); 
            if (submenu) {
                // Закрываем другие открытые вложенные меню
                const otherSubmenus = Array.from(document.querySelectorAll('.menu_active'));
                otherSubmenus.forEach((otherSubmenu) => {
                    if (otherSubmenu !== submenu) {
                        otherSubmenu.classList.remove('menu_active');
                    }
                });
                //Переключаем класс menu_active у вложенного меню
                submenu.classList.toggle('menu_active');

            }
        }
        //Отключаем переход по ссылке
        return false;
    }
});
