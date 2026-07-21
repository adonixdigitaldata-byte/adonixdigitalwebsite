const fs = require('fs');


const files = fs.readdirSync('c:\\Users\\rishab\\adonixdigital').filter(f => f.endsWith('.html'));

const desktopNavLink = '\n          <a href="audit.html" data-translate="nav_audit">Free Audit</a>';
const mobileNavLink = '\n          <a href="audit.html" data-translate="nav_audit">Free Audit</a>';

files.forEach(file => {
    let content = fs.readFileSync('c:\\Users\\rishab\\adonixdigital\\' + file, 'utf8');
    
    // Add to desktop nav
    // Find: <a href="contact.html" data-translate="nav_contact">اتصل بنا</a>
    // Or similar (varies by page)
    content = content.replace(/(<a href="contact\.html"[^>]*>.*?<\/a>)/g, `$1${desktopNavLink}`);
    
    fs.writeFileSync('c:\\Users\\rishab\\adonixdigital\\' + file, content);
});

// Update translations
let mainJs = fs.readFileSync('c:\\Users\\rishab\\adonixdigital\\src\\main.js', 'utf8');
mainJs = mainJs.replace(/nav_contact: "Contact",/, `nav_contact: "Contact",\n    nav_audit: "Free Audit",`);
mainJs = mainJs.replace(/nav_contact: "اتصل بنا",/, `nav_contact: "اتصل بنا",\n    nav_audit: "تدقيق مجاني",`);

fs.writeFileSync('c:\\Users\\rishab\\adonixdigital\\src\\main.js', mainJs);
console.log('Navigation added to all HTML files and main.js');
