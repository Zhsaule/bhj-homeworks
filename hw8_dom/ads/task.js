// Функция, которая будет выполнять смену текстовых блоков
function rotateText(rotator) {
    const cases = rotator.querySelectorAll('.rotator__case');
    let currentIndex = 0;
  
    function rotate() {
        cases[currentIndex].classList.remove('rotator__case_active');
        currentIndex = (currentIndex + 1) % cases.length;
        cases[currentIndex].classList.add('rotator__case_active');
        const speed = parseInt(cases[currentIndex].getAttribute('data-speed'));
        const color = parseInt(cases[currentIndex].getAttribute('data-color'));
        console.log(color);
        setTimeout(rotate, speed);
    }
    rotate();
  }
  
  // Находим все ротаторы на странице и запускаем для каждого
  document.querySelectorAll('.rotator').forEach(rotateText);
  