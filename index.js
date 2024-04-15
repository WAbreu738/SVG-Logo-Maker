// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const { generateSVG } = require('./lib/shapes')


const questions = [
    {
      name: 'title',
      message: 'Please type your title (Max 3 Characters):',
      prefix: '\n',
      validate: function(input) {
        if (input.length < 3) {
          return "Title must be at maxium 3 characters long.";
        }
        return true; 
      }
    },
  
    {
        name: 'textColor',
        message: 'What color would you like your text to be?',
        prefix: '\n'
      },

    {
      type: 'list',
      name: 'shape',
      message: 'Please choose a shape:',
      choices: ['Circle', 'Triangle', 'Square'],
    },

    {
        name: 'shapeColor',
        message: 'What color would you like your shape to be?',
        prefix: '\n'
    },

  ];



  // TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        return console.log(err)
      }
  
      console.log('SVG generated successfully!')
    })
  }
  
  // TODO: Create a function to initialize app
  function init() {
  
    inquirer.prompt(questions)
      .then((answersObj) => {
        const markdown = generateSVG(answersObj)
  
        writeToFile('logo.svg', markdown)
      })
      .catch((err) => {
        console.log(err)
      })
  
  
  }
  
  // Function call to initialize app
  init();
  

//   WHEN I have entered input for all the prompts
// THEN an SVG file is created named `logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered

