// Получаем все элементы списка
const nodeArray = (selector, parent=document) => [].slice.call(parent.querySelectorAll(selector));
const allThings = nodeArray('input');

//  global listener
allThings.forEach((el, index) => {
    el.addEventListener('click', e => {
        let check = e.target;

        // check/unchek по дочерним включая сам элемент
        const children = nodeArray('input', check.closest(['label']).parentNode);
        children.forEach(child => child.checked = check.checked);
        // проставление родительских элементов

        while(check){
            // поиск родительских элементов и их другие ветки
            const parent = (check.closest(['ul']).parentNode).querySelector('input');
            const siblings = nodeArray('input', parent.closest('li').querySelector(['ul']));

            // подсчет check/unchek по дочерним
            const checkStatus = siblings.map(check => check.checked);
            const every = checkStatus.every(Boolean);
            const some = checkStatus.some(Boolean);   

            // выставление состояния checkbox
            parent.checked = every;   
            parent.indeterminate = !every && every !== some;

            // переход вверх по дереву
            check = check != parent ? parent : 0;
        }
    });
});