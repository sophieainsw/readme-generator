// function to generate markdown for README

const licenseBadges = {
  "MIT": "MIT", 
  "GNU": "GNU", 
  "BSD-2-Clause": "BSD_2", 
  "Boost Software": "Boost_Software"
};

function generateMarkdown(data) {
return `# ${data.title} 
![License Badge](https://img.shields.io/badge/License-${licenseBadges[data.license]}-blue)
## Project Description
    ${data.description}
## Installation
  ${data.installation}
## Usage
  ${data.usage}
## License
  This project is licensed under the ${data.license} license.
## Git Hub
  Git Hub (https://github.com/${data.git});
## Questions
  For any questions about this project or contributions please contact me at ${data.questions}`
}

module.exports = generateMarkdown;
