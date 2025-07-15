const questions = [
  {
    question: "What is the standard form of the 456,000?",
    options: ["4.56 * 10^4", "4.56 * 10^5", "45.6 * 10^4", "456 * 10^3"],
    answer: 1,
  },
  {
    question: "What is the standard form of the number 0.00078?",
    options: ["7.8 * 10^ -3", "7.8 * 10^ -4", "78 * 10^ -4", "780 * 10^ -6"],
    answer: 1,
  },
  {
    question: "What is the decimal equivalent of the standard form 3.4 *10?",
    options: ["3,400,000", " 340,000", "34,000", "3,400"],
    answer: 0,
  },
];

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
  const questionContainer = document.getElementById("question-container");
  questionContainer.innerHTML = "";
  const question = questions[currentQuestion];
  const questionHtml = `
    <div class = "question">
    <h2>   ${question.question}       </h2>
    <ul class= "list-unstyled">
    ${question.options
      .map(
        (option, index) => `
        <li>
        <div class="form-check">
        <input class= "form-check-input" type="radio" name="answer" value = "${index}" id = "option-${index}">
         <label class= "form-check-label"  for = "option-${index}"> ${option}<label>
         </div>
         </li>
        `
      )
      .join("")}
        </ul>
        </div>`;
  questionContainer.innerHTML = questionHtml;
}

function checkAnswer() {
  const selectedAnswer = document.querySelector(
    'input[name="answer"]:checked'
  ).value;
  const correctAnswer = questions[currentQuestion].answer;
  if (parseInt(selectedAnswer) === correctAnswer) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion < questions.length) {
    displayQuestion();
  } else {
    displayResult();
  }
}

function displayResult() {
  const resultContainer = document.getElementById("result-container");
  resultContainer.innerHTML = `You scored ${score} out of ${questions.length}`;
  document.getElementById("submit-btn").style.display = "none";
}

displayQuestion();

document.getElementById("submit-btn").addEventListener("click", checkAnswer);
