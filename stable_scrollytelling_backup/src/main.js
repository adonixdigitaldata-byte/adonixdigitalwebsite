import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

/* ==========================================================================
   TRANSLATION ENGINE & DICTIONARY
   ========================================================================== */
const translations = {
  en: {
    loader_subtitle: "Initializing Digital Ecosystem...",
    nav_services: "Services",
    nav_ai: "AI Core",
    nav_results: "Results",
    nav_cases: "Case Studies",
    nav_why: "Why Us",
    nav_process: "Process",
    nav_cta: "Book Strategy Call",
    hero_badge: "Vision 2030 Digital Partner",
    hero_title: "Transform Your Business With AI & Digital Growth",
    hero_subheadline: "Helping Saudi businesses scale through Digital Marketing, AI Automation, SEO, Paid Advertising, and Growth Systems.",
    hero_cta_primary: "Book A Free Strategy Call",
    hero_cta_secondary: "View Success Stories",
    holo_leads_title: "Leads Generated",
    holo_this_month: "this month",
    holo_rev_title: "Revenue Scaled",
    holo_roi_title: "Avg 4.8x ROAS",
    holo_ai_title: "AI Automations",
    holo_efficiency: "Accuracy & Speed",
    services_tag: "Ecosystem",
    services_title: "Our Growth Services",
    services_subtitle: "A complete digital suite orbiting around AI execution and conversion rate optimization.",
    service_select_prompt: "Interactive Ecosystem",
    service_select_desc: "Hover or tap on the floating spheres in the digital core to view details of our specialized marketing & AI operations.",
    s_seo: "SEO & Organic Growth",
    s_ads: "Paid Acquisition (Google/Social)",
    s_design: "UX Design & Web Dev",
    s_automation: "AI Automations & Chatbots",
    s_agents: "AI Voice & Sales Agents",
    ai_tag: "The AI Core",
    ai_title: "AI That Works 24/7 To Grow Your Business",
    ai_desc: "Deploy advanced, custom-trained neural models that qualify leads, close deals, and run background processes automatically, removing human scaling limits.",
    ai_f1: "24/7 AI Chatbots & Multilingual Voice Agents",
    ai_f2: "Automated Lead Qualification & System Sync",
    ai_f3: "Dynamic Scheduling and Smart Follow-ups",
    terminal_title: "AI Core Live Console",
    results_tag: "Track Record",
    results_title: "Engineered For Performance",
    results_subtitle: "Hard metrics of revenue, leads, and systems deployed for premium enterprises across the GCC.",
    res_rev: "SAR Revenue Generated",
    res_leads: "Leads Generated",
    res_campaigns: "Successful Campaigns",
    res_retention: "Client Retention Rate",
    ind_tag: "Verticals",
    ind_title: "Tailored For Leading Sectors",
    ind_desc: "We design specific, regulatory-compliant AI workflows and high-converting performance systems for key growth industries driving Saudi Vision 2030.",
    ind_realestate: "Real Estate & Development",
    ind_healthcare: "Healthcare & Biotech",
    ind_government: "Government & Public Sector",
    ind_ecommerce: "E-commerce & Retail Brands",
    ind_hospitality: "Hospitality & Tourism",
    ind_finance: "Finance & Investment",
    ind_re_title: "Real Estate Growth Engines",
    ind_re_desc: "Connecting qualified premium property buyers with luxury developments using automated lead tracking and hyper-targeted advertising campaigns.",
    ind_re_stat_lbl: "Avg Lead Cost Reduction",
    cases_tag: "Case Studies",
    cases_title: "Proven Success Stories",
    cases_subtitle: "See how we took high-growth GCC companies to the next level of digital maturity.",
    case_1_tag: "Real Estate Enterprise",
    case_1_title: "Al-Nakheel Developments",
    case_1_desc: "Implemented AI Lead Qualification and automated multi-channel Google Search + Snapchat ads campaign for premium villas.",
    m_leads: "Lead Volume",
    m_roas: "Ads ROAS",
    case_2_tag: "E-Commerce Luxury",
    case_2_title: "Riyadh Oud & Perfumery",
    case_2_desc: "Built a hyper-optimized web checkout and integrated Meta Ads + TikTok Pixel automation with custom audience retargeting.",
    m_revenue: "Sales Revenue",
    m_cac: "Acquisition Cost",
    case_3_tag: "AI Automation",
    case_3_title: "Saudi Logistics Co.",
    case_3_desc: "Deployed multilingual AI Voice agents handling booking inquires, directly integrated with Salesforce CRM.",
    m_response: "Response Time",
    m_efficiency: "Booking Rate",
    why_tag: "Comparison",
    why_title: "The Growth Agency Paradigm Shift",
    why_subtitle: "Why elite brands choose an AI-integrated performance model over traditional marketing services.",
    why_col_trad: "Traditional Agency",
    why_col_ai: "Adonix AI Partner",
    why_trad_1: "Slow, human-limited turnaround (days/weeks)",
    why_trad_2: "Manual lead validation and spreadsheet exports",
    why_trad_3: "High operational overhead with rigid creative teams",
    why_trad_4: "Monthly static reporting templates with lagging data",
    why_ai_1: "Instant AI-supported execution (hours/minutes)",
    why_ai_2: "Automated lead calling & validation (under 1 minute)",
    why_ai_3: "Highly scalable, lean AI-driven creative workflows",
    why_ai_4: "Real-time live analytics console and system sync",
    test_tag: "Testimonials",
    test_title: "Trusted By Visionary Leaders",
    test_subtitle: "Hear from premium startup founders and C-Suite executives across the Riyadh business network.",
    t1_quote: '\"Adonix transformed our lead acquisition. Within 60 days of deploying their AI Lead Qualification system, our sales team\'s closing rate increased by 40% while ad costs dropped.\"',
    t1_name: "Eng. Khaled Al-Mutairi",
    t1_role: "VP of Marketing, Diriyah Estate",
    t2_quote: '\"Their 3D brand positioning and deep integration of Meta Ads APIs gave us an edge in Riyadh\'s competitive luxury retail market. Truly next-level engineering.\"',
    t2_name: "Sarah Al-Dosari",
    t2_role: "Founder, Aura Perfumes",
    proc_tag: "Playbook",
    proc_title: "Our Road To Dominance",
    proc_subtitle: "A five-step roadmap designed to systematically validate, construct, and scale GCC market leaders.",
    step1_title: "Discover",
    step1_desc: "Deep dive into current marketing performance, systems, and product-market fit metrics.",
    step2_title: "Strategize",
    step2_desc: "Create customized AI automation blueprints and target high-converting traffic channels.",
    step3_title: "Build",
    step3_desc: "Deploy custom landing pages, API-based tracking, and configure AI agent pipelines.",
    step4_title: "Optimize",
    step4_desc: "Perform rigorous A/B creative testing, audit server-side events, and train AI models.",
    step5_title: "Scale",
    step5_desc: "Aggressively scale advertising budgets and roll out company-wide workflow automations.",
    contact_tag: "Partner With Us",
    contact_title: "Ready To Lead The Future?",
    contact_sub: "Partner with Saudi Arabia's next-generation AI and digital growth agency. Secure your free audit call.",
    f_name: "Full Name / Company Name",
    f_email: "Work Email",
    f_phone: "Phone Number",
    f_service: "Primary Growth Goal",
    f_msg: "Project Requirements (Optional)",
    opt_select: "Select goal...",
    opt_1: "SEO & Paid Advertising Scaling",
    opt_2: "AI Conversational Agents Integration",
    opt_3: "Workflow Automation Consulting",
    opt_4: "Full Digital Growth Engine Deployment",
    submit_btn: "Book Your Free Growth Consultation",
    f_privacy: "Privacy Policy",
    f_terms: "Terms of Service"
  },
  ar: {
    loader_subtitle: "جاري تهيئة النظام الرقمي...",
    nav_services: "خدماتنا",
    nav_ai: "قلب الذكاء الاصطناعي",
    nav_results: "النتائج",
    nav_cases: "دراسات الحالة",
    nav_why: "لماذا نحن",
    nav_process: "خطوات العمل",
    nav_cta: "احجز استشارة مجانية",
    hero_badge: "شريك التحول الرقمي لرؤية 2030",
    hero_title: "ضاعف نمو أعمالك بالذكاء الاصطناعي والحلول الرقمية",
    hero_subheadline: "نساعد الشركات السعودية الكبرى والناشئة على التوسع السريع من خلال التسويق الرقمي المتقدم، وأتمتة العمليات، وأنظمة النمو الذكي.",
    hero_cta_primary: "احجز مكالمة استشارية مجانية",
    hero_cta_secondary: "شاهد قصص النجاح",
    holo_leads_title: "العملاء المحتملين الجدد",
    holo_this_month: "هذا الشهر",
    holo_rev_title: "الإيرادات المحققة",
    holo_roi_title: "معدل عائد إعلاني 4.8 ضعف",
    holo_ai_title: "عمليات الأتمتة بالذكاء الاصطناعي",
    holo_efficiency: "الدقة والسرعة الفائقة",
    services_tag: "منظومتنا الرقمية",
    services_title: "خدمات النمو المتكاملة",
    services_subtitle: "حلول رقمية متكاملة تتمحور حول تقنيات الذكاء الاصطناعي وتحسين معدلات التحويل.",
    service_select_prompt: "المنظومة التفاعلية",
    service_select_desc: "قم بتمرير المؤشر أو النقر على المجسمات ثلاثية الأبعاد في قلب النظام لاستعراض تفاصيل عملياتنا التقنية والتسويقية المتخصصة.",
    s_seo: "السيو والنمو العضوي",
    s_ads: "الحملات الإعلانية المدفوعة",
    s_design: "تصميم الواجهات وتطوير المواقع",
    s_automation: "أنظمة الأتمتة والمساعد الرقمي",
    s_agents: "وكلاء المبيعات والصوت الذكي",
    ai_tag: "قلب الذكاء الاصطناعي",
    ai_title: "ذكاء اصطناعي يعمل 24/7 لخدمة وتوسيع أعمالك",
    ai_desc: "نشر نماذج عصبية متطورة ومدربة خصيصاً لتأهيل العملاء، وإتمام الصفقات، وإدارة العمليات تلقائياً دون قيود تشغيلية بشرية.",
    ai_f1: "وكلاء صوت ومساعدين رقميين متعددي اللغات على مدار الساعة",
    ai_f2: "تأهيل العملاء المحتملين وربطهم مباشرة مع أنظمة إدارة العملاء CRM",
    ai_f3: "تنسيق مواعيد ذكي ومتابعات آلية فورية للعملاء",
    terminal_title: "لوحة التحكم الحية للذكاء الاصطناعي",
    results_tag: "سجل الإنجازات",
    results_title: "هندسة أداء فائقة الدقة",
    results_subtitle: "أرقام فعلية وموثقة للإيرادات والعملاء الجدد التي حققناها للشركات الكبرى في المملكة والخليج.",
    res_rev: "ريال سعودي إيرادات للعملاء",
    res_leads: "عملاء محتملين مستقطبين",
    res_campaigns: "حملة إعلانية ناجحة",
    res_retention: "معدل الاحتفاظ بالعملاء",
    ind_tag: "القطاعات المستهدفة",
    ind_title: "حلول مخصصة لقطاعات النمو الواعدة",
    ind_desc: "نصمم مسارات عمل ذكية وحملات تسويقية متوافقة مع الأنظمة المحلية لدعم القطاعات الرئيسية المحركة لرؤية السعودية 2030.",
    ind_realestate: "العقارات والتطوير العقاري",
    ind_healthcare: "الرعاية الصحية والتقنية الحيوية",
    ind_government: "القطاع الحكومي والعام",
    ind_ecommerce: "التجارة الإلكترونية والتجزئة",
    ind_hospitality: "الضيافة والسياحة والفنادق",
    ind_finance: "القطاع المالي والاستثماري",
    ind_re_title: "محركات النمو العقاري",
    ind_re_desc: "ربط مشتري العقارات الفاخرة مباشرة مع المطورين العقاريين الكبار باستخدام استهداف إعلاني دقيق وتصفية فورية للعملاء عبر الذكاء الاصطناعي.",
    ind_re_stat_lbl: "متوسط خفض تكلفة العميل المحتمل",
    cases_tag: "قصص النجاح",
    cases_title: "مشاريع حققت الريادة",
    cases_subtitle: "اكتشف كيف نقلنا أعمال شركائنا في الخليج إلى مستويات جديدة من النضج الرقمي والأرباح.",
    case_1_tag: "قطاع التطوير العقاري",
    case_1_title: "النخيل للتطوير العقاري",
    case_1_desc: "إطلاق نظام تأهيل عملاء بالذكاء الاصطناعي مع تشغيل حملات مكثفة على جوجل وسناب شات للفلل الفاخرة.",
    m_leads: "حجم العملاء الجدد",
    m_roas: "العائد على الإعلانات",
    case_2_tag: "التجارة الإلكترونية الفاخرة",
    case_2_title: "رياض للعود والعطور",
    case_2_desc: "بناء بوابة شراء فائقة السرعة مع ربط وحدات أتمتة إعلانات ميتا وتيك توك ببيانات متقدمة للمشترين.",
    m_revenue: "عوائد المبيعات",
    m_cac: "تكلفة الاستحواذ",
    case_3_tag: "أتمتة الأنظمة الذكية",
    case_3_title: "الشركة السعودية للخدمات اللوجستية",
    case_3_desc: "تفعيل وكلاء صوت ذكاء اصطناعي للرد على طلبات الشحن وتحديثها لحظياً في نظام Salesforce.",
    m_response: "سرعة الاستجابة",
    m_efficiency: "معدل الحجز المؤكد",
    why_tag: "المقارنة الحاسمة",
    why_title: "النقلة النوعية في منظومة نمو أعمالك",
    why_subtitle: "لماذا تختار الشركات الرائدة نموذج الأداء المدعوم بالذكاء الاصطناعي مقارنة بالوكالات التقليدية.",
    why_col_trad: "الوكالة التقليدية",
    why_col_ai: "شريك أدونيكس الذكي",
    why_trad_1: "تنفيذ بطيء مقيد بالقدرات البشرية (أيام/أسابيع)",
    why_trad_2: "فرز يدوي للعملاء ومتابعات متأخرة عبر الجداول المكتوبة",
    why_trad_3: "تكاليف تشغيلية مرتفعة مع فرق عمل تقليدية غير مرنة",
    why_trad_4: "تقارير شهرية جامدة ببيانات قديمة وغير تفاعلية",
    why_ai_1: "تنفيذ فوري مدعوم بالذكاء الاصطناعي (دقائق/ساعات)",
    why_ai_2: "اتصال آلي فوري وتأهيل للعميل في أقل من دقيقة واحدة",
    why_ai_3: "آليات عمل إبداعية ذكية ومرنة جداً بأقل التكاليف التشغيلية",
    why_ai_4: "لوحة تحكم حية ومباشرة لمراقبة الأرقام لحظة بلحظة",
    test_tag: "آراء شركائنا",
    test_title: "ثقة قادة الأعمال",
    test_subtitle: "ماذا يقول شركاؤنا من الرؤساء التنفيذيين ورواد الأعمال في مجتمع أعمال الرياض والخليج.",
    t1_quote: '\"أحدثت أدونيكس ثورة في طريقة استقطاب عملائنا. في غضون 60 يوماً فقط من تشغيل نظام التأهيل بالذكاء الاصطناعي، ارتفع معدل إغلاق المبيعات لدينا بنسبة 40% وانخفضت تكلفة الإعلانات.\"',
    t1_name: "المهندس خالد المطيري",
    t1_role: "نائب رئيس التسويق، عقارات الدرعية",
    t2_quote: '\"مكانة علامتنا التجارية وتكامل البيانات المتقدم عبر قنوات إعلانات ميتا منحنا تفوقاً حقيقياً في سوق العطور الفاخرة بالرياض. احترافية عالية جداً.\"',
    t2_name: "سارة الدوسري",
    t2_role: "مؤسسة عطور أورا",
    proc_tag: "دليل العمل",
    proc_title: "طريقنا الثابت نحو الريادة",
    proc_subtitle: "منهجية عمل خماسية الخطوات مصممة لتقييم وتأسيس وتوسيع نطاق أعمال الشركات في منطقة الخليج.",
    step1_title: "الاستكشاف",
    step1_desc: "دراسة دقيقة لأداء الأنظمة التسويقية الحالية وتحديد فجوات الأداء وملاءمة المنتج للسوق.",
    step2_title: "التخطيط والابتكار",
    step2_desc: "رسم خرائط الأتمتة المخصصة وصياغة خطط استهداف القنوات الإعلانية ذات التحويل العالي.",
    step3_title: "البناء والتكامل",
    step3_desc: "تطوير واجهات الهبوط الذكية، وتفعيل وحدات التتبع وتهيئة مسارات عملاء الذكاء الاصطناعي.",
    step4_title: "التحسين المستمر",
    step4_desc: "إجراء اختبارات مقارنة مكثفة للواجهات والمحتوى الإعلاني وتدريب وتطوير النماذج الذكية.",
    step5_title: "التوسع الإستراتيجي",
    step5_desc: "مضاعفة الميزانيات التسويقية الناجحة وتعميم أدوات أتمتة العمليات لكافة أقسام الشركة.",
    contact_tag: "ابدأ رحلتك معنا",
    contact_title: "هل أنت مستعد لقيادة المستقبل؟",
    contact_sub: "كن شريكاً لوكالة الجيل القادم للنمو الذكي والتحول الرقمي في المملكة العربية السعودية.",
    f_name: "الاسم الكامل / اسم الشركة",
    f_email: "البريد الإلكتروني للعمل",
    f_phone: "رقم الجوال",
    f_service: "الهدف الرئيسي للنمو",
    f_msg: "متطلبات المشروع (اختياري)",
    opt_select: "اختر الهدف...",
    opt_1: "مضاعفة حملات الإعلانات وجذب المشترين",
    opt_2: "تكامل وكلاء المبيعات والمساعدين الذكيين",
    opt_3: "استشارات أتمتة وتطوير مسارات العمل للشركة",
    opt_4: "تشغيل محرك النمو الرقمي الشامل للمؤسسة",
    submit_btn: "احجز استشارتك المجانية للنمو الآن",
    f_privacy: "سياسة الخصوصية",
    f_terms: "شروط الخدمة"
  }
};

