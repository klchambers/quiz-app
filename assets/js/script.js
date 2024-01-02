// Setting focus to username field on page load
document.getElementById("username").focus();

// Initialising i as 0
let i = 0;

// Waiting for DOM content to load before running this JavaScript
document.addEventListener("DOMContentLoaded", function () {
  // Question content displayed in the "questions" array
  let questions = [
    {
      questionNum: 1,
      questionText: "In which European country would you find the Rijksmuseum?",
      answer: "The Netherlands",
      answerChoices: ["France", "Denmark", "The Netherlands", "Belgium"],
    },
    {
      questionNum: 2,
      questionText: "What country has the highest life expectancy?",
      answer: "Hong Kong",
      answerChoices: ["Hong Kong", "Sweden", "Singapore", "Ireland"],
    },
    {
      questionNum: 3,
      questionText:
        "Which of the following artists has the most streams on Spotify?",
      answer: "Drake",
      answerChoices: ["Madonna", "Drake", "Taylor Swift", "Kanye West"],
    },
    {
      questionNum: 4,
      questionText: "How many minutes are in a full week?",
      answer: "10,080",
      answerChoices: ["10,080", "24,000", "11,857", "7,000"],
    },
    {
      questionNum: 5,
      questionText:
        "Brian May, guitarist of the band Queen, is also a specialist in which scientific field?",
      answer: "Astrophysics",
      answerChoices: [
        "Nuclear Physics",
        "Marine Biology",
        "Astrology",
        "Astrophysics",
      ],
    },
    {
      questionNum: 6,
      questionText: "Aureolin is a shade of what color?",
      answer: "Yellow",
      answerChoices: ["Blue", "Green", "Black", "Yellow"],
    },
    {
      questionNum: 7,
      questionText: "What country drinks the most coffee per capita?",
      answer: "Finland",
      answerChoices: ["United States", "Finland", "Italy", "Brazil"],
    },
    {
      questionNum: 8,
      questionText: "How many bones are in the human ear?",
      answer: "3",
      answerChoices: ["12", "1", "3", "7"],
    },
    {
      questionNum: 9,
      questionText: "Which planet has the most moons?",
      answer: "Saturn",
      answerChoices: ["Jupiter", "Saturn", "Uranus", "Earth"],
    },
    {
      questionNum: 10,
      questionText: "How many elements are in the periodic table?",
      answer: "118",
      answerChoices: ["52", "420", "109", "118"],
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
        <button class="default-button" id="pass-button">Pass</button>
        <button class="default-button" id="quit-button">Quit</button>
      </div>
      <div id="question-area-content">
        <div id="question-text">
          <p>Current score: ${userScore}</p>
          <br>
          <p id="question-content">${questionText}</p>
        </div>
        <div id="question-buttons">
          <button class="default-button answer-button" id="answer-one">${questions[0].answerChoices[0]}</button>
          <button class="default-button answer-button" id="answer-two">${questions[0].answerChoices[1]}</button>
          <button class="default-button answer-button" id="answer-three">${questions[0].answerChoices[2]}</button>
          <button class="default-button answer-button" id="answer-four">${questions[0].answerChoices[3]}</button>
        </div>
      </div>
    `;

  function nextQuestion() {
    console.log("Next question called");
    // Check if there are more questions
    if (i < questions.length - 1) {
      // If so, show the next question
      i++;
      // Update questionText
      questionText = questions[i].questionText;

      // Update the question content
      document.getElementById("question-content").textContent = questionText;

      // Update answer choices
      for (let j = 0; j < 4; j++) {
        document.getElementsByClassName("answer-button")[j].textContent =
          questions[i].answerChoices[j];
      }
    } else {
      // If last question has been shown, hide the game display and show results
      gameSection.style.display = "none";
      resultsSection.style.display = "block";
    }
  }

  // Assign the intro-section element to variable
  let introSection = document.getElementById("intro-section");

  // Get reference to the start button
  let startButton = document.getElementById("start-button");

  // Add a click event listener to the start button
  startButton.addEventListener("click", function () {
    // Assigning HTML "username" field to a variable
    let usernameInput = document.getElementById("username");
    let username = usernameInput.value;
    // Validating username input before quiz can be started
    if (username == "") {
      console.log("Please enter a username");
      alert("Please enter a username");
    } else {
      console.log("Username valid!");
      // Hide the intro-section
      introSection.style.display = "none";

      // Show the game-section
      gameSection.style.display = "block";
    }
  });

  // Assign the results section to a variable
  let resultsSection = document.getElementById("results-section");
  // Display the score to the user
  resultsSection.innerHTML = `
  <div class="quiz-display"><p>Well done! You scored ${userScore} points.</p>
  <button id="home-button" class="default-button answer-button" onClick="window.location.reload();">Play again</button></div>`;

  // Assign quit-button HTML element to quitButton variable
  const quitButton = document.getElementById("quit-button");
  // Add click event listener to quit button
  quitButton.addEventListener("click", function () {
    console.log("Game quit");
    // Hide the games display
    gameSection.style.display = "none";
    // Show the results
    resultsSection.style.display = "block";
  });

  //Assigning pass-button HTML element to the passButton variable
  const passButton = document.getElementById("pass-button");
  // Adding click event listener to the pass button
  passButton.addEventListener("click", function () {
    console.log("Pass button clicked");
    nextQuestion();
  });

  // answerButton getelementsbyclassname does not work - use four different event listeners and target them by id?
  // const answerButton = document.getElementsByClassName("answer-button");

  const answerOne = document.getElementById("answer-one");
  const answerTwo = document.getElementById("answer-two");
  const answerThree = document.getElementById("answer-three");
  const answerFour = document.getElementById("answer-four");

  answerOne.addEventListener("click", function () {
    console.log("Answer one clicked!");
    nextQuestion();
  });

  answerTwo.addEventListener("click", function () {
    console.log("Answer two clicked!");
    nextQuestion();
  });

  answerThree.addEventListener("click", function () {
    console.log("Answer three clicked!");
    nextQuestion();
  });

  answerFour.addEventListener("click", function () {
    console.log("Answer four selected!");
    nextQuestion();
  });
});
