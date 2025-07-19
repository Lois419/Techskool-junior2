const questions = [
  {
    question: "______ represents the simple interest?",
    options: ["S", " M", "I", "In"],
    answer: 0,
  },
  {
    question:
      "Solve for the simple interest if Kola borrows #500 from his friend at a rate of 2% for 2 years",
    options: ["15", "20", "25", "30"],
    answer: 3,
  },
  {
    question: "What is the formula for finding Amount?",
    options: [
      "Original Principal + Interest",
      " (P*R*T)/100",
      "I + R + T",
      "100 - 1",
    ],
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
