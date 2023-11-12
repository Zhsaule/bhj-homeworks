const loader = document.getElementById("loader");
const itemsContainer = document.getElementById("items");
const xhr = new XMLHttpRequest();

xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/slow-get-courses1", true);

// Устанавливаем обработчик события загрузки
xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    // Скрываем анимацию загрузки
    loader.classList.remove("loader_active");

    const data = JSON.parse(xhr.responseText);
    const valuteData = data.response.Valute;

    for (const key in valuteData) {
      const val = valuteData[key];

      items.innerHTML += 
          `<div class="item">
              <div class="item__code">${val.CharCode}</div>
              <div class="item__value">${val.Value}</div>
              <div class="item__currency">руб.</div>
          </div>`;
    }
  } else {
    // alert(`Ошибка загрузки данных - ${xhr.status} ${xhr.statusText}`)
    console.error("Ошибка загрузки данных:", xhr.statusText);

    // Скрываем анимацию загрузки
    loader.classList.remove("loader_active");

    items.innerHTML += 
    `<div class="item">
        <div class="item__code">Ошибка загрузки данных</div>
        <div class="item__value">${xhr.status}</div>
        <div class="item__currency">${xhr.statusText}</div>
    </div>`;
  }
};

xhr.send();