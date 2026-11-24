import type { L } from "./i18n";

const l = (en: string, ar: string): L => ({ en, ar });

export const nav = [
  { key: "home", path: "", label: l("Home", "الرئيسية") },
  { key: "about", path: "about", label: l("About", "من نحن") },
  { key: "products", path: "products", label: l("Products", "المنتجات") },
  { key: "projects", path: "projects", label: l("Projects", "المشاريع") },
  { key: "certifications", path: "certifications", label: l("Certifications", "الشهادات") },
  { key: "contact", path: "contact", label: l("Contact", "تواصل معنا") },
] as const;

export const ui = {
  quote: l("Request a Quote", "اطلب عرض سعر"),
  whatsapp: l("WhatsApp", "واتساب"),
  menu: l("Menu", "القائمة"),
  close: l("Close", "إغلاق"),
  skip: l("Skip to content", "انتقل إلى المحتوى"),
  seeWork: l("See our work", "شاهد أعمالنا"),
  allProjects: l("All projects", "كل المشاريع"),
  requestSamples: l("Request samples", "اطلب عيّنات"),
  viewProducts: l("View products", "استعرض المنتجات"),
  learnMore: l("Learn more", "اعرف المزيد"),
  rights: l("© 2026 Vertex Investment Construction Company", "© 2026 شركة فيرتكس للاستثمار والإنشاءات"),
  langSwitch: l("العربية", "English"),
};

export const hero = {
  eyebrow: l("Riyadh · Saudi Arabia", "الرياض · المملكة العربية السعودية"),
  title1: l("Where Foundations Meet ", "حيث تلتقي الأساسات "),
  title2: l("Excellence.", "بالتميّز."),
  lead: l(
    "Premium commercial flooring: supply, installation and project coordination across Saudi Arabia, delivered with precision, durability and a clean handover.",
    "أرضيات تجارية فاخرة: توريد وتركيب وتنسيق مشاريع في أنحاء المملكة، بدقة عالية ومتانة وتسليم نظيف.",
  ),
  cta1: l("Explore Projects", "استعرض المشاريع"),
  cta2: l("Our Certifications", "شهاداتنا"),
  chips: [l("SPC", "SPC"), l("LVT", "LVT"), l("Carpet", "كاربت"), l("Wallcovering", "تكسية جدران"), l("Hand Tufted Rugs", "سجاد يدوي")],
};

export const stats = [
  { value: 3, label: l("ISO certifications", "شهادات ISO معتمدة") },
  { value: 5, label: l("Product categories", "فئات منتجات") },
  { text: "KSA", label: l("Supply & installation across the Kingdom", "توريد وتركيب في أنحاء المملكة") },
  { value: 1, label: l("Partner from prep to handover", "شريك واحد من التجهيز حتى التسليم") },
];

export const clients = [
  { file: "samaco", name: "Samaco Motors" },
  { file: "acc", name: "Arabian Construction Co." },
  { file: "altheyab", name: "Abdulmohsin Altheyab & Partners" },
  { file: "aandt", name: "A&T Group Interiors" },
  { file: "alec", name: "ALEC" },
  { file: "tdco", name: "Technical Dimensions Co." },
  { file: "diriyah", name: "Diriyah Company" },
  { file: "motive", name: "Motive" },
  { file: "mbs", name: "Mohammed Bin Salman Nonprofit City" },
  { file: "baumat", name: "Baumat" },
  { file: "pioneer", name: "Pioneer Projects" },
  { file: "inc", name: "INC KSA" },
  { file: "c1", name: "C1" },
];
export const clientsTitle = l("Trusted by leading developers, contractors and consultants", "موثوق من كبرى شركات التطوير والمقاولات والاستشارات");

