// Функция для отправки GET-запроса
const address = "https://students.netoservices.ru/nestjs-backend/poll";

function getPollData() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", address);
  xhr.setRequestHeader("Content-type", "application/json");

  xhr.onload = function () {
    console.log(xhr.status);
    if (xhr.status === 200) {
      const pollData = JSON.parse(xhr.responseText);
      displayPoll(pollData);
    }
  };

  xhr.send();
}

// Функция для отображения опроса
function displayPoll(pollData) {
  const pollTitle = document.getElementById("poll__title");
  const pollAnswers = document.getElementById("poll__answers");
  pollTitle.innerText = pollData.data.title;

  pollAnswers.innerHTML = ""; // Очищаем список ответов

  pollData.data.answers.forEach((answer, index) => {
    const answerButton = document.createElement("button");
    answerButton.className = "poll__answer";
    answerButton.innerText = answer;
    answerButton.addEventListener("click", function () {
      submitVote(pollData.id, index);
    });
    pollAnswers.appendChild(answerButton);
  });
}

// Функция для отправки POST-запроса при голосовании
function submitVote(pollId, answerIndex) {
  const xhr = new XMLHttpRequest();

  xhr.open("POST", address);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  const data = `vote=${pollId}&answer=${answerIndex}`;

  xhr.send(data);
  xhr.onload = function () {
    console.log(xhr.status);
    if (xhr.status === 201) {
      const voteResult = JSON.parse(xhr.responseText);
      showThankYouDialog(voteResult);
    }
  };
}

// Функция для отображения диалога "Спасибо за голос"
function showThankYouDialog(voteResult) {
  const pollAnswers = document.getElementById("poll__answers");

  alert("Спасибо, ваш голос засчитан!");
  // Дополнительная логика для отображения результатов голосования
  pollAnswers.innerHTML = ""; // Очищаем список ответов

  for (const key in voteResult.stat) {
    const value = voteResult.stat[key];
    const vote = document.createElement("div");
    vote.className = "poll__answer";
    vote.innerText = `${value.answer}: ${value.votes} %`;
    pollAnswers.appendChild(vote);
  };
}

// Загрузка опроса при загрузке страницы
getPollData();