let currentLang = "en";

function setLanguage(lang) {
  currentLang = lang;
  const htmlEl = document.documentElement;
  htmlEl.setAttribute("lang", lang);
  htmlEl.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  
  // Set fonts based on language
  if (lang === "ar") {
    htmlEl.style.setProperty("--font-family", "var(--font-ar-primary)");
    htmlEl.style.setProperty("--font-display", "var(--font-ar-display)");
    document.getElementById("lang-toggle").innerText = "English";
  } else {
    htmlEl.style.setProperty("--font-family", "var(--font-en-primary)");
    htmlEl.style.setProperty("--font-display", "var(--font-en-display)");
    document.getElementById("lang-toggle").innerText = "العربية";
  }

  // Update DOM translation elements
  const translateElements = document.querySelectorAll("[data-translate]");
  translateElements.forEach((el) => {
    const key = el.getAttribute("data-translate");
    if (translations[lang][key]) {
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.placeholder = translations[lang][key];
      } else if (el.tagName === "SELECT") {
        // Handle select default prompt
      } else {
        // Support buttons that might have child span structures, or keep it pure text
        const childArrow = el.querySelector(".btn-arrow");
        if (childArrow) {
          el.childNodes[0].textContent = translations[lang][key] + " ";
        } else {
          el.innerText = translations[lang][key];
        }
      }
    }
  });

  // Re-translate placeholder options in select
  const goalSelect = document.getElementById("form-service");
  if (goalSelect) {
    goalSelect.options[0].text = translations[lang].opt_select;
    goalSelect.options[1].text = translations[lang].opt_1;
    goalSelect.options[2].text = translations[lang].opt_2;
    goalSelect.options[3].text = translations[lang].opt_3;
    goalSelect.options[4].text = translations[lang].opt_4;
  }
}

