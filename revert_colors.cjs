const fs = require('fs');

let html = fs.readFileSync('c:\\Users\\rishab\\adonixdigital\\audit.html', 'utf8');

// 1. Revert Form Container to Adonix Glass theme
html = html.replace(
    /background: #161c2d; backdrop-filter: none; border: 1px solid #272f43;/g,
    'background: rgba(15, 15, 15, 0.4); backdrop-filter: blur(24px); border: 1px solid rgba(255, 255, 255, 0.08);'
);

// 2. Revert Inputs to Adonix dark transparent theme
html = html.replace(
    /background: #0b101a; border: 1px solid #1c2333;/g,
    'background: rgba(0,0,0,0.6); border: 1px solid rgba(255,255,255,0.1);'
);

// 3. Revert Labels to Adonix subtle text
html = html.replace(
    /color: #a0abba; font-weight: 500;/g,
    'color: rgba(255,255,255,0.7); font-weight: 500;'
);

// 4. Revert Button styling to use pure Adonix .btn-primary classes and remove weird fonts
html = html.replace(
    /padding: 0\.8rem; font-size: 1rem; letter-spacing: 1px; display: flex; justify-content: center; align-items: center; gap: 10px; border-radius: 30px; background: #0090ff; color: #ffffff; font-weight: 600; border: none; transition: transform 0\.3s ease, box-shadow 0\.3s ease;/g,
    'padding: 1rem; letter-spacing: 1px; display: flex; justify-content: center; align-items: center; gap: 10px; border-radius: 12px; transition: transform 0.3s ease, box-shadow 0.3s ease;'
);
// Also remove any remaining button overrides
html = html.replace(
    /padding: 1rem; font-size: 1\.1rem; letter-spacing: 1px; display: flex; justify-content: center; align-items: center; gap: 10px; border-radius: 12px; transition: transform 0\.3s ease, box-shadow 0\.3s ease;/g,
    'padding: 1rem; letter-spacing: 1px; display: flex; justify-content: center; align-items: center; gap: 10px; border-radius: 12px; transition: transform 0.3s ease, box-shadow 0.3s ease;'
);

fs.writeFileSync('c:\\Users\\rishab\\adonixdigital\\audit.html', html);
console.log('Reverted to Adonix colors and fixed button fonts.');
