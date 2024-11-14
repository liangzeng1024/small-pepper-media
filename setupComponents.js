const fs = require('fs');
const path = require('path');

// Define your component names
const components = [
  'Navbar',
  'HeroSection',
  'IntroductionSection',
  'ServicesSection',
  'PortfolioSection',
  'TestimonialsSection',
  'ContactSection',
  'Footer',
];

// Path to the utils folder
const utilsPath = path.join(__dirname, 'src', 'utils');

// Create utils folder if it doesn't exist
if (!fs.existsSync(utilsPath)) {
  fs.mkdirSync(utilsPath);
}

// Loop through each component and create a folder with JSX and CSS files
components.forEach(component => {
  const componentPath = path.join(utilsPath, component);

  // Create the component folder
  if (!fs.existsSync(componentPath)) {
    fs.mkdirSync(componentPath);
  }

  // Create the JSX file
  const jsxContent = `
import React from 'react';
import './${component}.css';

const ${component} = () => (
  <div className="${component.toLowerCase()}">
    <h1>${component}</h1>
  </div>
);

export default ${component};
`;
  fs.writeFileSync(path.join(componentPath, `${component}.jsx`), jsxContent.trim());

  // Create the CSS file
  const cssContent = `/* Styles for ${component} */\n.${component.toLowerCase()} {}`;
  fs.writeFileSync(path.join(componentPath, `${component}.css`), cssContent);
});

console.log('Component folders and files created successfully!');
