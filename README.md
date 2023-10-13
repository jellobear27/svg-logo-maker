# svg-logo-maker

## Description
A Node.js command-line application that generates an SVG logo based on user input.

## User Story
As a freelance web developer, I want to generate a simple logo for my projects so that I don't have to pay a graphic designer.

## Acceptance Criteria
- The application accepts user input.
- Users can enter up to three characters for the logo.
- Users can specify the text color using a color keyword or hexadecimal number.
- Users can choose a shape from a list of options: circle, triangle, and square.
- Users can specify the shape's color using a color keyword or hexadecimal number.
- When all inputs are provided, an SVG file named `logo.svg` is created.
- The application prints "Generated logo.svg" in the command line.
- Opening `logo.svg` in a browser displays a 300x200 pixel image that matches the specified criteria.

## Usage Instructions
1. Clone the repository: [Repository Link](https://github.com/jellobear27/svg-logo-maker.git)
2. Install the following:
   - Node.js Version 16.18.1
   - Jest Version 29.4.3
   - Inquirer.js Version 8.2.4
3. Open the cloned repository in your preferred source code editor.
4. Open the integrated terminal for the repository and complete the installation guides provided above.
5. Run the application by entering `node index.js` in the terminal.
6. Follow the prompts to enter text, text color, shape, and shape color.
7. Once completed, an SVG file named "logo.svg" will be created.

##  Walkthrough Video
[Watch the walkthrough video](https://drive.google.com/drive/folders/1O_eLczboclULVHsWPIyJxl11jCe_qvCd?usp=sharing)

## Screenshots

![Jest Testing](![Alt text](./images/Screenshot%202023-09-29%20at%2010.34.01%20PM.png))
*Figure 2. Jest Testing "npm test"*

![Generated "logo.svg" file](![Alt text](./images/Screenshot%202023-09-29%20at%2010.44.05%20PM.png))
*Figure 3. Generated "logo.svg" file*

## Built With
- Dynamic JavaScript
- Node.js
- Jest
- Inquirer.js

## What I Learned
- Creating a non-deployed application that generates a logo as an SVG file using Node.js.
- Using the JavaScript testing framework "Jest."

## Continued Development
- Create more SVG files for future applications.
- Add more user prompts to create a wider range of rendered SVG images.
