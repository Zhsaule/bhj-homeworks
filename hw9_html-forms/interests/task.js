// Получаем все элементы списка
const mainListItems = document.querySelectorAll('.interest__check');

// Добавляем обработчик события для каждого элемента списка
mainListItems.forEach((item) => {
  item.addEventListener('click', () => {
    // Получаем все вложенные списки для текущего элемента
    const nestedLists = Array.from(item.closest('.interest').querySelectorAll('.interest__check'));
    console.log(nestedLists);
    // Проходимся по каждому вложенному списку
    nestedLists.forEach((nestedList) => {
      console.log(nestedList);
      nestedList.checked = item.checked;
    });
  });
});