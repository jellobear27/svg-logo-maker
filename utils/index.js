// Includes packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateLogo = require("./generateLogo");
const { type } = require("os");

const questions = [
  // WHEN I am prompted for a shape
  // THEN I am presented with a list of shapes to choose from: circle, triangle, and square
  {
    type: "list",
    message: "What shape do you want the svg to be?",
    name: "shape",
    choices: ["Circle", "Triangle", "Square"],
  },
  // WHEN I am prompted for the shape's color
  // THEN I can enter a color keyword (OR a hexadecimal number)
  {
    type: "input",
    message: "What color would you like your shape to be?",
    name: "shape_color",
  },
  //WHEN I am prompted for text
  //THEN I can enter up to three characters
  {
    type: "input",
    message: "Please type in a character-set of 3 letters.",
    name: "text_color",
  },
  // WHEN I am prompted for the text color
  // THEN I can enter a color keyword (OR a hexadecimal number)
  {
    type: "input",
    message: "What color would you like the text to be?",
    name: "text_color",
  },
];

// WHEN I have entered input for all the prompts
// THEN an SVG file is created named `logo.svg`

function writeToFile(fileName, data) {
  var content = generateLogo(data);
  fs.writeFile(fileName, content, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('generated logo.svg');
    }
  });
}

// Created a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (data) {
    var fileName = 'logo.svg';
    writeToFile(fileName, data);
  });
}

// Function call to initialize app
init();
