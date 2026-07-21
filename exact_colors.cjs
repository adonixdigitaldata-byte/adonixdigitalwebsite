const fs = require('fs');

let html = fs.readFileSync('c:\\Users\\rishab\\adonixdigital\\audit.html', 'utf8');

// 1. Update form container background and border
html = html.replace(
    /background: #0f1423; backdrop-filter: none; border: 1px solid rgba\(255, 255, 255, 0\.05\);/g,
    'background: #161c2d; backdrop-filter: none; border: 1px solid #272f43;'
);

// 2. Update inputs background and border
html = html.replace(
    /background: #080b13; border: 1px solid rgba\(255,255,255,0\.05\);/g,
    'background: #0b101a; border: 1px solid #1c2333;'
);

// 3. Update labels color
html = html.replace(
    /color: #ffffff; font-weight: 500;/g,
    'color: #a0abba; font-weight: 500;'
);

// 4. Update button to neon blue like the screenshot
html = html.replace(
    /border-radius: 30px; background: #6ee7c9; color: #000; font-weight: 600;/g,
    'border-radius: 30px; background: #0090ff; color: #ffffff; font-weight: 600; border: none;'
);

fs.writeFileSync('c:\\Users\\rishab\\adonixdigital\\audit.html', html);
console.log('Colors matched exactly to the OpticOdds screenshot.');
