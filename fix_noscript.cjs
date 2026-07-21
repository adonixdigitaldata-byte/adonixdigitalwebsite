const fs = require('fs');

function moveNoscript(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    const noscriptRegex = /<noscript><img height="1" width="1" style="display:none"[\s\S]*?\/>\s*<\/noscript>\s*/g;
    
    // Find the noscript block
    const noscriptMatch = content.match(noscriptRegex);
    if (!noscriptMatch) return;
    
    const noscriptBlock = noscriptMatch[0];
    
    // Remove it from its current position
    content = content.replace(noscriptRegex, '');
    
    // Insert it immediately after <body ...>
    content = content.replace(/(<body[^>]*>)/, `$1\n    ${noscriptBlock}`);
    
    fs.writeFileSync(filePath, content);
}

moveNoscript('c:\\Users\\rishab\\adonixdigital\\audit.html');
moveNoscript('c:\\Users\\rishab\\adonixdigital\\thank-you-audit.html');
console.log('Fixed noscript location');