export const about = {
  eyebrow: l("About Vertex", "عن فيرتكس"),
  title: l("A strong foundation under every project.", "أساس متين تحت كل مشروع."),
  body: l(
    "Vertex delivers premium flooring supply, installation and project coordination across Saudi Arabia: wallcoverings, carpets, rugs and LVT/SPC flooring, from material sourcing to final handover.",
    "تقدّم فيرتكس توريد وتركيب وتنسيق مشاريع الأرضيات الفاخرة في أنحاء المملكة العربية السعودية: تكسية جدران وسجاد وكاربت وأرضيات LVT/SPC، من توريد المواد حتى التسليم النهائي.",
  ),
  strengths: [
    { icon: "check", title: l("Quality control", "ضبط الجودة"), text: l("Quality control from start to handover.", "ضبط للجودة من البداية حتى التسليم.") },
    { icon: "shield", title: l("Strong coordination", "تنسيق قوي"), text: l("Close coordination with consultants and contractors.", "تنسيق وثيق مع الاستشاريين والمقاولين.") },
    { icon: "ruler", title: l("Premium + professional", "مواد فاخرة وتركيب احترافي"), text: l("Premium materials and professional installation.", "مواد فاخرة وتركيب احترافي.") },
  ],
  who: l("Vertex delivers premium flooring supply, installation, and project coordination across Saudi Arabia.", "تقدّم فيرتكس توريد وتركيب وتنسيق مشاريع الأرضيات الفاخرة في أنحاء المملكة العربية السعودية."),
  what: l("Supply and installation of premium materials including wallcoverings, carpets, rugs, and LVT/SPC flooring.", "توريد وتركيب مواد فاخرة تشمل تكسية الجدران والسجاد والكاربت وأرضيات LVT/SPC."),
  pillars3: [
    { icon: "box", title: l("Supply", "التوريد"), text: l("Materials sourcing & availability", "مصادر المواد وتوافرها") },
    { icon: "tool", title: l("Installation", "التركيب"), text: l("On-site execution & supervision", "التنفيذ والإشراف في الموقع") },
    { icon: "doc", title: l("Coordination", "التنسيق"), text: l("Submittals, approvals & handover", "المستندات والاعتمادات والتسليم") },
  ],
};

export const products = {
  eyebrow: l("Product range", "مجموعة المنتجات"),
  title: l("Complete flooring solutions.", "حلول أرضيات متكاملة."),
  intro: l("Core categories we supply and install across hospitality, commercial and corporate projects.", "فئات رئيسية نوفّرها ونركّبها في مشاريع الضيافة والمشاريع التجارية والمؤسسية."),
  items: [
    { key: "lvt", img: "range-0", n: "01", title: l("LVT / SPC Flooring", "أرضيات LVT / SPC"), text: l("Modern flooring with clean, consistent finishing.", "أرضيات عصرية بتشطيب نظيف ومتناسق."),
      long: l("Luxury vinyl tile and stone polymer composite flooring. Dimensionally stable, water-resistant and specified for high-traffic commercial interiors, with a consistent finish from room to room.", "أرضيات فينيل فاخرة وأرضيات SPC، ثابتة الأبعاد ومقاومة للماء ومناسبة للمساحات التجارية كثيفة الاستخدام، بتشطيب متناسق من غرفة إلى أخرى."),
      uses: [l("Offices & workspaces", "المكاتب ومساحات العمل"), l("Retail & showrooms", "المتاجر وصالات العرض"), l("Hospitality corridors", "ممرات الضيافة")] },
    { key: "roll", img: "range-1", n: "02", title: l("Carpet Roll", "سجاد رول"), text: l("Durable solutions for corridors and high-traffic areas.", "حلول متينة للممرات والمساحات كثيفة الاستخدام."),
      long: l("Broadloom carpet in rolls for continuous coverage, with acoustic comfort, warmth and durable performance in corridors, guest areas and large floor plates.", "سجاد رول لتغطية متصلة، مع راحة صوتية ودفء وأداء متين في الممرات ومناطق الضيوف والمساحات الكبيرة."),
      uses: [l("Hotels & guestrooms", "الفنادق والغرف"), l("Schools & education", "المدارس والتعليم"), l("Corridors & lobbies", "الممرات والردهات")] },
    { key: "tiles", img: "range-2", n: "03", title: l("Carpet Tiles", "بلاط كاربت"), text: l("Flexible modular layouts for offices and commercial spaces.", "تصاميم مرنة للمكاتب والمساحات التجارية."),
      long: l("Modular carpet tiles that allow flexible patterns, easy replacement and clean maintenance. A practical choice for open-plan offices and commercial fit-outs.", "بلاط كاربت معياري يتيح أنماطاً مرنة وسهولة في الاستبدال والصيانة، وخيار عملي للمكاتب المفتوحة والتجهيزات التجارية."),
      uses: [l("Open-plan offices", "المكاتب المفتوحة"), l("Meeting rooms", "قاعات الاجتماعات"), l("Corporate fit-outs", "التجهيزات المؤسسية")] },
    { key: "rugs", img: "range-3", n: "04", title: l("Hand Tufted Rugs", "سجاد يدوي"), text: l("Custom designs for hospitality and premium interiors.", "تصاميم مخصصة للضيافة والمساحات الفاخرة."),
      long: l("Custom hand-tufted rugs and carpets designed around the interior concept, with pattern, colour and scale tailored for lobbies, lounges and suites.", "سجاد وكاربت مصنوع يدوياً بتصميم مخصص يتماشى مع فكرة التصميم الداخلي، بنقش ولون ومقاس لكل ردهة وصالة وجناح."),
      uses: [l("Lobby lounges", "صالات الاستقبال"), l("Suites & guestrooms", "الأجنحة والغرف"), l("Premium interiors", "المساحات الفاخرة")] },
  ],
  wall: {
    title: l("Plus wall solutions", "بالإضافة إلى حلول الجدران"),
    text: l("Wallcoverings for hospitality, commercial and corporate spaces, supplied and installed with the same standard.", "تكسية جدران للضيافة والمساحات التجارية والمؤسسية، توريد وتركيب بنفس المعيار."),
  },
  partners: {
    title: l("International partners", "شركاء دوليون"),
    text: l("We collaborate with global and local partners to ensure premium materials, reliable delivery and consistent finishing quality.", "نتعاون مع شركاء عالميين ومحليين لضمان مواد فاخرة وتوريد موثوق وجودة تشطيب متناسقة."),
    points: [l("Approved partners & trusted brands", "شركاء معتمدون وعلامات موثوقة"), l("Consistent quality and material specifications", "جودة ومواصفات مواد متناسقة"), l("Support for submittals, samples & technical data", "دعم المستندات والعيّنات والبيانات الفنية")],
    logos: ["ege", "bartoline", "tarkett", "dongsheng", "enrich", "forbo", "armstrong"],
  },
};

