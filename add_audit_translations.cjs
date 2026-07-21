const fs = require('fs');

const file = 'src/main.js';
let content = fs.readFileSync(file, 'utf8');

const enInsert = `
    // Audit Landing Page
    audit_hero_title: "Get a FREE AI Business Growth Audit",
    audit_hero_sub: "Discover what's preventing your business from generating more leads.",
    audit_hero_btn: "Book My Free Audit",
    audit_feat_1: "AI Website Analysis",
    audit_feat_1_desc: "Identify performance bottlenecks and conversion killers.",
    audit_feat_2: "Google SEO Audit",
    audit_feat_2_desc: "Uncover ranking opportunities to dominate local search.",
    audit_feat_3: "Competitor Analysis",
    audit_feat_3_desc: "See exactly what marketing strategies your top competitors use.",
    audit_feat_4: "AI Automation Opportunities",
    audit_feat_4_desc: "Discover where AI can save hundreds of hours of manual work.",
    audit_feat_5: "Lead Generation Strategy",
    audit_feat_5_desc: "A custom roadmap to double your qualified inbound leads.",
    audit_form_name: "Name",
    audit_form_company: "Company Name",
    audit_form_phone: "Phone Number",
    audit_form_email: "Email",
    audit_form_city: "City",
    audit_form_website: "Website (optional)",
    audit_form_ind: "Industry",
    audit_form_ind_ret: "Retail & E-commerce",
    audit_form_ind_re: "Real Estate",
    audit_form_ind_health: "Healthcare",
    audit_form_ind_fb: "Food & Beverage",
    audit_form_ind_prof: "Professional Services",
    audit_form_ind_other: "Other",
    audit_form_ind_other_ph: "Specify your industry",
    audit_form_budget: "Monthly Marketing Budget",
    audit_form_bud_1: "Under SAR 2,000",
    audit_form_bud_2: "SAR 2,000–5,000",
    audit_form_bud_3: "SAR 5,000–10,000",
    audit_form_bud_4: "Above SAR 10,000",
    audit_form_btn: "Claim My FREE AI Business Audit",
    thank_you_title: "Thank you!",
    thank_you_body: "Your AI Business Audit request has been received. Our team will contact you within 24 hours.",
    thank_you_wa: "Chat on WhatsApp",`;

const arInsert = `
    // Audit Landing Page
    audit_hero_title: "احصل على تدقيق مجاني لنمو أعمالك بالذكاء الاصطناعي",
    audit_hero_sub: "اكتشف ما يمنع عملك من توليد المزيد من العملاء المحتملين.",
    audit_hero_btn: "احجز التدقيق المجاني",
    audit_feat_1: "تحليل الموقع بالذكاء الاصطناعي",
    audit_feat_1_desc: "تحديد اختناقات الأداء وقاتلات التحويل.",
    audit_feat_2: "تدقيق تحسين محركات البحث",
    audit_feat_2_desc: "اكتشاف فرص التصنيف للسيطرة على البحث المحلي.",
    audit_feat_3: "تحليل المنافسين",
    audit_feat_3_desc: "شاهد بالضبط استراتيجيات التسويق التي يستخدمها كبار منافسيك.",
    audit_feat_4: "فرص الأتمتة بالذكاء الاصطناعي",
    audit_feat_4_desc: "اكتشف أين يمكن للذكاء الاصطناعي توفير مئات الساعات من العمل اليدوي.",
    audit_feat_5: "استراتيجية توليد العملاء",
    audit_feat_5_desc: "خارطة طريق مخصصة لمضاعفة العملاء المحتملين المؤهلين.",
    audit_form_name: "الاسم",
    audit_form_company: "اسم الشركة",
    audit_form_phone: "رقم الهاتف",
    audit_form_email: "البريد الإلكتروني",
    audit_form_city: "المدينة",
    audit_form_website: "الموقع الإلكتروني (اختياري)",
    audit_form_ind: "الصناعة",
    audit_form_ind_ret: "التجزئة والتجارة الإلكترونية",
    audit_form_ind_re: "العقارات",
    audit_form_ind_health: "الرعاية الصحية",
    audit_form_ind_fb: "الأغذية والمشروبات",
    audit_form_ind_prof: "الخدمات المهنية",
    audit_form_ind_other: "أخرى",
    audit_form_ind_other_ph: "حدد صناعتك",
    audit_form_budget: "الميزانية التسويقية الشهرية",
    audit_form_bud_1: "أقل من 2,000 ريال سعودي",
    audit_form_bud_2: "2,000–5,000 ريال سعودي",
    audit_form_bud_3: "5,000–10,000 ريال سعودي",
    audit_form_bud_4: "أكثر من 10,000 ريال سعودي",
    audit_form_btn: "احصل على تدقيق عملي المجاني بالذكاء الاصطناعي",
    thank_you_title: "شكراً لك!",
    thank_you_body: "تم استلام طلب تدقيق أعمالك بالذكاء الاصطناعي. سيتواصل معك فريقنا خلال 24 ساعة.",
    thank_you_wa: "تحدث عبر واتساب",`;

// Insert into English dict
content = content.replace(/nav_home: "Home",/, "nav_home: \"Home\",\n" + enInsert);
// Insert into Arabic dict
content = content.replace(/nav_home: "الرئيسية",/, "nav_home: \"الرئيسية\",\n" + arInsert);

fs.writeFileSync(file, content);
console.log('Translations added!');
