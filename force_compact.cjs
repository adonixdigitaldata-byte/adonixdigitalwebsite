const fs = require('fs');

let html = fs.readFileSync('c:\\Users\\rishab\\adonixdigital\\audit.html', 'utf8');

// 1. Force a strict 2-column grid instead of auto-fit so it stays compact even on mobile
html = html.replace(
    /grid-template-columns: repeat\(auto-fit, minmax\(320px, 1fr\)\); gap: 1\.25rem;/g,
    'grid-template-columns: 1fr 1fr; gap: 0.75rem;' // even tighter gap for mobile fitting
);

// 2. Reduce the phone code input width so it fits perfectly on half a mobile screen
html = html.replace(
    /width: 80px; box-sizing: border-box; background: #0b101a;/g,
    'width: 60px; box-sizing: border-box; background: #0b101a;'
);

// 3. Make labels even smaller to save vertical space
html = html.replace(
    /margin-bottom: 0\.25rem; font-size: 0\.85rem; color: #a0abba;/g,
    'margin-bottom: 0.2rem; font-size: 0.75rem; color: #a0abba;'
);

// 4. Make input text a bit smaller to fit tight mobile columns
html = html.replace(
    /padding: 0\.75rem 1rem; color: white;/g,
    'padding: 0.75rem 0.75rem; color: white; font-size: 0.85rem;'
);
html = html.replace(
    /padding: 0\.75rem 0\.5rem; color: white; text-align: center;/g,
    'padding: 0.75rem 0.25rem; color: white; font-size: 0.85rem; text-align: center;'
);

// 5. Shrink form padding further for mobile
html = html.replace(
    /padding: 2rem; box-shadow: 0 10px 30px rgba\(0,0,0,0\.5\);/g,
    'padding: 1.5rem; box-shadow: 0 10px 30px rgba(0,0,0,0.5);'
);

// 6. Make the submit button smaller and tighter
html = html.replace(
    /padding: 1rem; font-size: 1\.1rem;/g,
    'padding: 0.8rem; font-size: 1rem;'
);

fs.writeFileSync('c:\\Users\\rishab\\adonixdigital\\audit.html', html);
console.log('Forced strict 2-column compact layout.');
