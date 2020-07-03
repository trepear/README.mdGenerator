const fs = require("fs");
const inquirer = require("inquirer");

var Apache = "[![Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
var MIT = "[![MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
var GPL = "[![GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";

// array of questions for user
const questions = [
        {
            type: "list",
            message: "What will be the license of your README.md?",
            name: "license",
            choices: ["MIT","Apache","GPL","Public Domain (no license)"]
        },
        {
            type: "list",
            message: "Which license badge would you like displayed?",
            name: "badge",
            choices: [Apache, MIT, GPL, "no license"]
        },
        {
            type: "input",
            message: "What will your title be?",
            name: "title",
            
        },
        {
            type: "input",
            message: "Write a description of your project.",
            name: "description"
        },
        {
            type: "input",
            message: "Include and installation instructions here.",
            name: "installation"
        },
        {
            type: "input",
            message: "Enter in any usage instructions here.",
            name: "usage"
        },
        {
            type: "input",
            message: "Write any contribution guidelines here.",
            name: "contribution"
        },
        {
            type: "input",
            message: "Enter any test instructions here.",
            name: "test"
        },
        {
            type: "input",
            message: "Enter your GitHub username here.",
            name: "username"
        },
        {
            type: "input",
            message: "Enter your email here.",
            name: "email"
        }

]
    
inquirer
    .prompt(questions).then(response => { 
        // Append TITLE
        fs.appendFileSync("README.md", ("# " + response.title) + "\n", function(err) {
            if (err) {
                console.log(err)
            }
        })
        // Append BADGE
        fs.appendFileSync("README.md", (response.badge) + "\n", function(err) {
            if (err) {
                console.log(err)
            }
        })
        // Append DESCRIPTION
        fs.appendFileSync("README.md", "\n" + (response.description) + "\n", function(err) {
            if (err) {
                console.log(err)
            }
        })
        // Append title for TABLE OF CONTENTS
        fs.appendFileSync("README.md", ("## Table of Contents:" + "\n"), function(err) {
            if (err) {
                console.log(err)
            }
        })
        // Append TOC SECTIONS
        fs.appendFileSync("README.md", ("- " + "[Installation](#installation)" + "\n"));
        fs.appendFileSync("README.md", ("- " + "[Usage](#usage)" + "\n"));
        fs.appendFileSync("README.md", ("- " + "[License](#license)" + "\n"));
        fs.appendFileSync("README.md", ("- " + "[Contributing](#contributing)" + "\n"));
        fs.appendFileSync("README.md", ("- " + "[Tests](#tests)" + "\n"));
        fs.appendFileSync("README.md", ("- " + "[Questions](#questions)" + "\n"),
        
        function(err) {
            if (err) {
                console.log(err)
            }
        })
        // Append INSTALLATION
        fs.appendFileSync("README.md", ("## Installation" + "\n"));
        fs.appendFileSync("README.md", "```bash" + "\n" + (response.installation) + "\n" + "```" + "\n",
        function(err){
            if (err) {
                console.log(err)
            }
        })
        // Append USAGE
        fs.appendFileSync("README.md", ("## Usage" + "\n"));
        fs.appendFileSync("README.md", "```javascript" + "\n" + (response.usage) + "\n" + "```" + "\n",
        function(err){
            if (err) {
                console.log(err)
            }
        })
        // Append LICENSE
        fs.appendFileSync("README.md", ("## License"));
        fs.appendFileSync("README.md", "\n" + (response.license) + "\n", 
        function(err){
            if (err) {
                console.log(err)
            }
        })
        // Append CONTRIBUTING
        fs.appendFileSync("README.md", ("## Contributing"));
        fs.appendFileSync("README.md", "\n" + (response.contribution) + "\n", 
        function(err){
            if (err) {
                console.log(err)
            }
        })
        // Append TESTS
        fs.appendFileSync("README.md", ("## Tests"));
        fs.appendFileSync("README.md", "\n" + (response.tests) + "\n", 
        function(err){
            if (err) {
                console.log(err)
            }
        })
        // Append QUESTIONS
        fs.appendFileSync("README.md", ("## Questions"));  
            // Link to Github profile
        fs.appendFileSync("README.md", "\n" + "github.com/" + (response.username) + "\n"),
            // Email
        fs.appendFileSync("README.md", "\n" + (response.email),
        function(err){
            if (err) {
                console.log(err)
            }
            console.log("WELL DONE, MATE!")
        })
    });