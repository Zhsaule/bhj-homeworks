// Функция для получения элемента лунки по индексу getHole( index )
function getHole( index ) {
    return document.getElementById(`hole${index}`);
  }
  
  let dead = 0;
  let lost = 0;
//   let dead = document.getElementById('dead').textContent;
//   let lost = document.getElementById('dead').textContent;
    
  // Обработчик события клика на лунку
  function handleClick(event) {
    const hole = event.target;
    
    // Проверяем наличие класса hole_has-mole
    if (hole.className.includes('hole_has-mole')) {
      // Увеличиваем счетчик побед и обновляем текстовое содержимое
      dead++;
      document.getElementById('dead').textContent = dead;
      
      // Проверяем условие победы
      if (dead === 10) {
        alert('Вы победили!');
        resetGame();
      }
    } else {
      // Увеличиваем счетчик поражений и обновляем текстовое содержимое
      lost++;
      document.getElementById('lost').textContent = lost;
      // Проверяем условие поражения
      if (lost === 5) {
        alert('Игра окончена. Вы проиграли!');
        resetGame();
      }
    }
  }
  
  // Функция для сброса игры
  function resetGame() {
    dead = 0;
    lost = 0;
    document.getElementById('dead').textContent = dead;
    document.getElementById('lost').textContent = lost;
  }
  
  // Цикл для задания обработчика событий для каждой лунки.
  for (let i = 1; i <= 9; i++) {
    getHole(i).onclick = handleClick;
  }