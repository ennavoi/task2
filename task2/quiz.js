const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correct: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Venus", "Jupiter"],
    correct: "Mars",
  },
  {
    question: "How many continents are there on Earth?",
    options: ["4", "5", "6", "7"],
    correct: "7",
  },
];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const checkButton = document.getElementById("check-button");
const nextButton = document.getElementById("next-button");
const scoreElement = document.getElementById("score");
const scoreValueElement = document.getElementById("score-value");

let currentQuestionIndex = 0;
let selectedOption = null;
let score = 0;

function showQuestion(question) {
  questionElement.textContent = question.question;
  optionsElement.innerHTML = "";
  quizForm.reset();

  question.options.forEach((option, index) => {
    const optionElement = document.createElement("div");
    optionElement.className = "option";
    const input = document.createElement("input");
    input.type = "radio";
    input.name = "answer";
    input.id = `option${index}`;
    input.value = option;
    const label = document.createElement("label");
    label.textContent = option;
    label.setAttribute("for", `option${index}`);
    optionElement.appendChild(input);
    optionElement.appendChild(label);
    optionsElement.appendChild(optionElement);
  });
}

function checkAnswer() {
  const selectedRadio = document.querySelector('input[name="answer"]:checked');
  if (selectedRadio) {
    selectedOption = selectedRadio.value;
  } else {
    selectedOption = null;
  }

  if (selectedOption === null) {
    alert("Please select an answer.");
  } else {
    if (selectedOption === quizData[currentQuestionIndex].correct) {
      alert("Correct!");
      score++;
    } else {
      alert("Wrong!");
    }

    checkButton.style.display = "none";
    nextButton.style.display = "block";
  }
}

checkButton.addEventListener("click", checkAnswer);

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    showQuestion(quizData[currentQuestionIndex]);
    checkButton.style.display = "block";
    nextButton.style.display = "none";
  } else {
    scoreValueElement.textContent = score;
    scoreElement.style.display = "block";
    alert("Quiz Completed!");
  }
});

const quizForm = document.getElementById("quiz-form");
showQuestion(quizData[currentQuestionIndex]);
