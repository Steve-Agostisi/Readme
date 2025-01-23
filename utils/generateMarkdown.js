// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }

  const licenseBadges = {
    MIT: '![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)',
    Apache: '![Apache License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)',
    GPL: '![GPL License](https://img.shields.io/badge/license-GPL-blue.svg)',
    BSD: '![BSD License](https://img.shields.io/badge/license-BSD-blue.svg)',
    // Add more licenses as needed
  };
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }

  const licenseLinks = {
    MIT: 'https://opensource.org/licenses/MIT',
    Apache: 'https://opensource.org/licenses/Apache-2.0',
    GPL: 'https://www.gnu.org/licenses/gpl-3.0',
    BSD: 'https://opensource.org/licenses/BSD-3-Clause',
    // Add more licenses as needed
  };

  return licenseLinks[license] || ''; 
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }

  return `
## License
This project is licensed under the ${license} License. For more details, see the [license link](${renderLicenseLink(license)}).
  `;

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description} 
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For any questions, please contact me at [${data.email}](mailto:${data.email}).
GitHub: [${data.github}](https://github.com/${data.github})

`;
}

export default generateMarkdown;
