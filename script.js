let questions = [];
let current = 0;
let score = 0;

const endpoint = 'https://script.google.com/macros/s/AKfycbz0AMPokM8UpNsuCm152dQAAygmOSGf0tsla020kJZh9rCSlTPW4M4rXVwGND9YIj-l/exec';

fetch(endpoint)
  .then(res => res.json())
  .then(data => {
    questions = data;
    showQuestion();
  });

function showQuestion() {
  if (current >= questions.length) {
    document.getElementById("quiz-box").innerHTML = `<h2>Quiz Finished!</h2><p>Your score: ${score}/${questions.length}</p>`;
    return;
  }
  const q = questions[current];
  document.getElementById("message").innerText = q.Message;
  document.getElementById("feedback").innerText = '';
}

function answer(choice) {
  const correct = questions[current].CorrectAnswer;
  const explanation = questions[current].Explanation;
  if (choice === correct) {
    score++;
    document.getElementById("feedback").innerText = "✅ Correct! " + explanation;
  } else {
    document.getElementById("feedback").innerText = "❌ Wrong! " + explanation;
  }
  current++;
  setTimeout(showQuestion, 2000);
}
