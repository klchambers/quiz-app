# Quizzit

**Table of contents:**

- [Introduction](#introduction)
- [Deployed Site](#deployed-site)
- [User Experience](#user-experience)
  - [User Goals](#user-goals)
  - [User Stories](#user-stories)
  - [Site Structure](#site-structure)
  - [Design](#design)
    - [Colour](#colour)
    - [Typography](#typography)
  - [Wireframes](#wireframes)
- [Quizzit Features](#Quizzit-features)
- [Testing and Validation](#testing-and-validation)
  - [Testing Methodology](#testing-methodology)
  - [Testing](#testing)
  - [Jigsaw CSS Validator](#jigsaw-css-validator)
  - [W3C HTML Validator](#w3c-html-validator)
  - [Lighthouse Accessibility & Performance](#lighthouse-accessibility-&-performance)
- [Development and Deployment](#development-and-deployment)
  - [Development](#development)
  - [Contributing to Quizzit](#contributing-to-Quizzit)
  - [Deployment](#deployment)
- [Technologies Used](#technologies-used)
- [Acknowledgements](#acknowledgements)

<a id=#introduction></a>

## Introduction

Quizzit is a responsive front-end web application through which users can test their knowledge with a series of general knowledge/trivia questions. It is designed with a mobile-first approach, and intuitive UX to allow the user to have fun using it's simple, clutter-free interface.

![Quizzit responsiveness mockup]()

<a id=#deployed-site></a>

## Deployed Site

Quizzit can be accessed [here](https://klchambers.github.io/quiz-app/).

<a id=#user-experience></a>

## User Experience

<a id=#user-goals></a>

### User Goals

- The site should be simple and intuitive
- The site needs to be engaging and responsive when I interact with it
- The quiz content should be interesting and appeal to a range of audiences

<a id=#user-stories></a>

### User Stories

- I would like to see visual feedback as I progress through the quiz. For example, my score should be displayed on screen and answers should turn green or red when I choose a correct or incorrect answer
- I would like the content of the quiz to be engaging, with a varied mix of general knowledge questions
- I would like the site to give me the option to try again when I complete the quiz

<a id=#site-structure></a>

### Site Structure

Quizzit consists of a single HTML document, with content displayed or hidden depending on the stage of the quiz that the user has reached.

Upon loading the site, the user is shown an introduction section, where they are asked to input their username and select the 'Start quizzing' button.

Once this has been completed, the introduction section is hidden, using JavaScript, and the main quiz section is displayed. Here, the user is shown their current score, a question, four possible answers, and the options to 'quit' the game or 'pass' the current question. The latter two options are set apart from the answer choices at the top of the screen in order to prevent the user from accidentally quitting the game or skipping a question.

Questions are stored in script.js as objects in an array. They are displayed by altering the page's HTML using JavaScript template literals. This method was employed in order to keep the structure of Quizzit simple and maintainable.

After the 10 questions are completed, the user is shown the 'results section'. Here, their final score is shown, and they are given the choice to play again.

<a id=#design></a>

### Design

<a id=#colour></a>

#### Colour

The user interface of Quizzit is designed to be visually appealing to the user, while remaining simplistic to avoid distracting the user away from the web app itself. The background of the page is a shade of off-white `#faf9f6` ![Placeholder image for colour block](https://placehold.co/15/faf9f6/png) with text in the shade of `#00205d` ![Placeholder image for colour block](https://placehold.co/15/00205d/png) to provide contrast and maintain legibility.

Headers and buttons use `#5e77c2` ![Placeholder image for colour block](https://placehold.co/15/5e77c2/png), and buttons change color to `#00205d`![Placeholder image for colour block](https://placehold.co/15/00205d/png) on hover to indicate to the user which button/answer they are about to select.

The page's logo uses a light orange(`#ff9a89`)![Placeholder image for colour block](https://placehold.co/15/ff9a89/png) evoke feelings of playfulness and fun to the user, while maintaining a contrast with the page's headers.

<a id=#typography></a>

#### Typography

[Google Fonts](https://fonts.google.com/) was used to import custom fonts into the CSS.

For the logo in the header, [Quicksand](https://fonts.google.com/specimen/Quicksand/) by Andrew Paglinawan was used, and [Roboto](https://fonts.google.com/specimen/Roboto) by Christian Robertson was selected as the main typeface for all other text in the quiz. These typefaces were chosen for their simplicity and legibility across all device types and screen sizes.

<a id=#wireframces></a>

### Wireframes

During the inception of this project, Balsamiq Wireframes was used to create mockups of the responsiveness I wanted to create across device types.

#### [Quizzit mobile mockup](assets/documentation/mobile-wireframe.pdf)

#### [Quizzit browser mockup](assets/documentation/desktopbrowser-wireframe.pdf)

<a id=#Quizzit-features></a>

## Quizzit Features

<a id=#testing-and-validation></a>

## Testing and Validation

<a id=#testing-methodology></a>

### Testing Methodology

<a id=#testing></a>

### Testing

<a id=#jigsaw-css-validator></a>

### Jigsaw CSS Validator

<a id=#w3c-html-validator></a>

### W3C HTML Validator

<a id=#lighthouse-accessibility-&-performance></a>

### Lighthouse Accessibility & Performance

<a id=#development-and-deployment></a>

## Development and Deployment

<a id=#development></a>

### Development

Development was started by cloning Code Institute's project template (available [here](https://github.com/Code-Institute-Org/ci-full-template)), and HTML, CSS and JavaScript were written in VSCode with changes pushed to GitHub.

<a id=#contributing-to-Quizzit></a>

### Contributing to Quizzit

To contribute, make a pull request from the [project repository](https://github.com/klchambers/quiz-app). When merged, any changes will automatically be reflected in the live deployment on Github Pages.

<a id=#Deployment></a>

### Deployment

Quizzit has been deployed to GitHub Pages, a cloud-based hosting platform.

In order to deploy a cloned copy or fork of the project to GitHub Pages, follow the steps below:

1. From the GitHub repository, select '**Settings**'
2. In the left-hand menu, under the 'Code and automation' section, select '**Pages**'
3. Ensure _Sources_ is set to '**Deploy from a branch**', and that _Branch_ is set to '**Main**'
4. Click **Save**, the repository will now be available at https://_yourGitHubusername_.github.io/_yourprojectname_/ (for example: https://klchambers.github.io/quiz-app/)

<a id=#technologies-used></a>

## Technologies Used

- VSCode: Writing and editing HTML and CSS files
- GitHub: Source control
- GitHub Pages: Live deployment of site
- Balsamiq Wireframes: Creating initial webpage layout mockups during project inception

<a id=#acknowledgements></a>

## Acknowledgements

[Favicon.io](https://favicon.io/) was used to generate the favicon for this project.

Questions and answers were adapted from examples provided in [this](https://www.mentimeter.com/blog/audience-energizers/55-free-trivia-and-fun-quiz-question-templates) article by Emma Cullen on Mentimeter.com.
