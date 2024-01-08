![Quizzit logo](documentation/screencaps/quizzit-logo.png)

**Table of contents:**

- [Introduction](#introduction)
- [Deployed Site](#deployed-site)
- [User Experience](#user-experience)
  - [User Goals](#user-goals)
  - [User Stories](#user-stories)
  - [Site Owner's Goals](#site-owners-goals)
- [Wireframes](#wireframes)
- [Quizzit Features](#quizzit-features)
  - [Design](#design)
    - [Colour](#colour)
    - [Typography](#typography)
  - [Data Model](#data-model)
- [Testing and Validation](#testing-and-validation)
  - [Testing Methodology](#testing-methodology)
  - [JSHint Code Quality Tool](#jshint-code-quality-tool)
  - [Jigsaw CSS Validator](#jigsaw-css-validator)
  - [W3C HTML Validator](#w3c-html-validator)
  - [Lighthouse Accessibility & Performance](#lighthouse-accessibility-&-performance)
- [Development and Deployment](#development-and-deployment)
  - [Development](#development)
  - [Contributing to Quizzit](#contributing-to-Quizzit)
  - [Deployment](#deployment)
- [Technologies Used](#technologies-used)
- [Acknowledgements](#acknowledgements)

<a id=introduction></a>

## Introduction

Quizzit is a responsive front-end web application through which users can test their knowledge with a series of general knowledge/trivia questions. It is designed with a mobile-first approach, and intuitive UX to allow the user to have fun using its simple, clutter-free interface.

![Quizzit responsiveness mockup](documentation/screencaps/responsiveness-mockup.png)

<a id=deployed-site></a>

## Deployed Site

Quizzit can be accessed [here](https://klchambers.github.io/quiz-app/).

<a id=user-experience></a>

## User Experience

<a id=user-goals></a>

### User Goals

- The site should be simple and intuitive
- The site needs to be engaging and responsive when I interact with it
- The quiz content should be interesting and appeal to a range of audiences

<a id=user-stories></a>

### User Stories

- I would like to see visual feedback as I progress through the quiz. For example, my score should be displayed on screen and answers should turn green or red when I choose a correct or incorrect answer
- I would like the content of the quiz to be engaging, with a varied mix of general knowledge questions
- I would like the site to give me the option to try again when I complete the quiz

<a id=site-owners-goals></a>

### Site Owner's Goals

- I want to create a site that is simple, intuitive, and engaging for a range of audiences
- I want the site's code to be maintainable, follow best practices, and be well-commented so that I can seamlessly implement new features in the future, while incorporating defensive design principles to enhance resilience against potential issues or user errors
- I aim to prioritize user accessibility and responsiveness, ensuring that the site delivers a consistent and enjoyable experience across various devices, using JavaScript to create an interesting, intuitive experience for the user

<a id=wireframes></a>

## Wireframes

During the inception of this project, Balsamiq Wireframes was used to create mockups of the responsiveness I wanted to create across device types.

![Quizzit mobile mockup](documentation/wireframes/mobile-wireframe.png)

![Quizzit browser mockup](documentation/wireframes/desktopbrowser-wireframe.png)

<a id=quizzit-features></a>

## Quizzit Features

Quizzit consists of a single HTML document, with content displayed or hidden depending on the stage of the quiz that the user has reached.

Upon loading the site, the user is shown an introduction section, where they are asked to input their username and select the 'Start quizzing' button. 

![Introduction section screenshot](documentation/screencaps/intro-section-mobile.png)

JavaScript is used to ensure that the user has input text into the username field. If this field is left blank, they will be unable to start the game, and so will be prompted to enter a username.

![Introduction section username validation](documentation/screencaps/username-validation-mobile.png)

Once this has been completed, the introduction section is hidden using JavaScript, and the main quiz section is displayed. Here, the user is shown their current score, a question, four possible answers, and the options to 'quit' the game or 'pass' the current question. The latter two options are set apart from the answer choices at the top of the screen in order to prevent the user from accidentally quitting the game or skipping a question.

Quitting the game will take the user straight to the results section, with their score up to that point displayed. Choosing 'pass' will skip to the next question without adding a point to their score

![Quiz section screenshot](documentation/screencaps/quiz-section-mobile.png)

Media queries are used in the CSS to create responsiveness in the display of the site depending on the device used by the user to load it.

![Quiz section screenshot laptop display](documentation/screencaps/quiz-section-desktop.png)

When the user selects an answer their choice is displayed in green if their answer is correct, or red if it is incorrect. When the correct answer is chosen, the user score (displayed at the top of the screen) is incremented by one.

![Correct answer screenshot](documentation/screencaps/correct-answer-mobile.png)

![Incorrect answer screenshot](documentation/screencaps/incorrect-answer-mobile.png)

After the 10 questions are completed, the user is shown the 'results section'. Here, their final score is shown, and they are given the choice to play again.

![Results section screenshot](documentation/screencaps/results-section-mobile.png)

<a id=design></a>

### Design

<a id=colour></a>

#### Colour

The user interface of Quizzit is designed to be visually appealing to the user, while remaining simplistic to avoid distracting the user away from the web app itself. The background of the page is a shade of off-white `#faf9f6` ![Placeholder image for colour block](https://placehold.co/15/faf9f6/png) with text in the shade of `#00205d` ![Placeholder image for colour block](https://placehold.co/15/00205d/png) to provide contrast and maintain legibility.

The page header uses the colour `#37456e`![Placeholder image for colour block](https://placehold.co/15/37456e/png). The default colour of buttons is `#00205d`![Placeholder image for colour block](https://placehold.co/15/00205d/png), changing to `#5e77c2`![Placeholder image for colour block](https://placehold.co/15/5e77c2/png) on hover to indicate to the user which button/answer they are about to select.

The page's logo uses a light orange(`#ff9a89`)![Placeholder image for colour block](https://placehold.co/15/ff9a89/png) evoke feelings of playfulness and fun to the user, while maintaining a contrast with the page's headers.

<a id=typography></a>

#### Typography

[Google Fonts](https://fonts.google.com/) was used to import custom fonts into the CSS.

For the logo in the header, [Quicksand](https://fonts.google.com/specimen/Quicksand/) by Andrew Paglinawan was used, and [Roboto](https://fonts.google.com/specimen/Roboto) by Christian Robertson was selected as the main typeface for all other text in the quiz. These typefaces were chosen for their simplicity and legibility across all device types and screen sizes.

<a id=data-model></a>

### Data Model

Questions are stored in script.js as objects in an array. They are rendered on the page dynamically using JavaScript template literals. This method was employed in order to keep the structure of Quizzit simple and maintainable.

As well simplicity and code maintainability, the key-value pairs stored in each question object are easily iterated through using a for loop.

Storing multiple possible answers was achieved by using an array as a value to a corresponding 'answerChoices' key. An example of the question data structure is outlined below:

``` js 
let questions = [
      {
      questionNum: 1,
      questionText: "In which European country would you find the Rijksmuseum?",
      answer: "The Netherlands",
      answerChoices: ["France", "Denmark", "The Netherlands", "Belgium"],
      },
      {
      questionNum: 2,
      ...
      },
    ];
```

In the above code snippet, the following data is stored in each key value pair:
1. `questionNum`: Numeric ID for the question
1. `questionText`: The question that will be shown to the user
1. `answer`: The correct answer that the user is trying to guess
1. `answerChoices`: The choices that are displayed to the user, only one of which should be equal to the data held by the `answer` key

By employing this data model, the answer data for quizzit is simple and easily modifiable, with the potential to add more questions to the quiz as desired.

<a id=testing-and-validation></a>

## Testing and Validation

<a id=testing-methodology></a>

### Testing Methodology

The following manual testing steps should be followed to ensure that Quizzit works as expected and to find any bugs that require attention:

#### **Initial Load & User Interface**

- **Objective:** Verify that the initial load focuses on the username field.

   - **Steps:**
     1. Open the web app in a supported browser.
     1. Observe if the username field has the focus on page load.

#### **Username input validation**

- **Objective:** Verify that the 'Start quizzing!' button does not work unless the user inputs their username.

   - **Steps:**
     1. Click the "Start" button without entering a username.
     1. Verify that an alert message appears.
     1. Enter a valid username and proceed.

#### **Game progression and score incrementing**

- **Objective:** Validate the progression of the game, ensuring that questions change, and the score is updated correctly.

   - **Steps:**
     1. Start the game by entering a valid username.
     1. Verify that each question is displayed correctly.
     1. Confirm that the score updates after each correct answer, and that incorrect answers and 'pass' button clicks go to the next question with no change to the score.

#### **Results section**

- **Objective:** Check that the score displayed at the end of the game, or upon pressing of the quit button, is displayed correctly along with the username.

   - **Steps:**
     1. Answer a number of questions, and complete or quit the game
     1. Check that the score displayed at the end of the game is correct
     1. Check that the username displayed in the template literals is correct
     1. Check that the 'Play again' button reloads the page, displays the introduction section and resets the `userScore` variable to zero

#### **Browser & Device Compatibility**

- **Objective:** Ensure that the web app displays and runs correctly across all common browsers and device types.
   
   - **Steps**
     1. Check that page displays correctly in widely-used browsers (i.e. Google Chrome, Firefox, Safari)
     1. Ensure page responsiveness and correct display on device types in Developer tools
     1. Ensure page responsiveness and correct running of the game on differrent device types (i.e. desktop, tablet, & mobile devices)

<a id=jshint-code-quality-tool></a>

### JSHint Code Quality Tool

The JSHint Code Quality tool was used to ensure that script.js complies with best practices and to detect/solve errors during development. In its present state, script.js can be passed through JSHint with no errors detected.

![JSHint results screenshot for script.js](documentation/screencaps/jshint-screencap.png)

<a id=jigsaw-css-validator></a>

### Jigsaw CSS Validator

Quizzit was passed through the W3C Jigsaw CSS Validator and returned no errors or warnings. The results can be viewed [here](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fklchambers.github.io%2Fquiz-app%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en).

<a id=w3c-html-validator></a>

### W3C HTML Validator

Quizzit was passed through the W3C HTML Validator and returned no errors or warnings. The results can be viewed [here](https://validator.w3.org/nu/?doc=https%3A%2F%2Fklchambers.github.io%2Fquiz-app%2F).

<a id=lighthouse-accessibility-&-performance></a>

### Lighthouse Accessibility & Performance

![Quizzit Lighthouse report summary](documentation/screencaps/quizzit-lighthouse-summary.png)

Quizzit performed well overall in the Lighthouse performance test. The site passed all audits with the exception of the following, in the head of the HTML document:

"[user-scalable="no"] is used in the <meta name="viewport"> element or the [maximum-scale] attribute is less than 5."

`<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1">`

`maximum-scale=1` was set in order to prevent the screen from zooming in on the username input field when selected on mobile devices, thus hindering the user experience. The page is still zoomable for users who require page magnification and so this audit is considered as acceptable for an improved user experience.

The Lighthouse report summary PDF can be accessed [here](documentation/pdf/quizzit-lighthouse-report.pdf).

<a id=development-and-deployment></a>

## Development and Deployment

<a id=development></a>

### Development

Development was started by cloning Code Institute's project template (available [here](https://github.com/Code-Institute-Org/ci-full-template)), and HTML, CSS and JavaScript were written in VSCode with changes pushed to GitHub.

<a id=contributing-to-Quizzit></a>

### Contributing to Quizzit

To contribute, make a pull request from the [project repository](https://github.com/klchambers/quiz-app). When merged, any changes will automatically be reflected in the live deployment on Github Pages.

<a id=deployment></a>

### Deployment

Quizzit has been deployed to GitHub Pages, a cloud-based hosting platform.

In order to deploy a cloned copy or fork of the project to GitHub Pages, follow the steps below:

1. From the GitHub repository, select '**Settings**'
2. In the left-hand menu, under the 'Code and automation' section, select '**Pages**'
3. Ensure _Sources_ is set to '**Deploy from a branch**', and that _Branch_ is set to '**Main**'
4. Click **Save**, the repository will now be available at https://_yourGitHubusername_.github.io/_yourprojectname_/ (for example: https://klchambers.github.io/quiz-app/)

<a id=technologies-used></a>

## Technologies Used

- VSCode: Writing and editing HTML, CSS, and JavaScript files
- GitHub: Source control
- GitHub Pages: Live deployment of site
- Balsamiq Wireframes: Creating initial webpage layout mockups during project inception

<a id=acknowledgements></a>

## Acknowledgements

[Favicon.io](https://favicon.io/) was used to generate the favicon for this project.

Questions and answers were adapted from examples provided in [this](https://www.mentimeter.com/blog/audience-energizers/55-free-trivia-and-fun-quiz-question-templates) article by Emma Cullen on Mentimeter.com.

Course content from Code Institute's Diploma in Full Stack Software Development has been useful and in teaching programming concepts and JavaScript methods.

Guidance from Code Institute mentor Brian O'Hare has been invaluable throughout stages of this project's inception and development.