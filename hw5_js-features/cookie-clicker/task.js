const p = document.getElementById('clicker__counter')
const s = document.getElementById('clicker__speed')
const img = document.getElementById("cookie");
let lastClickTime = new Date().getTime();

img.onclick = () => {
    clickerCounter = Number(p.textContent) + 1;
    p.textContent = clickerCounter;

    const currentTime = new Date().getTime();
    clickSpeed = 1 / ((currentTime - lastClickTime) / 1000); // Скорость клика = 1 / разница во времени
    s.textContent = clickSpeed.toFixed(2); 
    lastClickTime = currentTime;

    if (clickerCounter %2 === 0) {
        img.width -= 50;
        img.height -= 50;
    } else {
        img.width += 50;
        img.height += 50;
    }
}