export const process = {
  eyebrow: l("How we deliver", "كيف ننفّذ"),
  title: l("From preparation to final handover.", "من التجهيز إلى التسليم النهائي."),
  steps: [
    { icon: "box", title: l("Supply & sourcing", "التوريد والمصادر"), text: l("Approved materials from trusted global brands.", "مواد معتمدة من علامات عالمية موثوقة.") },
    { icon: "ruler", title: l("Preparation", "التجهيز"), text: l("Site measuring and subfloor readiness before a single tile.", "قياس الموقع وتجهيز الأرضية قبل بدء التركيب.") },
    { icon: "tool", title: l("Installation", "التركيب"), text: l("Professional crews, proper tools, clean execution.", "فرق محترفة وأدوات مناسبة وتنفيذ نظيف.") },
    { icon: "doc", title: l("Handover", "التسليم"), text: l("Quality checks, documentation and final handover.", "فحص الجودة والتوثيق والتسليم النهائي.") },
  ],
};

export type Project = {
  slug: string;
  tag: L;
  title: L;
  short: L;
  text: L;
  meta: { location: L; sector: L; scope: L; areas: L };
  highlight: L;
  hero: string;
  gallery: string[];
};

export const projects: Project[] = [
  {
    slug: "conrad-hotel",
    tag: l("Hospitality", "ضيافة"),
    title: l("Conrad Hotel, Laysen Valley, Riyadh", "فندق كونراد، وادي لايسن، الرياض"),
    short: l("Custom carpets and rugs for lobby lounge, guestrooms, corridors and suites.", "سجاد وأرضيات مخصصة لصالة الاستقبال والغرف والممرات والأجنحة."),
    text: l("A premium hospitality flooring package featuring custom carpets and rugs tailored for guestrooms, corridors, lounges, and suites. The project reflects refined detailing, contemporary pattern language, and seamless integration with the interior design concept.", "باقة أرضيات ضيافة فاخرة تضم سجاداً وكاربت مخصصاً للغرف والممرات والصالات والأجنحة. يعكس المشروع تفاصيل دقيقة ولغة نقوش معاصرة وتكاملاً سلساً مع فكرة التصميم الداخلي."),
    meta: {
      location: l("Riyadh, Saudi Arabia", "الرياض، المملكة العربية السعودية"),
      sector: l("Hospitality", "ضيافة"),
      scope: l("Supply & installation of carpet and custom rugs", "توريد وتركيب الكاربت والسجاد المخصص"),
      areas: l("Lobby lounge, guestrooms, corridors, suites", "صالة الاستقبال، الغرف، الممرات، الأجنحة"),
    },
    highlight: l("Thoughtfully crafted flooring solutions that enhance comfort, elevate aesthetics, and deliver a lasting first impression.", "حلول أرضيات مدروسة ترفع مستوى الراحة والجماليات وتترك انطباعاً أولاً لا يُنسى."),
    hero: "conrad-lounge",
    gallery: ["conrad-corridor", "conrad-corridor2", "conrad-bedroom", "conrad-rug", "conrad-suite"],
  },
  {
    slug: "cloud-spaces",
    tag: l("Commercial", "تجاري"),
    title: l("Cloud Spaces: Premium Workspace", "كلاود سبيسز: مساحة عمل متميزة"),
    short: l("LVT flooring and carpet across reception, meeting rooms, offices and corridors.", "أرضيات LVT وكاربت في الاستقبال وقاعات الاجتماعات والمكاتب والممرات."),
    text: l("A contemporary workspace project delivered with a balanced mix of LVT flooring and carpet solutions across client-facing and collaboration areas. The result reflects clean detailing, warm material tones, and a refined finish aligned with a modern workplace environment.", "مشروع مساحة عمل عصرية نُفّذ بمزيج متوازن من أرضيات LVT والكاربت في مناطق استقبال العملاء والتعاون. النتيجة تفاصيل نظيفة وألوان مواد دافئة وتشطيب راقٍ يتوافق مع بيئة العمل الحديثة."),
    meta: {
      location: l("Saudi Arabia", "المملكة العربية السعودية"),
      sector: l("Commercial", "تجاري"),
      scope: l("Supply & installation of LVT flooring and carpet", "توريد وتركيب أرضيات LVT والكاربت"),
      areas: l("Reception, meeting rooms, offices, corridors", "الاستقبال، قاعات الاجتماعات، المكاتب، الممرات"),
    },
    highlight: l("A cohesive flooring package designed to support daily functionality while elevating the workplace experience.", "باقة أرضيات متناسقة تدعم الاستخدام اليومي وتُعلي من تجربة بيئة العمل."),
    hero: "cloud-main",
    gallery: ["cloud-corridor", "cloud-meeting", "cloud-lobby", "cloud-carpet"],
  },
  {
    slug: "misk-schools",
    tag: l("Education", "تعليم"),
    title: l("Misk Schools, Mursia, Riyadh", "مدارس مسك، المرسية، الرياض"),
    short: l("Durable carpet for learning zones, corridors and common areas.", "كاربت متين لمناطق التعلّم والممرات والمساحات المشتركة."),
    text: l("An education-focused flooring project developed to support active learning environments through durable carpet solutions, playful zoning, and a clean, coordinated finish. The scheme combines functionality with a distinctive visual identity across student circulation and activity spaces.", "مشروع أرضيات تعليمي يدعم بيئات التعلّم النشطة عبر حلول كاربت متينة وتقسيم مناطق مرح وتشطيب نظيف ومنسّق. يجمع التصميم بين الوظيفة وهوية بصرية مميزة في ممرات الطلاب ومساحات الأنشطة."),
    meta: {
      location: l("Mursia District, Riyadh, Saudi Arabia", "حي المرسية، الرياض، المملكة العربية السعودية"),
      sector: l("Education", "تعليم"),
      scope: l("Supply & installation of carpet flooring", "توريد وتركيب أرضيات الكاربت"),
      areas: l("Learning zones, corridors, common areas", "مناطق التعلّم، الممرات، المساحات المشتركة"),
    },
    highlight: l("A vibrant flooring concept that enhances comfort, movement, and spatial identity throughout the school environment.", "فكرة أرضيات نابضة تعزز الراحة والحركة والهوية المكانية في أرجاء المدرسة."),
    hero: "misk-corridor",
    gallery: ["misk-learning", "misk-facade"],
  },
];

