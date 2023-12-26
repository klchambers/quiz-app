let questions = [
  {
    questionNum: 1,
    questionText: "What is the answer?",
    answer: "This",
    answerChoices: ["answer 1", "answer 2", "This", "answer 4"],
  },
];

// Setting gameDisplay variable to the 'question-area' div in index.html
let gameDisplay = document.getElementById("question-area");

// Accessing the questionText property from the first question object
let questionText = questions[0].questionText;

// Assigning question HTML structure to the variable
gameDisplay.innerHTML = `
  <div id="question-area">
    <p id="question-content">${questionText}</p>
    <button class="default-button">${questions[0].answerChoices[0]}</button>
    <button class="default-button">${questions[0].answerChoices[1]}</button>
    <button class="default-button">${questions[0].answerChoices[2]}</button>
    <button class="default-button">${questions[0].answerChoices[3]}</button>
  </div>
`;