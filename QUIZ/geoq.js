const questions = [
  {
    question:
      "What is the area of a rectangle with a length of 5cm and a breadth of 2cm?",
    options: [" 14 cm", "10cm", "7cm", "3 cm"],
    answer: 1,
  },
  {
    question:
      "What is the perimeter of a rectangle with a length of 5cm and a breadth of 2cm?",
    options: [" 14 cm", "10cm", "7cm", "3 cm"],
    answer: 0,
  },
  {
    question: "What is the constant for pi?",
    options: ["4.2", "3.4", "3.14", "5.67"],
    answer: 2,
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