export const projectLabels = {
  location: l("Location", "الموقع"),
  sector: l("Sector", "القطاع"),
  scope: l("Scope", "نطاق العمل"),
  areas: l("Areas", "المناطق"),
  highlight: l("Project highlight", "أبرز ما في المشروع"),
  selected: l("Selected work", "مشاريع مختارة"),
  title: l("Spaces we've laid the foundation for.", "مساحات وضعنا أساسها."),
  allTitle: l("Projects that set the standard.", "مشاريع ترسم المعيار."),
  allText: l("Hospitality, commercial and education projects delivered with the same discipline, from preparation to a clean handover.", "مشاريع ضيافة وتجارية وتعليمية نُفّذت بنفس الانضباط، من التجهيز حتى التسليم النظيف."),
};

export const logistics = {
  eyebrow: l("Logistics", "الخدمات اللوجستية"),
  title: l("International logistics & customs clearance.", "الشحن الدولي والتخليص الجمركي."),
  text: l(
    "Reliable global movement, customs expertise and local delivery coordination through our appointed operational partner, Yanabea Al-Asimah, a Saudi-licensed customs clearance and logistics provider.",
    "حركة شحن عالمية موثوقة وخبرة جمركية وتنسيق للتوصيل المحلي عبر شريكنا التشغيلي ينابيع العاصمة، مزوّد خدمات تخليص جمركي ولوجستية مرخّص في المملكة.",
  ),
  items: [
    l("International transportation by sea, air and land", "النقل الدولي: بحري وجوي وبري"),
    l("Shipment consolidation", "تجميع الشحنات"),
    l("Customs clearance & documentation", "التخليص الجمركي والمستندات"),
    l("Inland transportation, door to door", "النقل الداخلي من الباب إلى الباب"),
  ],
};