// Language Toggle Action
document.getElementById("lang-toggle").addEventListener("click", () => {
  const nextLang = currentLang === "en" ? "ar" : "en";
  gsap.to("body", {
    opacity: 0,
    duration: 0.25,
    onComplete: () => {
      setLanguage(nextLang);
      gsap.to("body", { 
        opacity: 1, 
        duration: 0.25,
        onComplete: () => ScrollTrigger.refresh()
      });
    }
  });
});

/* ==========================================================================
   SMOOTH SCROLL (LENIS)
   ========================================================================== */
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
  touchMultiplier: 1.5,
});

// Update ScrollTrigger on Lenis Scroll
lenis.on('scroll', ScrollTrigger.update);

// Setup ScrollTrigger Proxy for Lenis
ScrollTrigger.scrollerProxy(document.body, {
  scrollTop(value) {
    if (arguments.length) {
      lenis.scrollTo(value, { immediate: true });
    }
    return lenis.scroll;
  },
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  }
});

// Integrate Lenis raf with GSAP Ticker
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

/* ==========================================================================
   THREE.JS SCENE CREATION (WebGL)
   ========================================================================== */
const canvas = document.getElementById("webgl-canvas");
const scene = new THREE.Scene();

// Camera setup - Changed to PerspectiveCamera for 3D depth
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(0, 0, 5);

