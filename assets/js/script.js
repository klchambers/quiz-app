document.addEventListener("DOMContentLoaded", function () {
  // Question content displayed in the "questions" array
  let questions = [
    {
      questionNum: 1,
      questionText: "What is the answer?",
      answer: "This",
      answerChoices: ["answer 1", "answer 2", "This", "answer 4"],
    },
  ];

  // Setting gameDisplay variable to the 'question-area' div in index.html
  let gameSection = document.getElementById("question-area");

  // Accessing the questionText property from the first question object
  let questionText = questions[0].questionText;
  // Assigning default value of 0 to userScore variable
  let userScore = 0;
  // Assigning question HTML structure to the variable
  gameSection.innerHTML = `
      <div class="quit-buttons">
        <button class="default-button">Pass</button>
        <button class="default-button">Quit</button>
      </div>
      <div id="question-area-content">
        <p>Current score: ${userScore}</p>
        <p id="question-content">${questionText}</p>
        <button class="default-button answer-button">${questions[0].answerChoices[0]}</button>
        <button class="default-button answer-button">${questions[0].answerChoices[1]}</button>
        <button class="default-button answer-button">${questions[0].answerChoices[2]}</button>
        <button class="default-button answer-button">${questions[0].answerChoices[3]}</button>
      </div>
    `;

  // Assign the intro-section element to variable
  let introSection = document.getElementById("intro-section");

  // Get reference to the start button
  let startButton = document.getElementById("start-button");

  // Add a click event listener to the start button
  startButton.addEventListener("click", function () {
    // Hide the intro-section
    introSection.style.display = "none";

    // Show the game-section
    gameSection.style.display = "block";
  });
});
