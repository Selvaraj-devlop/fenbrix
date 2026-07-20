const fs = require('fs');
const path = require('path');

const files = [
  'WebDev.jsx', 'UiUx.jsx', 'MobileApp.jsx', 
  'Marketing.jsx', 'GraphicDesign.jsx', 'Ecommerce.jsx'
];

files.forEach(file => {
  const filePath = path.join(__dirname, 'src', 'pages', 'services', file);
  let content = fs.readFileSync(filePath, 'utf8');

  content = content.replace(/className="container srv-hero-grid"/g, 'className="container srv-hero-grid" data-aos="fade-up"');
  content = content.replace(/className="srv-features-strip"/g, 'className="srv-features-strip" data-aos="fade-up"');
  content = content.replace(/className="srv-section"/g, 'className="srv-section" data-aos="fade-up"');
  content = content.replace(/className="srv-section alt-bg"/g, 'className="srv-section alt-bg" data-aos="fade-up"');
  content = content.replace(/className="srv-timeline"/g, 'className="srv-timeline" data-aos="fade-up"');
  content = content.replace(/className="srv-tools-grid"/g, 'className="srv-tools-grid" data-aos="fade-up"');
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Updated', file);
});
