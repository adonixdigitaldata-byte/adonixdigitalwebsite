const fs = require('fs');
const path = require('path');

const files = [
  'index.html',
  'about.html',
  'services.html',
  'products.html',
  'contact.html',
  'blog.html',
  'blog-post.html'
];

const metaTag = `    <meta name="google-site-verification" content="YsFRWPc_f-vtmUSww1S-3LoW2drt-2CxCGzrRDhVsKg" />\n`;

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    if (!content.includes('google-site-verification')) {
      content = content.replace(/<\/head>/i, metaTag + '</head>');
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log('Added to ' + file);
    } else {
      console.log('Already in ' + file);
    }
  }
});
