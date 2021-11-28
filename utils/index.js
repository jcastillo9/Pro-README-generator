// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'What is the title of your application?'
},
{   type: 'input',
    name: 'description',
    message: 'What does the application do?'
},
{   type: 'input',
    name: 'installation',
    message: 'How do I install this application?'
},
{   type: 'input',
    name: 'usage',
    message: 'How do I use this application?',
},
{   type: 'input',
    name: 'contributing',
    message: 'How can other developers contribute to this application? '
},
{   type: 'input',
    name: 'tests',
    message: 'How can other developers contribute to this application?'
},
{   type: 'list',
    name: 'license',
    message: 'Choose a license:',
    choices: ['MIT', 'Apache 2.0', 'BSD', 'No License'],
},
{   type: 'input',
    name: 'username',
    message: 'Please enter your GitHub Username.',
},
{   type: 'input',
    name: 'email',
    message: 'Please enter your email.',
},
];

// TODO: Create a function to write README file
function writeToFile(data) {
    const writeReadme = generateMarkdown(data);
    fs.writeFile('README.md', writeReadme, (err) =>
    err ? console.log(err) : console.log('Created your README.md')
    );

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data => {
        writeToFile(data);
    });
}

// Function call to initialize app
init();
