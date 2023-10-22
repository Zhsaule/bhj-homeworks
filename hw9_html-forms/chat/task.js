//Открываем окно чата при нажатии на красный боковой бэйдж:
const chatWidget = document.querySelector('.chat-widget');
const chatBadge = document.querySelector('.chat-widget__side');

chatBadge.addEventListener('click', () => {
    chatWidget.classList.add('chat-widget_active');
    addRobotMessage("Добро пожаловать в чат!");
});

//Отправка сообщения при нажатии клавиши Enter:
const inputField = document.querySelector('.chat-widget__input');
const messages = document.querySelector('.chat-widget__messages');

inputField.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && inputField.value.trim() !== '') {
        const currentTime = new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
        const userMessage = inputField.value.trim();

        messages.innerHTML += `
            <div class="message message_client">
                <div class="message__time">${currentTime}</div>
                <div class="message__text">${userMessage}</div>
            </div>
        `;

        inputField.value = '';//Выходим из условия

        // Реализуйем ответ робота (случайное сообщение из списка)
        const robotMessages = [
            'Спасибо за ваше сообщение!',
            'Как могу вам помочь?',
            'Интересно, расскажите подробнее.',
            'Пожалуйста, продолжайте.',        ];
        const randomRobotMessage = robotMessages[Math.floor(Math.random() * robotMessages.length)];
        setTimeout(() => {
            addRobotMessage(randomRobotMessage);
        }, 1000);

        // Автоматическая прокрутка окна чата
        scrollToBottom();
    }
});

function addRobotMessage(message) {
    const currentTime = new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
    messages.innerHTML += `
        <div class="message">
            <div class="message__time">${currentTime}</div>
            <div class="message__text">${message}</div>
        </div>
    `;

    // Автоматическая прокрутка окна чата
    scrollToBottom();

    // Автоматический фокус на последнем сообщении
    const lastMessage = messages.lastElementChild;
    lastMessage.scrollIntoView({ behavior: 'smooth' });
    lastMessage.focus();

}

function scrollToBottom() {
    messages.scrollTop = messages.scrollHeight;
}

//Добавьте таймер для задания вопроса робота через 30 секунд
let isChatActive = false;
let chatTimeout;

inputField.addEventListener('keydown', () => {
    isChatActive = true;
    clearTimeout(chatTimeout);
    chatTimeout = setTimeout(() => {
        if (isChatActive) {
            addRobotMessage("У вас есть вопросы?");
        }
    }, 30000);
});
