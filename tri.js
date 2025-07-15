const questions = [
  {
    question: "A right angled triangle has an angle of?",
    options: ["0", "30 ", "60", "90"],
    answer: 3,
  },
  {
    question: "tan @ = _______",
    options: [
      " opposite/hypotenuse ",
      " adjacent/hypotenuse ",
      " opposite/adjacent ",
      " hypotenuse/opposite ",
    ],
    answer: 3,
  },
  {
    question: "__________ is a mnemonic for easy memory?",
    options: [" SOH COAH TAH", " SOH CAH TOA", "SIH COH TOA", " SAH COH TOA"],
    answer: 1,
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
