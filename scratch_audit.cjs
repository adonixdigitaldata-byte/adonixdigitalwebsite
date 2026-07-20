const fs = require('fs');
const path = require('path');

const dir = 'c:\\Users\\rishab\\adonixdigital';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/>احجز استشارة مجانية<\/a>/g, '>تدقيق مجاني للأعمال</a>');
  content = content.replace(/>احجز مكالمة استشارية مجانية<\/a>/g, '>تدقيق مجاني للأعمال</a>');
  content = content.replace(/>Book Strategy Call<\/a>/g, '>Free Business Audit</a>');
  content = content.replace(/>Book A Free Strategy Call<\/a>/g, '>Free Business Audit</a>');
  fs.writeFileSync(filePath, content);
});

// Update main.js
const mainPath = path.join(dir, 'src', 'main.js');
let mainContent = fs.readFileSync(mainPath, 'utf8');

mainContent = mainContent.replace(/nav_cta:\s*"Book Strategy Call"/g, 'nav_cta: "Free Business Audit"');
mainContent = mainContent.replace(/nav_cta:\s*"احجز استشارة مجانية"/g, 'nav_cta: "تدقيق مجاني للأعمال"');

mainContent = mainContent.replace(/hero_cta_primary:\s*"Book A Free Strategy Call"/g, 'hero_cta_primary: "Free Business Audit"');
mainContent = mainContent.replace(/hero_cta_primary:\s*"احجز مكالمة استشارية مجانية"/g, 'hero_cta_primary: "تدقيق مجاني للأعمال"');

mainContent = mainContent.replace(/cta_subtext:\s*"Book a strategy call and see how Adonix can rebuild your operations around autonomous AI."/g, 'cta_subtext: "Get a free business audit and see how Adonix can rebuild your operations around autonomous AI."');
mainContent = mainContent.replace(/cta_subtext:\s*"احجز مكالمة استراتيجية وشاهد كيف يمكن لأدونيكس إعادة بناء عملياتك حول الذكاء الاصطناعي المستقل."/g, 'cta_subtext: "احصل على تدقيق مجاني للأعمال وشاهد كيف يمكن لأدونيكس إعادة بناء عملياتك حول الذكاء الاصطناعي المستقل."');

fs.writeFileSync(mainPath, mainContent);

console.log("Replaced successfully!");
