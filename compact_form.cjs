const fs = require('fs');

let html = fs.readFileSync('c:\\Users\\rishab\\adonixdigital\\audit.html', 'utf8');

// 1. Form Container: reduce padding (2.5rem -> 2rem), border-radius (24px -> 16px)
html = html.replace(
    /border-radius: 24px; padding: 2\.5rem; box-shadow: 0 20px 40px rgba\(0,0,0,0\.5\);/g,
    'border-radius: 16px; padding: 2rem; box-shadow: 0 10px 30px rgba(0,0,0,0.5);'
);

// 2. Grid Container: reduce gap (2rem -> 1.25rem) and margin-bottom (2rem -> 1.5rem)
html = html.replace(
    /gap: 2rem; margin-bottom: 2rem;/g,
    'gap: 1.25rem; margin-bottom: 1.5rem;'
);

// 3. Inputs: reduce padding (1rem 1.5rem -> 0.75rem 1rem) and border-radius (12px -> 8px)
html = html.replace(
    /border-radius: 12px; padding: 1rem 1\.5rem;/g,
    'border-radius: 8px; padding: 0.75rem 1rem;'
);
// Update phone code input padding as well
html = html.replace(
    /border-radius: 12px; padding: 1rem 0\.5rem;/g,
    'border-radius: 8px; padding: 0.75rem 0.5rem;'
);

// 4. Labels: reduce margin-bottom (0.5rem -> 0.25rem) and font-size (0.9rem -> 0.85rem)
html = html.replace(
    /margin-bottom: 0\.5rem; font-size: 0\.9rem; color: #a0abba;/g,
    'margin-bottom: 0.25rem; font-size: 0.85rem; color: #a0abba;'
);

// 5. Button: reduce padding (1.25rem -> 1rem)
html = html.replace(
    /style="width: 100%; padding: 1\.25rem;/g,
    'style="width: 100%; padding: 1rem;'
);

fs.writeFileSync('c:\\Users\\rishab\\adonixdigital\\audit.html', html);
console.log('Made form shorter and more minimal.');
