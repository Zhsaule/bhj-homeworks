const progress = document.getElementById('progress');
const uploadForm = document.getElementById('form');
const fileInput = document.getElementById('file');

uploadForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(uploadForm);

  // Создаем объект XMLHttpRequest
  const xhr = new XMLHttpRequest();

  // Настройка обработчика события изменения загрузки
  // xhr.upload.addEventListener('progress', (e) => {
  xhr.upload.onprogress = (e) => {
    if (e.lengthComputable) {
      // Вычисляем прогресс и обновляем значение тега <progress>
      const percentComplete = (e.loaded / e.total) || 0;
      progress.value = percentComplete;
    }
  };

  // Обработка успешной загрузки
  // xhr.addEventListener('load', () => {
  xhr.onloadend = () => {
    if (xhr.status === 201) {
      alert('Файл успешно загружен. ' + xhr.status);
    } else {
      alert('Произошла ошибка при загрузке файла. ' + xhr.status);
    }
  };

  // Отправляем запрос на сервер
  xhr.open('POST', uploadForm.action, true);
  xhr.send(formData);
});
