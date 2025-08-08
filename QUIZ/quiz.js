const questions = [
  {
    question: "11+10=?",
    options: ["13", "110", "21", "22"],
    answer: 2,
  },
  {
    question: "Akilla has 5apples and her mom gave her 6 more how many does she have in total?",
    options: ["30", "5", "16", "11"],
    answer: 3,
  },
  {
    question: "What is the sum of 150 and 30?",
    options: ["113", "130", "180", "170"],
    answer: 2,
  }
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