// Renderer setup
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
  alpha: true,
  powerPreference: "high-performance"
});
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
renderer.setSize(window.innerWidth, window.innerHeight);

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
scene.add(ambientLight);
const pointLight = new THREE.PointLight(0x59F3FF, 1.5, 20);
pointLight.position.set(2, 2, 2);
scene.add(pointLight);

// 3D Objects Group
const sceneGroup = new THREE.Group();
scene.add(sceneGroup);

// 1. Hero Core Sphere
const sphereGeometry = new THREE.IcosahedronGeometry(1.2, 3);
const sphereMaterial = new THREE.MeshStandardMaterial({
  color: 0x4DA6FF,
  emissive: 0x4DA6FF,
  emissiveIntensity: 0.8,
  wireframe: true,
  transparent: true,
  opacity: 1
});
const coreSphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sceneGroup.add(coreSphere);

// 2. Neural Network Particles (Initially hidden inside sphere)
const particleCount = 400;
const particleGeometry = new THREE.BufferGeometry();
const particlePositions = new Float32Array(particleCount * 3);
const originalParticlePositions = new Float32Array(particleCount * 3);

// For the lines connecting particles
const linePositions = [];

for(let i = 0; i < particleCount; i++) {
  // Random points in a sphere radius
  const r = 2.5 * Math.cbrt(Math.random());
  const theta = Math.random() * 2 * Math.PI;
  const phi = Math.acos(2 * Math.random() - 1);
  
  const x = r * Math.sin(phi) * Math.cos(theta);
  const y = r * Math.sin(phi) * Math.sin(theta);
  const z = r * Math.cos(phi);
  
  particlePositions[i*3] = x;
  particlePositions[i*3+1] = y;
  particlePositions[i*3+2] = z;
  
  originalParticlePositions[i*3] = x;
  originalParticlePositions[i*3+1] = y;
  originalParticlePositions[i*3+2] = z;
}

// Create connections between close particles
for(let i = 0; i < particleCount; i++) {
  for(let j = i + 1; j < particleCount; j++) {
    const dx = particlePositions[i*3] - particlePositions[j*3];
    const dy = particlePositions[i*3+1] - particlePositions[j*3+1];
    const dz = particlePositions[i*3+2] - particlePositions[j*3+2];
    const distSq = dx*dx + dy*dy + dz*dz;
    
    if (distSq < 0.6) { // connect if close enough
      linePositions.push(
        particlePositions[i*3], particlePositions[i*3+1], particlePositions[i*3+2],
        particlePositions[j*3], particlePositions[j*3+1], particlePositions[j*3+2]
      );
    }
  }
}

particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
const particleMaterial = new THREE.PointsMaterial({
  color: 0x59F3FF,
  size: 0.05,
  transparent: true,
  opacity: 0,
  blending: THREE.AdditiveBlending
});
const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
particleSystem.scale.set(0.1, 0.1, 0.1); // Start small inside sphere

