// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs'; 
import generateMarkdown from './utils/generateMarkdown.js';
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a short description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the installation instructions?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What is the usage information for this project?',
  },
  {
    type: 'input',
    name: 'license',
    message: 'What is the license for this project?',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'What are the contributing guidelines?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'What are the test instructions?',
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
]; 


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log('Error writing to file:', err);
    } else {
      console.log('README file has been generated!');
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then((answers) => {
    const readmeContent = generateMarkdown(answers);
    writeToFile('README.md', readmeContent);
  })
  .catch((error) => {
    console.log('Error:', error);
  });
}

// Function call to initialize app
init();
