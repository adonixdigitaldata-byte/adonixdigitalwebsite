const fs = require('fs');

const path = 'c:/Users/rishab/adonixdigital/src/blog-post.js';
let content = fs.readFileSync(path, 'utf8');

// Wrap tables in a responsive container to prevent overflow on mobile
content = content.replace(
    /const tables = postContent\.querySelectorAll\('table'\);/g,
    "const tables = postContent.querySelectorAll('table');\n" +
    "      tables.forEach(t => {\n" +
    "        const wrapper = document.createElement('div');\n" +
    "        wrapper.style.overflowX = 'auto';\n" +
    "        wrapper.style.width = '100%';\n" +
    "        t.parentNode.insertBefore(wrapper, t);\n" +
    "        wrapper.appendChild(t);\n" +
    "      });"
);

fs.writeFileSync(path, content);
console.log('Added responsive table wrappers.');
