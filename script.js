const questions = [
  { message: "Your account has been locked. Click here to unlock it immediately.", correctAnswer: "Phishing", explanation: "It creates urgency and asks you to click a suspicious link." },
  { message: "Your class schedule has been updated. View the new times here.", correctAnswer: "Legit", explanation: "This is a normal message from your school." },
  { message: "You won a free iPhone! Just send us your address and card info.", correctAnswer: "Phishing", explanation: "Real giveaways don’t ask for personal or financial information upfront." },
  { message: "Reminder: Your school portal password expires in 7 days.", correctAnswer: "Legit", explanation: "Typical system notice, not asking you to click unknown links." },
  { message: "Suspicious login detected from Russia. Click to verify your identity.", correctAnswer: "Phishing", explanation: "Common phishing tactic that pretends to be a security alert." },
  { message: "New assignment uploaded to your course page.", correctAnswer: "Legit", explanation: "Routine academic notification from a trusted system." },
  { message: "Congratulations! You've been selected for a $500 gift card. Click to claim.", correctAnswer: "Phishing", explanation: "Too good to be true offers often signal phishing." },
  { message: "Upcoming maintenance: Your school website will be down from 2 AM - 4 AM.", correctAnswer: "Legit", explanation: "A normal planned maintenance notice." },
  { message: "Unusual activity detected. Enter your password here to confirm your identity.", correctAnswer: "Phishing", explanation: "Phishers often ask for credentials through fake warnings." },
  { message: "Library books due soon. Click here to review your checked out items.", correctAnswer: "Legit", explanation: "A routine notification from your school's library system." }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  if (currentQuestion < questions.length) {
    document.getElementById("message").innerText = questions[currentQuestion].message;
    document.getElementById("feedback").innerText = "";
    document.getElementById("score").innerText = `${score} / ${currentQuestion}`;
    document.getElementById("progress").innerText = `Question ${currentQuestion + 1} / ${questions.length}`;
  } else {
    document.getElementById("message").innerText = "Quiz complete! 🎉";
    document.getElementById("feedback").innerText = `Final score: ${score} / ${questions.length}`;
    document.getElementById("progress").innerText = "";
    document.querySelector(".button-group").style.display = "none";
    document.getElementById("restart-btn").style.display = "inline-block";
  }
}

function answer(choice) {
  if (currentQuestion >= questions.length) return;

  const question = questions[currentQuestion];
  if (choice === question.correctAnswer) {
    score++;
    document.getElementById("feedback").innerText = `✅ Correct! ${question.explanation}`;
  } else {
    document.getElementById("feedback").innerText = `❌ Incorrect. ${question.explanation}`;
  }
  currentQuestion++;
  setTimeout(loadQuestion, 1500);
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  document.querySelector(".button-group").style.display = "flex";
  document.getElementById("restart-btn").style.display = "none";
  loadQuestion();
}

window.onload = loadQuestion;