const lineGeometry = new THREE.BufferGeometry();
lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
const lineMaterial = new THREE.LineBasicMaterial({
  color: 0x4DA6FF,
  transparent: true,
  opacity: 0,
  blending: THREE.AdditiveBlending
});
const lineSystem = new THREE.LineSegments(lineGeometry, lineMaterial);
particleSystem.add(lineSystem);

sceneGroup.add(particleSystem);


// --- Custom WebGL Fluid Shader (Axiom Style) ---
const uniforms = {
  u_time: { value: 0.0 },
  u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
  u_scroll: { value: 0.0 }
};

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float u_time;
  uniform vec2 u_resolution;
  uniform float u_scroll;
  varying vec2 vUv;

  // Generic 2D Hash
  float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  // 2D Noise
  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), f.x),
               mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
  }

  // FBM (Fractal Brownian Motion)
  float fbm(vec2 p) {
    float f = 0.0;
    float w = 0.5;
    for(int i = 0; i < 5; i++) {
      f += w * noise(p);
      p *= 2.0;
      w *= 0.5;
    }
    return f;
  }

  void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    st.x *= u_resolution.x / u_resolution.y;

    // Time and Scroll influence
    float t = u_time * 0.2 + u_scroll * 2.0;

    // Domain warping
    vec2 q = vec2(0.);
    q.x = fbm(st + 0.00 * t);
    q.y = fbm(st + vec2(1.0));

    vec2 r = vec2(0.);
    r.x = fbm(st + 1.0 * q + vec2(1.7, 9.2) + 0.15 * t);
    r.y = fbm(st + 1.0 * q + vec2(8.3, 2.8) + 0.126 * t);

    float f = fbm(st + r);

    // Colors mimicking dark matter / liquid aurora
    vec3 color1 = vec3(0.02, 0.02, 0.03); // Deep space dark
    vec3 color2 = vec3(0.1, 0.2, 0.4);    // Rich blue
    vec3 color3 = vec3(0.0, 0.0, 0.0);    // Pitch black
    vec3 color4 = vec3(0.2, 0.15, 0.05);  // Subtle gold

    vec3 color = mix(color1, color2, clamp((f * f) * 4.0, 0.0, 1.0));
    color = mix(color, color3, clamp(length(q), 0.0, 1.0));
    color = mix(color, color4, clamp(length(r.x), 0.0, 1.0));

    // Vignette
    vec2 center = vUv - 0.5;
    float vignette = 1.0 - smoothstep(0.4, 1.0, length(center));
    color *= vignette;

    gl_FragColor = vec4(color, 1.0);
  }