export const certs = {
  eyebrow: l("Certifications & compliance", "الشهادات والالتزام"),
  title: l("Certified. Compliant. Accountable.", "معتمدون. ملتزمون. مسؤولون."),
  text: l("Health, safety and environmental procedures protect our teams, clients and projects, from the first site visit to handover.", "إجراءات الصحة والسلامة والبيئة تحمي فرقنا وعملاءنا ومشاريعنا، من أول زيارة للموقع حتى التسليم."),
  items: [
    { key: "iso-9001", code: "ISO 9001", year: "2015", icon: "check", title: l("Quality Management", "إدارة الجودة"), img: "iso-9001" },
    { key: "iso-14001", code: "ISO 14001", year: "2015", icon: "leaf", title: l("Environmental Management", "الإدارة البيئية"), img: "iso-14001" },
    { key: "iso-45001", code: "ISO 45001", year: "2018", icon: "hard", title: l("Occupational Health & Safety", "الصحة والسلامة المهنية"), img: "iso-45001" },
    { key: "cr", code: "CR", year: "", icon: "doc", title: l("Commercial Registration", "السجل التجاري"), img: "commercial-registration" },
  ],
  consultants: { title: l("Approved by leading consultants", "معتمدون لدى كبرى المكاتب الاستشارية"), names: ["DAR AL RIYADH", "SBCM", "AECOM"] },
  tags: [l("Tender ready", "جاهزون للمناقصات"), l("Vendor onboarding", "تسجيل الموردين"), l("Compliance", "الالتزام")],
  hse: {
    title: l("Health, Safety & Environment", "الصحة والسلامة والبيئة"),
    text: l("We maintain clear HSE practices to protect our teams, clients, and project sites, ensuring safe handling, installation, and site coordination. We follow structured procedures to meet project requirements and local regulations, and we promote a respectful workplace with equal opportunities.", "نطبّق ممارسات واضحة للصحة والسلامة والبيئة لحماية فرقنا وعملائنا ومواقع المشاريع، بما يضمن سلامة المناولة والتركيب وتنسيق الموقع. ونتبع إجراءات منظمة للوفاء بمتطلبات المشاريع واللوائح المحلية، ونعزز بيئة عمل محترمة وفرصاً متساوية."),
    cards: [
      { icon: "hard", title: l("Safety", "السلامة"), text: l("Risk prevention, PPE, and safe handling on site.", "الوقاية من المخاطر ومعدات الوقاية والمناولة الآمنة في الموقع.") },
      { icon: "shield", title: l("Compliance", "الالتزام"), text: l("Documentation, approvals, and regulatory alignment.", "التوثيق والاعتمادات والتوافق مع اللوائح.") },
      { icon: "check", title: l("Quality & Handover", "الجودة والتسليم"), text: l("Inspection, reporting, and clean finishing delivery.", "الفحص والتقارير وتسليم بتشطيب نظيف.") },
    ],
  },
  gov: {
    title: l("Government & approvals", "الجهات الحكومية والاعتمادات"),
    text: l("We coordinate with government-related entities to ensure approvals, documentation, and compliant project delivery.", "ننسّق مع الجهات ذات العلاقة لضمان الاعتمادات والتوثيق وتنفيذ المشاريع وفق الاشتراطات."),
    steps: [
      { title: l("Documentation & Registration", "التوثيق والتسجيل"), points: [l("Company files & required forms", "ملفات الشركة والنماذج المطلوبة"), l("Vendor registration submissions", "طلبات تسجيل الموردين")] },
      { title: l("Approvals & Compliance", "الاعتمادات والالتزام"), points: [l("HSE alignment & compliance checks", "توافق الصحة والسلامة وفحوص الالتزام"), l("Consultant / authority approvals", "اعتمادات الاستشاري والجهات")] },
      { title: l("Execution & Handover", "التنفيذ والتسليم"), points: [l("Site coordination & reporting", "تنسيق الموقع والتقارير"), l("Final documentation & handover", "التوثيق النهائي والتسليم")] },
    ],
  },
  consultantSupport: {
    title: l("Consultant approvals", "اعتمادات الاستشاريين"),
    text: l("We support consultant requirements through compliant submittals, approvals coordination, and technical documentation.", "ندعم متطلبات الاستشاريين عبر مستندات معتمدة وتنسيق للاعتمادات وتوثيق فني."),
    items: [
      { title: l("Submittals", "المستندات"), text: l("Material submittals, samples, and technical data.", "مستندات المواد والعيّنات والبيانات الفنية.") },
      { title: l("Compliance", "الالتزام"), text: l("Specification alignment and requirement tracking.", "مطابقة المواصفات ومتابعة المتطلبات.") },
      { title: l("Coordination", "التنسيق"), text: l("Follow-up, clarifications, and approval flow.", "المتابعة والإيضاحات ومسار الاعتماد.") },
    ],
  },
};

