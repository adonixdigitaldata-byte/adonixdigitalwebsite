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

const gtagCode = `
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18287042971"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'AW-18287042971');
    </script>
`;

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    if (!content.includes('AW-18287042971')) {
      content = content.replace(/<\/head>/i, gtagCode + '</head>');
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log('Added to ' + file);
    } else {
      console.log('Already in ' + file);
    }
  }
});