`;

const shaderMaterial = new THREE.ShaderMaterial({
  vertexShader,
  fragmentShader,
  uniforms,
  depthWrite: false,
  depthTest: false
});

const planeGeometry = new THREE.PlaneGeometry(2, 2);
const backgroundMesh = new THREE.Mesh(planeGeometry, shaderMaterial);
// We use a separate scene or just scale it massive for Perspective camera to simulate orthographic bg
backgroundMesh.position.z = -10;
backgroundMesh.scale.set(20, 20, 1);
scene.add(backgroundMesh);


/* ==========================================================================
   SCROLL ANIMATION & TIMELINE (GSAP + ScrollTrigger)
   ========================================================================== */

// Section Fade Ins
const sections = document.querySelectorAll('.scroll-section');
sections.forEach((sec, idx) => {
  if (idx === 0) return; 
  gsap.fromTo(sec.querySelector('.container'),
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sec,
        start: "top 75%",
        end: "bottom 25%", // keep it active until the bottom of the section passes
        toggleActions: "play reverse play reverse"
      }
    }
  );
});

// Main 3D Scroll Timeline
const main3DTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".scroll-container",
    start: "top top",
    end: "bottom bottom",
    scrub: true, // Use true instead of numeric for tighter lenis sync
  }
});

// Sync shader uniform to scroll
main3DTimeline.to(uniforms.u_scroll, {
  value: 10.0,
  ease: "none"
}, 0);

// Chapter 2 Transition: Sphere explodes into Network
main3DTimeline.to(coreSphere.scale, {
  x: 4, y: 4, z: 4,
  ease: "power1.inOut"
}, 0)
.to(coreSphere.material, {
  opacity: 0,
  ease: "power1.inOut"
}, 0)
.to(particleSystem.scale, {
  x: 2, y: 2, z: 2,
  ease: "power2.out"
}, 0.05)
.to(particleSystem.material, {
  opacity: 1,
  ease: "power1.inOut"
}, 0.05)
.to(lineMaterial, {
  opacity: 0.3,
  ease: "power1.inOut"
}, 0.05);

// Chapter 3-4 Transition: Move camera through network
main3DTimeline.to(camera.position, {
  z: 1.5,
  ease: "sine.inOut"
}, 0.2)
.to(sceneGroup.rotation, {
  y: Math.PI * 3,
  ease: "none"
}, 0.1);

// Chapter 5 Transition: Converging
main3DTimeline.to(camera.position, {
  z: 6,
  ease: "sine.inOut"
}, 0.6)
.to(particleSystem.scale, {
  x: 0.8, y: 0.8, z: 0.8,
  ease: "power2.inOut"
}, 0.7);

// Trigger results counters & bars animation when reaching results section
ScrollTrigger.create({
  trigger: "#results",
  start: "top 50%",
  onEnter: () => {
    document.getElementById("results").classList.add("active-anim");
    animateCounters();
  }
});

/* ==========================================================================
   INTERACTIVE DETAILS
   ========================================================================== */

// Counters Animation
function animateCounters() {
  const counters = document.querySelectorAll(".counter");
  counters.forEach((cnt) => {
    const target = parseFloat(cnt.getAttribute("data-target"));
    const isLeads = cnt.closest("#holo-leads") || cnt.innerText.includes(",");
    
    gsap.fromTo(cnt, 
      { textContent: 0 },
      {
        textContent: target,
        duration: 2,
        ease: "power2.out",
        snap: { textContent: 1 },
        onUpdate: function () {
          // Format with commas or SAR
          let val = Math.floor(this.targets()[0].textContent);
          if (cnt.id === "holo-leads" || isLeads) {
            cnt.innerText = val.toLocaleString();
          } else if (cnt.closest("#holo-revenue")) {
            cnt.innerText = val + "M+ SAR";
          } else if (cnt.closest("#holo-ai")) {
            cnt.innerText = val + "%";
          } else if (cnt.closest(".result-card")) {
            if (target === 500) {
              cnt.innerText = val;
            } else if (target === 10) {
              cnt.innerText = val;
            } else if (target === 300) {
              cnt.innerText = val;
            } else {
              cnt.innerText = val;
            }
          }
        }
      }
    );
  });
}
// Trigger early counts for Hero loading
animateCounters();

// Cursor Follow Animation
const cursor = document.getElementById("custom-cursor");
const cursorRing = document.getElementById("custom-cursor-ring");

window.addEventListener("mousemove", (e) => {
  gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.05 });
  gsap.to(cursorRing, { x: e.clientX, y: e.clientY, duration: 0.15 });
});

// Cursor Hover Effects
const interactiveEls = document.querySelectorAll("a, button, select, input, textarea, .service-item, .ind-btn");
interactiveEls.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursor.classList.add("hover");
    cursorRing.classList.add("hover");
  });
  el.addEventListener("mouseleave", () => {
    cursor.classList.remove("hover");
    cursorRing.classList.remove("hover");
  });
});

// Mobile Menu Navigation
const mobileToggle = document.getElementById("mobile-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-nav-links a");

mobileToggle.addEventListener("click", () => {
  mobileToggle.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileToggle.classList.remove("active");
    mobileMenu.classList.remove("active");
  });
});

// Parallax (Tilt Effect) for multiple cards
const parallaxCards = document.querySelectorAll(".test-card, .result-card, .service-item");
parallaxCards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const xc = rect.width / 2;
    const yc = rect.height / 2;
    
    const tiltX = (yc - y) / 10;
    const tiltY = (x - xc) / 10;
    
    gsap.to(card, {
      rotateX: tiltX,
      rotateY: tiltY,
      duration: 0.3,
      ease: "power2.out"
    });
  });

  card.addEventListener("mouseleave", () => {
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: "power2.out"
    });
  });
});

// Live AI Console Logs terminal
const terminalLogs = document.getElementById("terminal-logs");
const logMessages = [
  { text: "ADONIX CORE // Initializing connection to KSA regional nodes...", type: "system" },
  { text: "Status Check: Riyadh Data Server [ONLINE] ping 4ms", type: "cmd" },
  { text: "Status Check: AI Orchestrator [ACTIVE] Node v3.5", type: "cmd" },
  { text: "System ready. Listening for pipeline triggers...", type: "system" },
  { text: ">> INCOMING TRANSMISSION: lead_qualification_pipeline", type: "alert" },
  { text: "Analyzing query from: CEO, Al-Ajlan Holding Group", type: "system" },
  { text: "Lead data extracted. Context: CRM migration and SEO automation", type: "cmd" },
  { text: "AI Decision: Auto-qualified. Priority level: ENTERPRISE [98.4% Confidence]", type: "alert" },
  { text: "Executing lead sync webhook to Salesforce CRM... SUCCESS.", type: "system" },
  { text: "Scheduling AI voice follow-up appointment call... Triggered.", type: "system" },
  { text: ">> PIPELINE SUCCESS: Lead qualified & processed in 12.8s", type: "alert" },
  { text: "Optimization module check: Server-side tracking GTM active", type: "cmd" },
  { text: "Ad-spend optimization engine running: Target CPA reduced by 31%", type: "system" }
];

let logIndex = 0;
function appendTerminalLog() {
  if (!terminalLogs) return;
  
  const log = logMessages[logIndex];
  const p = document.createElement("p");
  p.className = `terminal-line ${log.type}`;
  p.innerText = `[${new Date().toLocaleTimeString()}] ${log.text}`;
  
  terminalLogs.appendChild(p);
  terminalLogs.scrollTop = terminalLogs.scrollHeight;
  
  logIndex = (logIndex + 1) % logMessages.length;
}

// Tick terminal logs
setInterval(appendTerminalLog, 3000);
// Add first few instantly
for (let i = 0; i < 4; i++) {
  appendTerminalLog();
}

// Services panel interaction
const serviceDetails = [
  {
    title: { en: "SEO & Organic Growth", ar: "السيو والنمو العضوي" },
    desc: { en: "Dominate search engine results in the GCC. We combine advanced semantic research, structural crawls, and premium link acquisitions to build stable organic search pipelines.", ar: "تصدر نتائج محركات البحث في الخليج. ندمج بين الكلمات البحثية المتقدمة، تحسين سرعة الأكواد، وبناء الروابط القوية لخلق تدفق مستدام للمشترين." },
    icon: "🔍",
    metrics: [
      { val: "+320%", lbl: { en: "Traffic Growth", ar: "نمو الزوار" } },
      { val: "100%", lbl: { en: "Ethical SEO", ar: "سيو متوافق" } }
    ]
  },
  {
    title: { en: "Paid Acquisition (Google/Social)", ar: "الحملات الإعلانية المدفوعة" },
    desc: { en: "Hyper-focused Google Search, YouTube, Meta, TikTok, and Snapchat campaigns targeted to regional demographics. Engineered for ROI, scale, and customer acquisition efficiency.", ar: "حملات فائقة الاستهداف على جوجل، يوتيوب، ميتا، تيك توك وسناب شات مصممة للوصول لشرائح المشترين المناسبة بالمنطقة. نركز على أعلى عائد بأقل كلفة." },
    icon: "📊",
    metrics: [
      { val: "4.8x", lbl: { en: "Average ROAS", ar: "متوسط العائد الإعلاني" } },
      { val: "500M+ SAR", lbl: { en: "Managed Budget", ar: "ميزانيات مدارة" } }
    ]
  },
  {
    title: { en: "UX Design & Web Dev", ar: "تصميم الواجهات وتطوير المواقع" },
    desc: { en: "Stunning, high-performance web applications built for premium GCC brands. We combine glassmorphism, WebGL interactive flows, and SEO structural engineering.", ar: "تطوير تطبيقات ومواقع ويب متميزة وفائقة السرعة للعلامات الرائدة بالخليج. ندمج المؤثرات ثلاثية الأبعاد مع هندسة الأكواد السريعة المتوافقة مع محركات البحث." },
    icon: "💻",
    metrics: [
      { val: "< 1.2s", lbl: { en: "Load Time", ar: "سرعة التحميل" } },
      { val: "99.9%", lbl: { en: "Uptime", ar: "استقرار التشغيل" } }
    ]
  },
  {
    title: { en: "AI Automations & Chatbots", ar: "أنظمة الأتمتة والمساعد الرقمي" },
    desc: { en: "Automate core operations, customer handling, and CRM entries. Deploy custom NLP bots qualified to answer complex enterprise requests in English and Arabic.", ar: "أتمتة العمليات الأساسية للمؤسسة، والرد الفوري على العملاء. تفعيل مساعدين ذكيين مدربين على الإجابة على استفسارات العملاء بدقة باللغتين العربية والإنجليزية." },
    icon: "🤖",
    metrics: [
      { val: "24/7", lbl: { en: "Availability", ar: "متاح على مدار الساعة" } },
      { val: "90%", lbl: { en: "Cost Reduction", ar: "توفير التكلفة التشغيلية" } }
    ]
  },
  {
    title: { en: "AI Voice & Sales Agents", ar: "وكلاء المبيعات والصوت الذكي" },
    desc: { en: "Intelligent voice agents mimicking human tones, trained to handle client qualification, outbound calls, and system appointments automatically and securely.", ar: "وكلاء صوت ذكي يحاكون نبرة صوت طبيعية، مدربين على تأهيل المتصلين الجدد وجدولة المواعيد مع فريق مبيعاتك تلقائياً وبأمان تام." },
    icon: "📞",
    metrics: [
      { val: "< 1s", lbl: { en: "Response Delay", ar: "تأخير الاستجابة" } },
      { val: "Arabic/English", lbl: { en: "Bilingual Supported", ar: "دعم كامل للغتين" } }
    ]
  }
];

const serviceItems = document.querySelectorAll(".service-item");
const displayTitle = document.getElementById("service-detail-title");
const displayDesc = document.getElementById("service-detail-desc");
const displayIcon = document.getElementById("service-detail-icon");
const displayMetrics = document.getElementById("service-detail-metrics");

serviceItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Remove active class
    serviceItems.forEach((i) => i.classList.remove("active"));
    item.classList.add("active");

    const index = parseInt(item.getAttribute("data-index"));
    const data = serviceDetails[index];

    // Glow effect trigger in ThreeJS (change light colors or pulse core)
    gsap.fromTo(aiCoreGroup.rotation, { y: aiCoreGroup.rotation.y }, { y: aiCoreGroup.rotation.y + Math.PI / 2, duration: 0.8 });
    
    // Animate HTML text update
    gsap.to([displayTitle, displayDesc, displayMetrics], {
      opacity: 0,
      y: -10,
      duration: 0.25,
      onComplete: () => {
        displayTitle.innerText = data.title[currentLang];
        displayDesc.innerText = data.desc[currentLang];
        displayIcon.innerText = data.icon;
        
        // Render dynamic metrics
        displayMetrics.innerHTML = data.metrics.map(m => `
          <div class="metric-item">
            <span class="metric-val">${m.val}</span>
            <span class="metric-lbl">${m.lbl[currentLang]}</span>
          </div>
        `).join('');

        gsap.to([displayTitle, displayDesc, displayMetrics], {
          opacity: 1,
          y: 0,
          duration: 0.25
        });
      }
    });
  });
});

// Industries panel interaction
const industryDetails = {
  realestate: {
    title: { en: "Real Estate Growth Engines", ar: "محركات النمو العقاري" },
    desc: { en: "Connecting qualified premium property buyers with luxury developments using automated lead tracking and hyper-targeted advertising campaigns.", ar: "ربط مشتري العقارات الفاخرة مباشرة مع المطورين العقاريين الكبار باستخدام استهداف إعلاني دقيق وتصفية فورية للعملاء عبر الذكاء الاصطناعي." },
    statVal: "-42%",
    statLbl: { en: "Avg Lead Cost Reduction", ar: "متوسط خفض تكلفة العميل" }
  },
  healthcare: {
    title: { en: "Healthcare & Biotech Scaling", ar: "توسيع الرعاية الطبية الحيوية" },
    desc: { en: "Managing HIPPA-compliant marketing funnels that route patient inquiries to top specialists, utilizing AI scheduling integrations to remove front-desk friction.", ar: "إدارة مسارات جذب المرضى وتوجيههم للأخصائيين مع تفعيل الحجز التلقائي بالذكاء الاصطناعي لرفع كفاءة العيادات والمشافي." },
    statVal: "+88%",
    statLbl: { en: "Appt Booking Rate", ar: "معدل تأكيد المواعيد" }
  },
  government: {
    title: { en: "Government Digital Services", ar: "الخدمات الحكومية الرقمية" },
    desc: { en: "Supporting Vision 2030 agency portals with secure, high-tech customer satisfaction funnels, digital dashboards, and modern layout optimization.", ar: "دعم الهيئات والمنصات الحكومية التابعة للرؤية بمسارات آمنة لاستطلاع رضا المواطنين، ولوحات معلومات ذكية وواجهات حديثة." },
    statVal: "100%",
    statLbl: { en: "Regulatory Compliance", ar: "التوافق مع الأنظمة الحكومية" }
  },
  ecommerce: {
    title: { en: "E-Commerce Luxury Scaling", ar: "التجارة الإلكترونية الفاخرة" },
    desc: { en: "Driving digital sales for elite GCC perfume, retail, and lifestyle brands via pixel server-side events, catalog syncs, and retention CRM flows.", ar: "مضاعفة مبيعات منتجات التجزئة الفاخرة بالخليج من خلال ربط الخوادم بالأكواد البرمجية مباشرة ومتابعات الرسائل المهيأة للشراء." },
    statVal: "6.2x",
    statLbl: { en: "Max Campaign ROAS", ar: "أعلى عائد حملة إعلانية" }
  },
  hospitality: {
    title: { en: "Hospitality & Tourism Scaling", ar: "السياحة والضيافة الفاخرة" },
    desc: { en: "Building premium booking experiences for boutique resorts and cultural assets, connecting high-net-worth individuals to global travel destinations.", ar: "بناء منصات حجز فاخرة للمنتجعات والمزارات الثقافية، وجذب السياح وأصحاب الملاءة المالية المرتفعة محلياً ودولياً." },
    statVal: "+150%",
    statLbl: { en: "Direct Hotel Bookings", ar: "الحجوزات الفندقية المباشرة" }
  },
  finance: {
    title: { en: "Finance & Fintech Growth", ar: "نمو قطاع الفينتك والاستثمار" },
    desc: { en: "Deploying high-security marketing funnels focused on lead acquisition for investment portals, asset managers, and financial startups across KSA.", ar: "بناء مسارات ترويجية آمنة عالية التشفير لاستقطاب المستثمرين لشركات التقنية المالية وإدارة الأصول في المملكة." },
    statVal: "-35%",
    statLbl: { en: "Acquisition Cost (CPA)", ar: "خفض تكلفة العميل المكتسب" }
  }
};

const indBtns = document.querySelectorAll(".ind-btn");
const indDisplayTitle = document.getElementById("ind-display-title");
const indDisplayDesc = document.getElementById("ind-display-desc");
const indDisplayVal = document.getElementById("ind-display-val");
const indDisplayLbl = document.querySelector(".stat-lbl");

indBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    indBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const key = btn.getAttribute("data-ind");
    const data = industryDetails[key];

    // Dynamic rotation of miniature industry worlds on click
    const indIndex = Array.from(indBtns).indexOf(btn);
    gsap.to(industryWorlds[indIndex].group.rotation, { y: industryWorlds[indIndex].group.rotation.y + Math.PI, duration: 1.2, ease: "power2.out" });

    // Animate text transition
    gsap.to(".industry-showcase-card", {
      opacity: 0,
      scale: 0.98,
      duration: 0.25,
      onComplete: () => {
        indDisplayTitle.innerText = data.title[currentLang];
        indDisplayDesc.innerText = data.desc[currentLang];
        indDisplayVal.innerText = data.statVal;
        indDisplayLbl.innerText = data.statLbl[currentLang];
        
        gsap.to(".industry-showcase-card", {
          opacity: 1,
          scale: 1,
          duration: 0.25
        });
      }
    });
  });
});

// Process steps progress indicator
ScrollTrigger.create({
  trigger: ".process-section",
  start: "top 40%",
  end: "bottom 60%",
  scrub: true,
  onUpdate: (self) => {
    // Fill the progress bar
    document.getElementById("process-progress-indicator").style.width = (self.progress * 100) + "%";
    
    // Light up step items sequentially based on percentage
    const stepCount = 5;
    for (let i = 1; i <= stepCount; i++) {
      const stepEl = document.getElementById(`step-${i}`);
      const triggerThreshold = (i - 1) / stepCount;
      if (self.progress >= triggerThreshold) {
        stepEl.classList.add("active");
      } else {
        stepEl.classList.remove("active");
      }
    }
  }
});

// Contact Form submission feedback animation
const contactForm = document.getElementById("contact-form");
const formFeedback = document.getElementById("form-feedback");
const submitBtn = document.getElementById("submit-btn");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    // Lock submit button
    submitBtn.disabled = true;
    formFeedback.className = "form-feedback-message";
    formFeedback.innerText = currentLang === "en" ? "Transmitting information securely..." : "جاري إرسال البيانات بشكل آمن...";
    
    // Simulate API pipeline transmission
    setTimeout(() => {
      formFeedback.className = "form-feedback-message success";
      formFeedback.innerText = currentLang === "en" 
        ? "✓ Strategic consult request received. Our AI voice agent will call you in 1 minute." 
        : "✓ تم استقبال طلب الاستشارة بنجاح. سيتصل بك المساعد الصوتي الذكي خلال دقيقة واحدة.";
      
      // Reset form
      contactForm.reset();
      submitBtn.disabled = false;
      
      // Remove success message after a while
      setTimeout(() => {
        formFeedback.innerText = "";
      }, 5000);
    }, 1500);
  });
}

// Update year in footer
document.getElementById("year").innerText = new Date().getFullYear();

/* ==========================================================================
   ANIMATION TICK LOOP
   ========================================================================== */
const clock = new THREE.Clock();

function tick() {
  const elapsedTime = clock.getElapsedTime();

  // Update Shader Uniforms
  uniforms.u_time.value = elapsedTime;
  
  // Continuous rotation for objects
  if (sceneGroup) {
    coreSphere.rotation.y = elapsedTime * 0.2;
    coreSphere.rotation.x = elapsedTime * 0.1;
    particleSystem.rotation.y = elapsedTime * 0.05;
  }

  // Render Scene
  renderer.render(scene, camera);

  // Next frame
  requestAnimationFrame(tick);
}

// Start ThreeJS loop
tick();

/* ==========================================================================
   WINDOW RESIZE HANDLER
   ========================================================================== */
window.addEventListener('resize', () => {
  // Update renderer
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Update shader resolution
  if (typeof uniforms !== 'undefined') {
    uniforms.u_resolution.value.set(window.innerWidth, window.innerHeight);
  }
  if (camera.type === 'PerspectiveCamera') {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  }
});

/* ==========================================================================
   CINEMATIC LOADER TIMER
   ========================================================================== */
const loader = document.getElementById("loader");
const loaderBar = document.getElementById("loader-bar");
const loaderPercent = document.getElementById("loader-percent");

let progressVal = 0;
const loaderInterval = setInterval(() => {
  progressVal += Math.floor(Math.random() * 8) + 2;
  if (progressVal >= 100) {
    progressVal = 100;
    clearInterval(loaderInterval);
    
    // Fade out loader
    setTimeout(() => {
      loader.classList.add("loaded");
    }, 300);
  }
  
  loaderBar.style.width = progressVal + "%";
  loaderPercent.innerText = progressVal + "%";
}, 35);