export const approvals = {
  eyebrow: l("Some of our approvals", "نماذج من اعتماداتنا"),
  title: l("Submitted. Reviewed. Approved.", "مستندات مقدّمة. مراجَعة. معتمدة."),
  text: l("A sample consultant-approved document submittal, following the same disciplined process we follow on every project.", "نموذج لمستند مقدَّم ومعتمد من الاستشاري، بنفس المسار المنضبط الذي نتّبعه في كل مشروع."),
  img: "/images/approvals/snb-submittal.png",
  alt: l("Document submittal for SNB Level 38, Riyadh, stamped Approved by consultant SBCM", "مستند مقدَّم لمشروع البنك الأهلي السعودي الدور 38 بالرياض، مختوم بالاعتماد من الاستشاري SBCM"),
  status: l("Approved", "معتمد"),
  rows: [
    { label: l("Project", "المشروع"), value: l("SNB Level 38, Riyadh", "البنك الأهلي السعودي، الدور 38، الرياض") },
    { label: l("Client", "العميل"), value: l("Saudi National Bank (SNB)", "البنك الأهلي السعودي (SNB)") },
    { label: l("Consultant", "الاستشاري"), value: l("SBCM", "SBCM") },
    { label: l("Contractor", "المقاول"), value: l("Vertex Investment", "فيرتكس للاستثمار") },
    { label: l("Submittal", "المستند"), value: l("EGE carpet types & location", "أنواع كاربت EGE ومواقعها") },
    { label: l("Reference", "المرجع"), value: l("SNB-L38-DS-AR-003-REV-00", "SNB-L38-DS-AR-003-REV-00") },
  ],
};

