const fs = require('fs');
const file = 'src/blogData.js';
let data = fs.readFileSync(file, 'utf8');

const splitStr = '  },\n  {\n    id: 6,\n';
const parts = data.split(splitStr);

if (parts.length === 2) {
  const header = 'export const blogPosts = [\n';
  const part0WithoutHeader = parts[0].substring(header.length);
  
  // parts[1] contains the rest of object 6 and ends with '  }\n];\n' or '  }\n];'
  let part1 = parts[1];
  let endStr = '';
  if (part1.endsWith('  }\n];\n')) {
    endStr = '  }\n];\n';
    part1 = part1.substring(0, part1.length - endStr.length);
  } else if (part1.endsWith('  }\n];')) {
    endStr = '  }\n];';
    part1 = part1.substring(0, part1.length - endStr.length);
  } else {
    // try removing just '];\n' or '];'
    const match = part1.match(/(\s*\}\n\];?\n?)$/);
    if (match) {
        endStr = match[1];
        part1 = part1.substring(0, part1.length - endStr.length);
    }
  }

  const block6 = '  {\n    id: 6,\n' + part1 + '  },\n';
  
  const newContent = header + block6 + part0WithoutHeader + endStr;
  
  fs.writeFileSync(file, newContent);
  console.log("Successfully reordered blogPosts.");
} else {
  console.log("Could not find the exact split string.");
}
