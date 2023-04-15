// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of your project:',
  },
  {
    type: 'input',
    message: "What are the instructions for use?",
    name: 'usage',
  },
  {
    type: 'list',
    message: "Which license would you like to use for your project?",
    choices: ["MIT", "Apache", "GPL", "ISC", 'None'],
    name: 'license',
  },
  {
    type: 'input',
    message: "Provide the contribution guidelines for your project:",
    name: 'contributing',
  },
  {
    type: 'input',
    message: "Write tests for your project. Include examples for how to run your tests.",
    name: 'tests'
  },
  {
    type: 'input',
    message: "What is your github username?",
    name: 'github'
  },
  {
    type: 'input',
    message: "What is your email address?",
    name: 'email'
  }
];

// Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log('README.md has been generated successfully.');
  });
}

// Create a function to initialize app
async function init() {
  try {
    const answers = await inquirer.prompt(questions);
    const markdown = generateMarkdown(answers);
    writeToFile('README.md', markdown);
  } catch (error) {
    console.error('An error occurred during the README generation:', error);
  }
}

// Function call to initialize app
init();