export const location = {
  eyebrow: l("Location map", "موقعنا على الخريطة"),
  title: l("Our office in Riyadh.", "مكتبنا في الرياض."),
  text: l("A clear reference point for client visits, site coordination and direct communication.", "نقطة مرجعية واضحة لزيارات العملاء وتنسيق المواقع والتواصل المباشر."),
  head: l("Head office", "المقر الرئيسي"),
  headLines: [
    l("Riyadh, Saudi Arabia", "الرياض، المملكة العربية السعودية"),
    l("King Salman Dist., Abi Bakr Al Siddiq Branch", "حي الملك سلمان، فرع أبي بكر الصديق"),
    l("Building No. 7719", "مبنى رقم 7719"),
    l("Postal Code 12443", "الرمز البريدي 12443"),
  ],
  coverage: l("Coverage", "نطاق العمل"),
  coverageText: l("Hospitality, commercial and corporate projects across Saudi Arabia.", "مشاريع الضيافة والتجارية والمؤسسية في أنحاء المملكة العربية السعودية."),
  access: l("Contact access", "وسائل التواصل"),
  open: l("Open in Google Maps", "افتح في خرائط Google"),
  mapTitle: l("Map showing the Vertex head office in Riyadh", "خريطة توضّح موقع مقر فيرتكس في الرياض"),
};

export const field = {
  eyebrow: l("Our identity", "هويتنا"),
  title: l("Visible on site. Recognised for standards.", "حاضرون في الموقع. معروفون بمعاييرنا."),
};

export const cta = {
  title: l("Let's build on a strong foundation.", "لنبنِ معًا على أساس متين."),
  text: l("Tell us about your project and we'll respond with a clear scope, timeline and quotation.", "حدّثنا عن مشروعك، وسنرد عليك بنطاق عمل وجدول زمني وعرض سعر واضح."),
};

export const form = {
  title: l("Project enquiry", "استفسار عن مشروع"),
  name: l("Name", "الاسم"),
  namePh: l("Your name", "اسمك"),
  contact: l("Phone or email", "الهاتف أو البريد"),
  contactPh: l("How can we reach you?", "كيف نتواصل معك؟"),
  project: l("Project", "المشروع"),
  projectPh: l("Type, location, scope…", "النوع والموقع ونطاق العمل…"),
  send: l("Send enquiry", "أرسل الاستفسار"),
  sendWa: l("Send via WhatsApp", "أرسل عبر واتساب"),
  hint: l("Opens your email app with the enquiry ready to send.", "يفتح تطبيق البريد برسالة جاهزة للإرسال."),
  subject: l("Project enquiry | Vertex website", "استفسار عن مشروع | موقع فيرتكس"),
};

export const aboutPage = {
  title: l("Built on precision, delivered with accountability.", "نبني بالدقة ونسلّم بالمسؤولية."),
  lead: l("Who we are, what we do and how our teams, tools and partners turn a specification into a clean handover.", "من نحن، وماذا نقدّم، وكيف تحوّل فرقنا وأدواتنا وشركاؤنا المواصفات إلى تسليم نظيف."),
  overview: l("Company overview", "نبذة عن الشركة"),
  whoTitle: l("Who we are", "من نحن"),
  whatTitle: l("What we do", "ماذا نقدّم"),
  strengthsTitle: l("Key strengths", "نقاط القوة"),
  orgEyebrow: l("Organization", "الهيكل التنظيمي"),
  orgTitle: l("A lean structure built around delivery.", "هيكل رشيق مبني حول التنفيذ."),
  org: {
    md: l("Managing Director", "المدير العام"),
    secretary: l("Secretary", "السكرتارية"),
    depts: [
      { title: l("Project Management", "إدارة المشاريع"), kids: [l("Engineering Studies", "الدراسات الهندسية"), l("Installation Staff", "فريق التركيب"), l("Wallcovering · SPC · Carpet · LVT", "تكسية جدران · SPC · كاربت · LVT")] },
      { title: l("Sales", "المبيعات"), kids: [l("Pricing Control", "ضبط التسعير"), l("Sales Representatives", "مندوبو المبيعات")] },
      { title: l("Finance (CFO)", "المالية (CFO)"), kids: [l("Human Resources", "الموارد البشرية"), l("Accountant", "المحاسب"), l("Bill Collectors · Invoice Controller", "المحصّلون · مراقب الفواتير")] },
      { title: l("Marketing", "التسويق"), kids: [l("Retail Managers", "مديرو التجزئة"), l("Warehouse Manager", "مدير المستودع")] },
      { title: l("Procurement", "المشتريات"), kids: [l("Purchase Manager", "مدير المشتريات"), l("Procurement Manager", "مدير التوريد")] },
    ],
  },
  toolsEyebrow: l("Installation tools", "أدوات التركيب"),
  toolsTitle: l("Professional tools, clean execution.", "أدوات احترافية وتنفيذ نظيف."),
  toolsText: l("From site preparation to finishing, our teams use professional tools to ensure quality and a clean handover.", "من تجهيز الموقع حتى اللمسات النهائية، تستخدم فرقنا أدوات احترافية لضمان الجودة والتسليم النظيف."),
  tools: [
    { icon: "shield", title: l("Setup", "التجهيز"), items: [l("Protection", "الحماية"), l("Masking", "التغطية")] },
    { icon: "ruler", title: l("Measure", "القياس"), items: [l("Laser / level", "ليزر / ميزان"), l("Marking", "التعليم")] },
    { icon: "tool", title: l("Install", "التركيب"), items: [l("Cutting", "القص"), l("Adhesives", "المواد اللاصقة")] },
    { icon: "check", title: l("Finish", "التشطيب"), items: [l("Seams / edges", "الوصلات / الحواف"), l("Trims", "الأفاريز")] },
    { icon: "hard", title: l("Safety", "السلامة"), items: [l("PPE", "معدات الوقاية"), l("Signage", "اللافتات")] },
  ],
};

