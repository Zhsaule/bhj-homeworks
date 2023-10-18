// Получаем элемент таймера
const p = document.getElementById("timer");

// Получаем стартовое значение таймера в секундах
let timerSeconds = parseInt(p.textContent);

// Функция для форматирования времени в формат hh:mm:ss
function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
}

// Запускаем таймер каждую секунду
setInterval(() => {
    timerSeconds--;

    // Обновляем текст элемента таймера
    p.textContent = formatTime(timerSeconds);

    if (timerSeconds === 0) {
        alert("Вы победили в конкурсе!");

        // Запускаем загрузку произвольного файла
        window.location.href = "Hpz6.gif";
    }
}, 1000);

