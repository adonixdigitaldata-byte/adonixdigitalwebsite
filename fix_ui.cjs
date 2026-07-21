const fs = require('fs');

let html = fs.readFileSync('c:\\Users\\rishab\\adonixdigital\\audit.html', 'utf8');

// 1. Fix the top spacing (padding-top: max(15vh, 120px);)
html = html.replace(
    /<section class="scroll-section" style="min-height: 100vh; padding-top: 15vh; position: relative; overflow: hidden; display: flex; flex-direction: column; align-items: center;">/,
    '<section class="scroll-section" style="min-height: 100vh; padding-top: max(15vh, 120px); position: relative; overflow: hidden; display: flex; flex-direction: column; align-items: center;">'
);

// 2. Update form styles to match the OpticOdds reference
// Replace the form container styles
html = html.replace(
    /background: rgba\(15, 15, 15, 0\.4\); backdrop-filter: blur\(24px\); border: 1px solid rgba\(255, 255, 255, 0\.08\); border-radius: 24px; padding: 3rem; box-shadow: 0 30px 60px rgba\(0,0,0,0\.4\);/,
    'background: #0f1423; backdrop-filter: none; border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 24px; padding: 2.5rem; box-shadow: 0 20px 40px rgba(0,0,0,0.5);'
);

// 3. Update the flex column to a grid layout for 2 columns, like the reference
html = html.replace(
    /<div style="display: flex; flex-direction: column; gap: 1\.5rem; margin-bottom: 2rem;">/,
    '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">'
);

// 4. Update the labels to be white and inputs to have darker background #080b13
html = html.replace(/color: rgba\(255,255,255,0\.7\)/g, 'color: #ffffff');
html = html.replace(/background: rgba\(0,0,0,0\.6\)/g, 'background: #080b13');
html = html.replace(/border: 1px solid rgba\(255,255,255,0\.1\)/g, 'border: 1px solid rgba(255,255,255,0.05)');

// 5. Update the button to be pill-shaped
html = html.replace(
    /id="audit-submit-btn" class="btn btn-primary" style="([^"]*?)border-radius: 12px;([^"]*?)"/,
    'id="audit-submit-btn" class="btn btn-primary" style="$1border-radius: 30px; background: #6ee7c9; color: #000; font-weight: 600;$2"'
);

// Make the "Name" input field take up full width or let it flow in grid (it will flow nicely in auto-fit grid)

fs.writeFileSync('c:\\Users\\rishab\\adonixdigital\\audit.html', html);
console.log('Applied mobile spacing and form styling.');
