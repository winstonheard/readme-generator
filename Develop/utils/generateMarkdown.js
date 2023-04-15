// Function that returns a license badge based on the selected license
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
  return `![License: ${license}](https://img.shields.io/badge/License-${license.replace(' ', '%20')}-green.svg)`;
}

// Function that returns the license link
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }
  return `https://opensource.org/licenses/${license}`;
}

// Function that returns the license section of README
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
  return `
## License

This project is licensed under the ${license} License. 

${renderLicenseBadge(license)}

For more information, please visit [${renderLicenseLink(license)}](${renderLicenseLink(license)}).
`;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description

${data.description}

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

If you have any questions or need additional information, feel free to contact me:

- GitHub: [${data.github}](https://github.com/${data.github})
- Email: ${data.email}
`;
}

module.exports = generateMarkdown;
