// Получаем все элементы списка
const checkboxs = document.querySelectorAll('.interest__check');
//  global listener
checkboxs.forEach((checkbox, index) => {
    checkbox.addEventListener('click', e => {
        let check = e.target;

        // check/unchek по дочерним включая сам элемент
        const children = (check.closest('label').parentNode).querySelectorAll('.interest__check');
        children.forEach(child => child.checked = check.checked);

        // проставление родительских элементов
        while(check){
            // поиск родительских элементов и их другие ветки
            const parent = (check.closest('ul').parentNode).querySelector('input');
            const siblings = Array.from((parent.closest('li').querySelector('ul')).querySelectorAll('.interest__check'));

            // подсчет check/unchek по дочерним
            const checkStatus = siblings.map(check => check.checked);
            const every = checkStatus.every(Boolean);
            const some = checkStatus.some(Boolean);   

            // выставление состояния checkbox
            parent.checked = every;   
            parent.indeterminate = !every && every !== some;

            // переход вверх по дереву
            check = check != parent ? parent : null;
        }
    });
});