export const productsPage = {
  title: l("Flooring and walls, specified to perform.", "أرضيات وجدران بمواصفات تضمن الأداء."),
  lead: l("Four flooring categories plus wallcoverings, supplied, installed and coordinated by one team.", "أربع فئات أرضيات بالإضافة إلى تكسية الجدران: توريد وتركيب وتنسيق من فريق واحد."),
  usedIn: l("Typical use", "الاستخدامات"),
};

export const contactPage = {
  title: l("Let's talk about your project.", "لنتحدث عن مشروعك."),
  lead: l("Simple, clear and direct contact access. Use phone for urgent requests and email for formal enquiries.", "وسائل تواصل بسيطة وواضحة ومباشرة. استخدم الهاتف للطلبات العاجلة والبريد للاستفسارات الرسمية."),
  phone: l("Phone", "الهاتف"),
  email: l("Email", "البريد الإلكتروني"),
  website: l("Website", "الموقع الإلكتروني"),
  address: l("Head office", "المقر الرئيسي"),
  hours: l("Business hours", "ساعات العمل"),
  coverage: l("Coverage", "نطاق العمل"),
  coverageText: l("Hospitality, commercial and corporate projects across Saudi Arabia.", "مشاريع الضيافة والتجارية والمؤسسية في أنحاء المملكة العربية السعودية."),
  map: l("Open in Maps", "افتح في الخرائط"),
};

export const pageMeta = {
  home: { title: l("Vertex | Premium Flooring & Interior Finishing, Riyadh", "فيرتكس | أرضيات وتشطيبات داخلية فاخرة، الرياض"), desc: l("Premium commercial flooring supply, installation and project coordination across Saudi Arabia: LVT/SPC, carpet, wallcovering and hand tufted rugs.", "توريد وتركيب وتنسيق مشاريع الأرضيات التجارية الفاخرة في المملكة: LVT/SPC وكاربت وتكسية جدران وسجاد يدوي.") },
  about: { title: l("About | Vertex", "من نحن | فيرتكس"), desc: l("Who we are, our team structure, installation tools and approach to quality and HSE.", "من نحن وهيكل فريقنا وأدوات التركيب ونهجنا في الجودة والصحة والسلامة.") },
  products: { title: l("Products | Vertex", "المنتجات | فيرتكس"), desc: l("LVT/SPC flooring, carpet roll, carpet tiles, hand tufted rugs and wallcoverings.", "أرضيات LVT/SPC وسجاد رول وبلاط كاربت وسجاد يدوي وتكسية جدران.") },
  projects: { title: l("Projects | Vertex", "المشاريع | فيرتكس"), desc: l("Conrad Hotel, Cloud Spaces, Misk Schools and more.", "فندق كونراد وكلاود سبيسز ومدارس مسك وغيرها.") },
  certifications: { title: l("Certifications | Vertex", "الشهادات | فيرتكس"), desc: l("ISO 9001, ISO 14001, ISO 45001 and commercial registration.", "ISO 9001 وISO 14001 وISO 45001 والسجل التجاري.") },
  contact: { title: l("Contact | Vertex", "تواصل معنا | فيرتكس"), desc: l("Phone, email and head-office location in Riyadh.", "الهاتف والبريد وموقع المقر الرئيسي في الرياض.") },
};
