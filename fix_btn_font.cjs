const fs = require('fs');

let html = fs.readFileSync('c:\\Users\\rishab\\adonixdigital\\audit.html', 'utf8');

// Add font-family: inherit; font-weight: 600; to the hero button
html = html.replace(
    /font-size: 1\.1rem; letter-spacing: 1px;/g,
    'font-size: 1.1rem; letter-spacing: 1px; font-family: inherit; font-weight: 600;'
);

// Add font-family: inherit; font-weight: 600; to the submit button
html = html.replace(
    /padding: 1rem; letter-spacing: 1px;/g,
    'padding: 1rem; letter-spacing: 1px; font-family: inherit; font-weight: 600;'
);

fs.writeFileSync('c:\\Users\\rishab\\adonixdigital\\audit.html', html);
console.log('Fixed button fonts to inherit from the website theme.');
