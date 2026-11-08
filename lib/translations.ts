import type { Locale } from "./i18n";

/**
 * All user-facing copy lives here. Azerbaijani (`az`) is the source of truth for
 * the shape; `en` and `ru` must match it exactly, so TypeScript fails the build
 * if a key is missing in any language.
 *
 * `divisions` is index-aligned with `divisionMeta` in lib/divisions.ts
 * (software, robotics, competitions, startups, events, education).
 */
const az = {
  meta: {
    home: {
      title: "Kvantics — Öyrən. Qur. Yarış. Yenilik et.",
      description:
        "Kvantics Azərbaycanda tələbələr üçün innovasiya və texnologiya icmasıdır: proqram təminatı, robototexnika, startaplar, hakatonlar və real layihələr.",
    },
    about: {
      title: "Haqqımızda",
      description:
        "Kvantics-in kim olduğunu, missiyasını, vizyonunu, altı istiqamətini və yanaşmasını öyrənin.",
    },
    projects: {
      title: "Layihələr",
      description:
        "Kvantics üzvlərinin hazırladığı layihələr. Layihələr hazırlandıqca burada dərc olunacaq.",
    },
    events: {
      title: "Tədbirlər",
      description:
        "Kvantics-in hakaton, müsabiqə, workshop və icma tədbirləri. Təsdiqlənmiş tədbirlər burada dərc olunacaq.",
    },
    join: {
      title: "Bizə qoşul",
      description:
        "Öyrənmək, qurmaq, yarışmaq və yenilik etmək istəyən tələbələr üçün Kvantics üzvlük müraciəti.",
    },
    work: {
      title: "Bizimlə işlə",
      description:
        "Kvantics bizneslər üçün veb sayt, proqram təminatı və rəqəmsal həllər hazırlayır. Əməkdaşlıq üçün müraciət edin.",
    },
    notFound: { title: "Səhifə tapılmadı" },
  },
  a11y: {
    skip: "Əsas məzmuna keç",
    menuOpen: "Menyunu aç",
    menuClose: "Menyunu bağla",
    mainNav: "Əsas naviqasiya",
    menuTitle: "Menyu",
    language: "Dil",
    newTab: "(yeni tabda açılır)",
    logo: "Kvantics, ana səhifə",
    themeToggle: "Görünüşü dəyiş",
    themeLight: "İşıqlı görünüşə keç",
    themeDark: "Qaranlıq görünüşə keç",
  },
  nav: {
    home: "Ana səhifə",
    about: "Haqqımızda",
    projects: "Layihələr",
    events: "Tədbirlər",
    join: "Bizə qoşul",
    cta: "Kvantics-ə qoşul",
  },
  common: {
    joinKvantics: "Kvantics-ə qoşul",
    applyToJoin: "Qoşulmaq üçün müraciət et",
    workWithUs: "Bizimlə işlə",
    exploreProjects: "Layihələrimizi kəşf et",
    formNote: "Müraciət forması Google Forms-da yeni tabda açılır.",
    seeDivisions: "Bütün istiqamətlərə bax",
  },
  home: {
    hero: {
      title: "Tələbə ideyaları real məhsullara çevrilir.",
      lead: "Kvantics Azərbaycanda tələbələrin birləşdiyi innovasiya və texnologiya icmasıdır. Proqram təminatı, robototexnika və startaplar üzərində real layihələr quraraq öyrənir və birlikdə yarışırıq.",
    },
    statement: {
      lead: "Kvantics adi tələbə klubu deyil.",
      rest: "Bu, motivasiyalı tələbələrin komanda yoldaşı tapdığı, real işlər gördüyü və ideyalarını prototipə, məhsula və bizneslərə çevirdiyi praktiki innovasiya ekosistemidir.",
    },
    pillars: [
      { title: "Öyrən", text: "Proqramlaşdırma, süni intellekt, robototexnika və sahibkarlıq üzrə praktiki bacarıqları işləyərək öyrən." },
      { title: "Qur", text: "Bizneslər üçün veb saytlardan mühəndislik prototiplərinə qədər real layihələr hazırla." },
      { title: "Yarış", text: "Hakatonlarda, startap və robototexnika müsabiqələrində komandanla iştirak et." },
      { title: "Yenilik et", text: "Perspektivli ideyanı konsepsiyadan prototipə və məhsula doğru irəlilət." },
    ],
    activities: {
      title: "Nə ilə məşğul oluruq",
      lead: "Altı istiqamət — hamısı real təcrübəyə xidmət edir.",
    },
    community: {
      title: "Quranlar icması",
      body: "Kvantics-də texnologiyaya maraq göstərən, öyrənməyə hazır və komandada işləməyi sevən tələbələrin yeri var. İrəliləmiş texniki bacarıq şərt deyil — motivasiya kifayətdir.",
      points: [
        "Texnologiya, mühəndislik və sahibkarlığa maraq göstərən tələbələr",
        "Yeni başlayanlar da qoşula bilər",
        "Komandada real layihələr üzərində işləmək imkanı",
      ],
    },
    business: {
      title: "Biznesiniz üçün rəqəmsal həll lazımdır?",
      text: "Kvantics üzvləri restoranlar, bərbərxanalar və onlayn mağazalar kimi bizneslər üçün veb sayt, rəqəmsal platforma və proqram həlləri hazırlayır.",
      more: "Əməkdaşlıq haqqında",
    },
    final: {
      title: "Birlikdə quraq.",
      text: "Qoşulmaq üçün irəliləmiş texniki bacarıq tələb olunmur — öyrənmək, qurmaq və əməkdaşlıq etmək istəyi kifayətdir.",
    },
  },
  about: {
    title: "Haqqımızda",
    lead: "Kvantics tələbələri texnologiya, mühəndislik, innovasiya və sahibkarlıq ətrafında birləşdirən, böyüməkdə olan innovasiya təşəbbüsüdür.",
    who: {
      title: "Biz kimik",
      paragraphs: [
        "Kvantics Azərbaycanda universitet tələbələri üçün yaradılmış innovasiya və texnologiya ekosistemidir. Burada proqram təminatı, süni intellekt və maşın öyrənməsi, mühəndislik və robototexnika, elektronika və avtomatlaşdırma, sahibkarlıq və məhsul inkişafı ilə maraqlanan tələbələr bir araya gəlir.",
        "Məqsədimiz motivasiyalı tələbələrin bacarıqlarını inkişaf etdirə, komanda yoldaşı tapa, praktiki təcrübə qazana, müsabiqələrdə iştirak edə və ideyalarını real məhsul və bizneslərə çevirə biləcəyi mühit yaratmaqdır.",
        "Biz böyük, köklü şirkət deyilik. Kvantics tələbələr tərəfindən idarə olunan, böyüməkdə olan təşəbbüsdür və real şeylər quraraq öyrənməyə inanırıq.",
      ],
    },
    mission: {
      title: "Missiyamız",
      text: "Texnologiya və innovasiyaya maraq göstərən tələbələrə bilik, praktiki təcrübə, komanda imkanları və resurslar təqdim edərək ideyalarını real layihələrə və bizneslərə çevirməyə dəstək olmaq.",
    },
    vision: {
      title: "Vizyonumuz",
      text: "Azərbaycanda güclü tələbə innovasiya ekosisteminə çevrilmək; universitetləri, bizneslər və texnologiya mütəxəssislərini bir araya gətirərək yeni məhsul və startaplara töhfə vermək.",
    },
    whatWeDo: {
      title: "Nə edirik",
      lead: "Kvantics-də öyrənmək qurmaqdan ayrılmazdır. Fəaliyyətimiz dörd əsas işdə cəmlənir:",
      items: [
        { title: "Qururuq", text: "Bizneslər üçün veb sayt və proqram həlləri, həmçinin robototexnika və mühəndislik layihələri." },
        { title: "Yarışırıq", text: "Hakatonlar, startap və robototexnika müsabiqələri üçün komandalar formalaşdırırıq." },
        { title: "Təşkil edirik", text: "Öz hakatonlarımızı, startap müsabiqələrimizi, workshop və seminarlarımızı təşkil edirik." },
        { title: "Öyrədirik", text: "Texniki və peşəkar bacarıqları praktiki təcrübə vasitəsilə inkişaf etdiririk." },
      ],
    },
    divisions: {
      title: "İstiqamətlərimiz",
      lead: "Altı istiqamət fərqli bacarıqlar formalaşdırır və eyni məqsədə — innovasiyaya — xidmət edir.",
    },
    approach: {
      title: "Yanaşmamız",
      lead: "Biliyin məhsula çevrilməsi dörd mərhələdə baş verir.",
      steps: [
        { title: "Öyrən", text: "Bilik və texniki bacarıqları inkişaf etdir." },
        { title: "Qur", text: "Real layihələr və prototiplər yarat." },
        { title: "Yarış", text: "Müsabiqələrdə iştirak et, özünü sına." },
        { title: "Yenilik et", text: "İdeyaları təsirli məhsul və startaplara çevir." },
      ],
    },
  },
  divisions: [
    {
      title: "Proqram təminatı",
      summary: "Bizneslər üçün veb saytlar, rəqəmsal platformalar və proqram həlləri.",
      description:
        "Restoranlar, bərbərxanalar, onlayn mağazalar və digər bizneslər üçün veb saytlar, rəqəmsal platformalar və proqram həlləri hazırlayırıq. Üzvlər real ehtiyaclar üzərində işləyərək praktiki təcrübə qazanır.",
      tags: ["Veb saytlar", "Rəqəmsal platformalar", "Proqram həlləri"],
    },
    {
      title: "Robototexnika və elektronika",
      summary: "Robototexnika, elektronika, avtomatlaşdırma və mühəndislik layihələri.",
      description:
        "Robototexnika, elektronika, avtomatlaşdırma və mühəndislik layihələri hazırlayırıq. İdeyaları kağız üzərində deyil, real qurğularda sınaqdan keçiririk.",
      tags: ["Robototexnika", "Elektronika", "Avtomatlaşdırma", "Mühəndislik"],
    },
    {
      title: "Yarışlar və hakatonlar",
      summary: "Hakaton, startap və robototexnika müsabiqələri üçün komandalar.",
      description:
        "Hakatonlarda, startap müsabiqələrində, robototexnika yarışlarında və digər innovasiya tədbirlərində iştirak etmək üçün komandalar formalaşdırırıq.",
      tags: ["Hakatonlar", "Startap müsabiqələri", "Robototexnika yarışları"],
    },
    {
      title: "Startap inkişafı",
      summary: "Perspektivli ideyaları prototipə, məhsula və startapa çevirmək.",
      description:
        "Komanda üzvlərinin perspektivli ideyalarını dəstəkləyir və onların prototipə, məhsula və startapa çevrilməsinə kömək edirik.",
      tags: ["Prototiplər", "Məhsullar", "Startaplar"],
    },
    {
      title: "Tədbirlər və icma",
      summary: "Öz hakatonlarımız, müsabiqələrimiz, workshoplarımız və görüşlərimiz.",
      description:
        "Öz hakatonlarımızı, startap müsabiqələrimizi, workshoplarımızı, seminarlarımızı və networking tədbirlərimizi təşkil edirik.",
      tags: ["Hakatonlar", "Workshoplar", "Seminarlar", "Networking"],
    },
    {
      title: "Təhsil və inkişaf",
      summary: "Texniki və peşəkar bacarıqlar üçün praktiki öyrənmə.",
      description:
        "Tələbələrə texniki və peşəkar bacarıqlarını inkişaf etdirmək üçün praktiki öyrənmə imkanları yaradırıq.",
      tags: ["Praktiki öyrənmə", "Texniki bacarıqlar", "Peşəkar bacarıqlar"],
    },
  ],
  projects: {
    title: "Layihələr",
    lead: "Kvantics üzvlərinin hazırladığı layihələr burada nümayiş olunacaq.",
    empty: {
      title: "Layihələr tezliklə burada olacaq",
      text: "Hazırda dərc olunmuş layihə yoxdur. Layihələrimiz hazırlandıqca ad, təsvir, texnologiyalar, status və keçidlərlə birlikdə bu səhifədə yerləşdiriləcək.",
      secondary: "Nə qururuq",
    },
    anatomy: {
      title: "Layihə kartında nələr olacaq",
      items: [
        { title: "Status", text: "Layihənin hazırkı mərhələsi." },
        { title: "Texnologiyalar", text: "İstifadə olunan alətlər və proqramlaşdırma dilləri." },
        { title: "Keçidlər", text: "Mövcud olduqda GitHub və canlı demo." },
      ],
    },
    areas: {
      title: "Layihə sahələri",
      items: [
        "Veb saytlar və platformalar",
        "Proqram həlləri",
        "Süni intellekt və maşın öyrənməsi",
        "Robototexnika və elektronika",
        "Avtomatlaşdırma",
        "Startap prototipləri",
      ],
    },
    status: { idea: "İdeya", "in-progress": "İşlənir", prototype: "Prototip", completed: "Tamamlanıb" },
    links: { github: "GitHub", demo: "Canlı demo" },
  },
  events: {
    title: "Tədbirlər",
    lead: "Hakatonlar, müsabiqələr, workshoplar və icma görüşləri.",
    empty: {
      title: "Təsdiqlənmiş tədbir yoxdur",
      text: "Yaxınlaşan tədbirlər təsdiqləndikdə tarix, məkan və qeydiyyat keçidi ilə burada dərc olunacaq. Növbəti tədbirlərin bir hissəsi olmaq üçün icmaya qoşula bilərsiniz.",
    },
    formats: {
      title: "Tədbir formatları",
      lead: "Kvantics-in təşkil etdiyi və iştirak etdiyi tədbir növləri:",
    },
    categories: {
      hackathon: { label: "Hakaton", text: "Komandalarla məhdud vaxtda məhsul prototipi qurmaq." },
      startup: { label: "Startap müsabiqəsi", text: "İdeyaları təqdim etmək və rəy almaq." },
      robotics: { label: "Robototexnika yarışı", text: "Robotların və avtomatlaşdırma həllərinin sınaqdan keçirilməsi." },
      workshop: { label: "Workshop", text: "Praktiki bacarıqlar üzrə təcrübi məşğələlər." },
      seminar: { label: "Seminar", text: "Texnologiya və sahibkarlıq mövzularında təqdimatlar." },
      meetup: { label: "İcma görüşü", text: "Üzvlərin tanışlığı və ideya mübadiləsi." },
    },
    registration: {
      open: "Qeydiyyat açıqdır",
      soon: "Qeydiyyat tezliklə",
      closed: "Qeydiyyat bağlıdır",
      completed: "Tamamlanıb",
    },
    register: "Qeydiyyatdan keç",
    online: "Onlayn",
    dateTbd: "Tarix elan olunacaq",
  },
  join: {
    title: "Kvantics-ə qoşul",
    lead: "Öyrənmək, qurmaq, əməkdaşlıq etmək və yenilik yaratmaq istəyən tələbələri gözləyirik. İrəliləmiş texniki bacarıq tələb olunmur.",
    who: {
      title: "Kimlər qoşula bilər",
      text: "Texnologiya, mühəndislik, innovasiya və ya sahibkarlığa maraq göstərən universitet tələbələri. Müraciət üçün irəliləmiş texniki bacarıq lazım deyil — əsas olan öyrənmək və qurmaq istəyidir.",
    },
    gains: {
      title: "Üzvlər nə qazanır",
      items: [
        { title: "Praktiki təcrübə", text: "Real layihələr üzərində işləyərək bacarıqlarını inkişaf etdir." },
        { title: "Komanda yoldaşları", text: "Eyni məqsədlərə can atan tələbələrlə tanış ol və komanda qur." },
        { title: "Yarış imkanları", text: "Hakatonlarda və müsabiqələrdə komandanın bir hissəsi ol." },
        { title: "İdeyaya dəstək", text: "Perspektivli ideyanı prototipə və məhsula çevirməyə çalış." },
        { title: "Öyrənmə mühiti", text: "Texniki və peşəkar bacarıqlar üçün praktiki öyrənmə imkanları." },
        { title: "İcma", text: "Tədbirlərdə və görüşlərdə texnologiya icması ilə əlaqə qur." },
      ],
    },
    opportunities: {
      title: "Kvantics daxilində imkanlar",
      lead: "Maraq dairənə uyğun istiqaməti seç:",
    },
    why: {
      title: "Niyə üzv olmalı",
      paragraphs: [
        "Nəzəriyyə tək başına kifayət etmir. Bacarıqlar real layihə üzərində işləyəndə, səhv edəndə, komandada problem həll edəndə və nəticəni görəndə ən sürətli inkişaf edir. Kvantics bunun üçün mühit yaradır.",
        "Burada komanda tapa, ideyanı reallaşdırmağa başlaya və qurduğunu müsabiqələrdə və tədbirlərdə sınaqdan keçirə bilərsən.",
      ],
    },
    looking: {
      title: "Kimləri axtarırıq",
      items: [
        { title: "Öyrənməyə həvəsli", text: "Yeni şeylər öyrənməkdən çəkinməyən." },
        { title: "Qurmaq istəyən", text: "İdeyaları real nəticəyə çevirməyə hazır olan." },
        { title: "Komandada işləməyi sevən", text: "Birlikdə işləməyi və bilik bölüşməyi bacaran." },
        { title: "Yeni ideyalara açıq", text: "Sual verməyə və yeni yanaşmalar sınamağa hazır olan." },
      ],
      banner: "Yeni başlayırsan? Problem deyil. İlk addım üçün motivasiya və öyrənmək istəyi kifayətdir.",
    },
    cta: {
      title: "İlk addımı at",
      text: "Müraciət formasını doldur və Kvantics icmasının bir hissəsi ol.",
    },
    workPointer: { text: "Biznesiniz və ya təşkilatınız əməkdaşlıq etmək istəyir?", link: "Bizimlə işlə səhifəsi" },
  },
  work: {
    title: "Bizimlə işlə",
    lead: "Kvantics bizneslər üçün veb sayt, proqram və rəqəmsal həllər hazırlayır — tələbə enerjisi və real layihə təcrübəsi ilə.",
    services: {
      title: "Birlikdə nə edə bilərik",
      items: [
        { title: "Veb saytların hazırlanması", text: "Restoran, bərbərxana, onlayn mağaza və digər biznesləriniz üçün müasir veb saytlar." },
        { title: "Proqram təminatı", text: "Biznes ehtiyaclarına uyğun proqram həlləri və daxili alətlər." },
        { title: "Rəqəmsal həllər", text: "Müştərilərlə əlaqəni və gündəlik işləri asanlaşdıran rəqəmsal platformalar." },
        { title: "Texnoloji layihələr", text: "Mühəndislik, avtomatlaşdırma və texnologiya əsaslı layihələr." },
        { title: "İnnovasiya təşəbbüsləri", text: "Yeni məhsul və ideyaların birgə araşdırılması və prototipləşdirilməsi." },
      ],
    },
    whoFor: {
      title: "Kimlər üçün",
      text: "Restoranlar, bərbərxanalar, onlayn mağazalar və rəqəmsal dəstəyə ehtiyacı olan digər bizneslər.",
    },
    expectations: {
      title: "Bilməli olduqlarınız",
      text: "Kvantics tələbələr tərəfindən idarə olunan təşəbbüsdür və layihələr üzərində Kvantics üzvləri işləyir. Əməkdaşlığın əhatəsini və şərtlərini müraciətinizi nəzərdən keçirdikdən sonra birlikdə müəyyənləşdiririk.",
    },
    how: {
      title: "Necə başlamaq olar",
      text: "Biznesinizin ehtiyacını və ya layihə ideyanızı müraciət formasında qısaca təsvir edin.",
    },
    backToJoin: { text: "Üzv olmaq istəyirsiniz?", link: "Üzvlük səhifəsi" },
  },
  footer: {
    description: "Texnologiya, mühəndislik və innovasiya ətrafında birləşən tələbə icması.",
    pages: "Səhifələr",
    involved: "İştirak",
    contact: "Əlaqə",
    contactText: "Hələlik əlaqə üçün müraciət formasından istifadə edin.",
    rights: "Bütün hüquqlar qorunur.",
  },
  notFound: {
    title: "Səhifə tapılmadı",
    text: "Axtardığınız səhifə mövcud deyil və ya köçürülüb.",
    back: "Ana səhifəyə qayıt",
  },
};

export type Dictionary = typeof az;

const en: Dictionary = {
  meta: {
    home: {
      title: "Kvantics — Learn. Build. Compete. Innovate.",
      description:
        "Kvantics is a student-driven innovation and technology community in Azerbaijan: software, robotics, startups, hackathons and real projects.",
    },
    about: {
      title: "About Us",
      description:
        "Learn who Kvantics is, our mission and vision, our six divisions and how we turn knowledge into products.",
    },
    projects: {
      title: "Projects",
      description:
        "Projects built by Kvantics members. They will be published here as they are developed.",
    },
    events: {
      title: "Events",
      description:
        "Kvantics hackathons, competitions, workshops and community events. Confirmed events will be published here.",
    },
    join: {
      title: "Join Us",
      description:
        "Apply for Kvantics membership if you want to learn, build, compete and innovate with other students.",
    },
    work: {
      title: "Work With Us",
      description:
        "Kvantics builds websites, software and digital solutions for businesses. Apply to collaborate with us.",
    },
    notFound: { title: "Page not found" },
  },
  a11y: {
    skip: "Skip to main content",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    mainNav: "Main navigation",
    menuTitle: "Menu",
    language: "Language",
    newTab: "(opens in a new tab)",
    logo: "Kvantics, home",
    themeToggle: "Toggle appearance",
    themeLight: "Switch to light mode",
    themeDark: "Switch to dark mode",
  },
  nav: {
    home: "Home",
    about: "About Us",
    projects: "Projects",
    events: "Events",
    join: "Join Us",
    cta: "Join Kvantics",
  },
  common: {
    joinKvantics: "Join Kvantics",
    applyToJoin: "Apply to Join",
    workWithUs: "Work With Us",
    exploreProjects: "Explore Our Projects",
    formNote: "The application form opens in Google Forms in a new tab.",
    seeDivisions: "See all divisions",
  },
  home: {
    hero: {
      title: "Student ideas, built into real products.",
      lead: "Kvantics is a student-driven innovation and technology community in Azerbaijan. We learn by building real projects in software, robotics and startups, and we compete together.",
    },
    statement: {
      lead: "Kvantics is not just a student club.",
      rest: "It is a practical innovation ecosystem where motivated students find teammates, take on real work and turn ideas into prototypes, products and businesses.",
    },
    pillars: [
      { title: "Learn", text: "Pick up practical skills in programming, AI, robotics and entrepreneurship by doing the work." },
      { title: "Build", text: "Make real projects, from business websites to engineering prototypes." },
      { title: "Compete", text: "Join hackathons, startup contests and robotics competitions as part of a team." },
      { title: "Innovate", text: "Take a promising idea from concept to prototype and on to a product." },
    ],
    activities: {
      title: "What we do",
      lead: "Six areas of work, all built around real practice.",
    },
    community: {
      title: "A community of people who build",
      body: "There is room at Kvantics for students who are curious about technology, ready to learn and happy to work in a team. Advanced technical skills are not required — motivation is enough.",
      points: [
        "Students curious about technology, engineering and entrepreneurship",
        "Beginners are welcome to join",
        "A chance to work on real projects in a team",
      ],
    },
    business: {
      title: "Need a digital solution for your business?",
      text: "Kvantics members build websites, digital platforms and software for businesses such as restaurants, barbershops and online shops.",
      more: "About collaboration",
    },
    final: {
      title: "Let's build together.",
      text: "You don't need advanced technical skills to join — the will to learn, build and collaborate is enough.",
    },
  },
  about: {
    title: "About Us",
    lead: "Kvantics is a growing, student-driven innovation initiative that brings students together around technology, engineering, innovation and entrepreneurship.",
    who: {
      title: "Who we are",
      paragraphs: [
        "Kvantics is an innovation and technology ecosystem for university students in Azerbaijan. It brings together students interested in software development, artificial intelligence and machine learning, engineering and robotics, electronics and automation, entrepreneurship and product development.",
        "Our goal is to create an environment where motivated students can develop their skills, find teammates, gain practical experience, take part in competitions and turn their ideas into real products and businesses.",
        "We are not a large, established company. Kvantics is a young, student-driven initiative, and we believe people learn best by building real things.",
      ],
    },
    mission: {
      title: "Our mission",
      text: "To support students interested in technology and innovation with knowledge, practical experience, teamwork opportunities and resources, so they can turn their ideas into real projects and businesses.",
    },
    vision: {
      title: "Our vision",
      text: "To grow into a strong student-driven innovation ecosystem in Azerbaijan, bringing universities, businesses and technology professionals together to contribute to new products and startups.",
    },
    whatWeDo: {
      title: "What we do",
      lead: "At Kvantics, learning and building go together. Our work comes down to four things:",
      items: [
        { title: "We build", text: "Websites and software for businesses, plus robotics and engineering projects." },
        { title: "We compete", text: "We form teams for hackathons, startup competitions and robotics competitions." },
        { title: "We organize", text: "Our own hackathons, startup competitions, workshops and seminars." },
        { title: "We teach", text: "Technical and professional skills, developed through hands-on practice." },
      ],
    },
    divisions: {
      title: "Our divisions",
      lead: "Six divisions build different skills and serve one shared goal: innovation.",
    },
    approach: {
      title: "Our approach",
      lead: "Turning knowledge into a product happens in four stages.",
      steps: [
        { title: "Learn", text: "Develop knowledge and technical skills." },
        { title: "Build", text: "Create real-world projects and prototypes." },
        { title: "Compete", text: "Take part in competitions and test yourself." },
        { title: "Innovate", text: "Turn ideas into impactful products and startups." },
      ],
    },
  },
  divisions: [
    {
      title: "Software Development",
      summary: "Websites, digital platforms and software solutions for businesses.",
      description:
        "We build websites, digital platforms and software solutions for businesses such as restaurants, barbershops and online shops. Members gain practical experience by working on real needs.",
      tags: ["Websites", "Digital platforms", "Software solutions"],
    },
    {
      title: "Robotics & Electronics",
      summary: "Robotics, electronics, automation and engineering projects.",
      description:
        "We develop robotics, electronics, automation and engineering projects. Ideas are tested on real hardware, not just on paper.",
      tags: ["Robotics", "Electronics", "Automation", "Engineering"],
    },
    {
      title: "Hackathons & Competitions",
      summary: "Teams for hackathons, startup contests and robotics competitions.",
      description:
        "We form teams to take part in hackathons, startup competitions, robotics competitions and other innovation events.",
      tags: ["Hackathons", "Startup competitions", "Robotics competitions"],
    },
    {
      title: "Startup Development",
      summary: "Taking promising ideas to prototypes, products and startups.",
      description:
        "We support promising ideas from team members and help turn them into prototypes, products and startups.",
      tags: ["Prototypes", "Products", "Startups"],
    },
    {
      title: "Events & Community",
      summary: "Our own hackathons, competitions, workshops and meetups.",
      description:
        "We organize our own hackathons, startup competitions, workshops, seminars and networking events.",
      tags: ["Hackathons", "Workshops", "Seminars", "Networking"],
    },
    {
      title: "Education & Development",
      summary: "Hands-on learning for technical and professional skills.",
      description:
        "We create practical learning opportunities that help students develop technical and professional skills.",
      tags: ["Hands-on learning", "Technical skills", "Professional skills"],
    },
  ],
  projects: {
    title: "Projects",
    lead: "Projects built by Kvantics members will be showcased here.",
    empty: {
      title: "Projects are coming soon",
      text: "No projects have been published yet. As our projects take shape, they will appear on this page with their description, technologies, status and links.",
      secondary: "What we build",
    },
    anatomy: {
      title: "What each project card will show",
      items: [
        { title: "Status", text: "Where the project currently stands." },
        { title: "Technologies", text: "The tools and languages used." },
        { title: "Links", text: "GitHub and a live demo, when available." },
      ],
    },
    areas: {
      title: "Project areas",
      items: [
        "Websites and platforms",
        "Software solutions",
        "AI and machine learning",
        "Robotics and electronics",
        "Automation",
        "Startup prototypes",
      ],
    },
    status: { idea: "Idea", "in-progress": "In progress", prototype: "Prototype", completed: "Completed" },
    links: { github: "GitHub", demo: "Live demo" },
  },
  events: {
    title: "Events",
    lead: "Hackathons, competitions, workshops and community meetups.",
    empty: {
      title: "No confirmed events yet",
      text: "Upcoming events will be published here with their date, location and registration link once they are confirmed. Join the community to be part of what comes next.",
    },
    formats: {
      title: "Event formats",
      lead: "The kinds of events Kvantics organizes and takes part in:",
    },
    categories: {
      hackathon: { label: "Hackathon", text: "Build a product prototype with a team in a limited time." },
      startup: { label: "Startup competition", text: "Present ideas and get feedback." },
      robotics: { label: "Robotics competition", text: "Put robots and automation solutions to the test." },
      workshop: { label: "Workshop", text: "Hands-on sessions to practice applied skills." },
      seminar: { label: "Seminar", text: "Talks on technology and entrepreneurship." },
      meetup: { label: "Community meetup", text: "Meet other members and exchange ideas." },
    },
    registration: {
      open: "Registration open",
      soon: "Registration opening soon",
      closed: "Registration closed",
      completed: "Completed",
    },
    register: "Register",
    online: "Online",
    dateTbd: "Date to be announced",
  },
  join: {
    title: "Join Kvantics",
    lead: "We welcome students who want to learn, build, collaborate and innovate. Advanced technical skills are not required.",
    who: {
      title: "Who can join",
      text: "University students who are curious about technology, engineering, innovation or entrepreneurship. You do not need advanced technical skills to apply — what matters is the wish to learn and build.",
    },
    gains: {
      title: "What members gain",
      items: [
        { title: "Practical experience", text: "Grow your skills by working on real projects." },
        { title: "Teammates", text: "Meet students with similar goals and form a team." },
        { title: "Chances to compete", text: "Be part of a team at hackathons and competitions." },
        { title: "Support for ideas", text: "Work on taking a promising idea to a prototype and a product." },
        { title: "A place to learn", text: "Hands-on learning for technical and professional skills." },
        { title: "Community", text: "Connect with the technology community at events and meetups." },
      ],
    },
    opportunities: {
      title: "Opportunities inside Kvantics",
      lead: "Pick the area that matches your interests:",
    },
    why: {
      title: "Why become a member",
      paragraphs: [
        "Theory alone is not enough. Skills grow fastest when you work on a real project, make mistakes, solve problems in a team and see the result. Kvantics gives you the environment for it.",
        "Here you can find a team, start turning an idea into reality and test what you build in competitions and at events.",
      ],
    },
    looking: {
      title: "Who we are looking for",
      items: [
        { title: "Eager to learn", text: "People who enjoy picking up new things." },
        { title: "Ready to build", text: "People who want to turn ideas into real results." },
        { title: "Team players", text: "People who like working together and sharing knowledge." },
        { title: "Open to new ideas", text: "People who ask questions and try new approaches." },
      ],
      banner: "Just getting started? That's fine. Motivation and the will to learn are enough for a first step.",
    },
    cta: {
      title: "Take the first step",
      text: "Fill in the application form and become part of the Kvantics community.",
    },
    workPointer: { text: "Is your business or organization looking to collaborate?", link: "Go to Work With Us" },
  },
  work: {
    title: "Work With Us",
    lead: "Kvantics builds websites, software and digital solutions for businesses — with student energy and real project experience.",
    services: {
      title: "What we can do together",
      items: [
        { title: "Website development", text: "Modern websites for your restaurant, barbershop, online shop or other business." },
        { title: "Software development", text: "Software solutions and internal tools tailored to your business needs." },
        { title: "Digital solutions", text: "Digital platforms that simplify customer contact and everyday work." },
        { title: "Technology projects", text: "Projects based on engineering, automation and technology." },
        { title: "Innovation initiatives", text: "Exploring and prototyping new products and ideas together." },
      ],
    },
    whoFor: {
      title: "Who it is for",
      text: "Restaurants, barbershops, online shops and other businesses that need digital support.",
    },
    expectations: {
      title: "Good to know",
      text: "Kvantics is a student-driven initiative, and projects are carried out by Kvantics members. We define the scope and terms of a collaboration together, after reviewing your application.",
    },
    how: {
      title: "How to get started",
      text: "Briefly describe your business need or project idea in the application form.",
    },
    backToJoin: { text: "Want to become a member instead?", link: "Go to Join Us" },
  },
  footer: {
    description: "A student community built around technology, engineering and innovation.",
    pages: "Pages",
    involved: "Get involved",
    contact: "Contact",
    contactText: "For now, please use the application form to get in touch.",
    rights: "All rights reserved.",
  },
  notFound: {
    title: "Page not found",
    text: "The page you are looking for does not exist or has been moved.",
    back: "Back to home",
  },
};

const ru: Dictionary = {
  meta: {
    home: {
      title: "Kvantics — Учись. Создавай. Соревнуйся. Внедряй.",
      description:
        "Kvantics — студенческое сообщество инноваций и технологий в Азербайджане: разработка ПО, робототехника, стартапы, хакатоны и реальные проекты.",
    },
    about: {
      title: "О нас",
      description:
        "Узнайте, кто такой Kvantics, о нашей миссии и видении, шести направлениях и о том, как мы превращаем знания в продукты.",
    },
    projects: {
      title: "Проекты",
      description:
        "Проекты участников Kvantics. Они будут опубликованы здесь по мере появления.",
    },
    events: {
      title: "События",
      description:
        "Хакатоны, соревнования, воркшопы и встречи сообщества Kvantics. Подтверждённые события будут опубликованы здесь.",
    },
    join: {
      title: "Вступить",
      description:
        "Подайте заявку на участие в Kvantics, если хотите учиться, создавать, соревноваться и внедрять инновации вместе со студентами.",
    },
    work: {
      title: "Сотрудничать с нами",
      description:
        "Kvantics создаёт сайты, программное обеспечение и цифровые решения для бизнеса. Подайте заявку на сотрудничество.",
    },
    notFound: { title: "Страница не найдена" },
  },
  a11y: {
    skip: "Перейти к основному содержимому",
    menuOpen: "Открыть меню",
    menuClose: "Закрыть меню",
    mainNav: "Основная навигация",
    menuTitle: "Меню",
    language: "Язык",
    newTab: "(откроется в новой вкладке)",
    logo: "Kvantics, на главную",
    themeToggle: "Переключить вид",
    themeLight: "Включить светлый режим",
    themeDark: "Включить тёмный режим",
  },
  nav: {
    home: "Главная",
    about: "О нас",
    projects: "Проекты",
    events: "События",
    join: "Вступить",
    cta: "Присоединиться",
  },
  common: {
    joinKvantics: "Присоединиться к Kvantics",
    applyToJoin: "Подать заявку",
    workWithUs: "Сотрудничать с нами",
    exploreProjects: "Наши проекты",
    formNote: "Анкета откроется в Google Forms в новой вкладке.",
    seeDivisions: "Все направления",
  },
  home: {
    hero: {
      title: "Студенческие идеи, воплощённые в реальные продукты.",
      lead: "Kvantics — студенческое сообщество инноваций и технологий в Азербайджане. Мы учимся, создавая реальные проекты в сфере программного обеспечения, робототехники и стартапов, и вместе участвуем в соревнованиях.",
    },
    statement: {
      lead: "Kvantics — это не просто студенческий клуб.",
      rest: "Это практическая инновационная экосистема, где мотивированные студенты находят команду, берутся за реальные задачи и превращают идеи в прототипы, продукты и бизнес.",
    },
    pillars: [
      { title: "Учись", text: "Осваивай практические навыки в программировании, ИИ, робототехнике и предпринимательстве — на деле." },
      { title: "Создавай", text: "Делай реальные проекты: от сайтов для бизнеса до инженерных прототипов." },
      { title: "Соревнуйся", text: "Участвуй в хакатонах, стартап-конкурсах и соревнованиях по робототехнике в составе команды." },
      { title: "Внедряй", text: "Доводи перспективные идеи от замысла до прототипа и продукта." },
    ],
    activities: {
      title: "Чем мы занимаемся",
      lead: "Шесть направлений, объединённых практикой.",
    },
    community: {
      title: "Сообщество тех, кто создаёт",
      body: "В Kvantics рады студентам, которым интересны технологии, которые готовы учиться и работать в команде. Продвинутые технические навыки не нужны — достаточно мотивации.",
      points: [
        "Студенты, интересующиеся технологиями, инженерией и предпринимательством",
        "Новички тоже могут присоединиться",
        "Возможность работать над реальными проектами в команде",
      ],
    },
    business: {
      title: "Нужно цифровое решение для вашего бизнеса?",
      text: "Участники Kvantics создают сайты, цифровые платформы и программные решения для бизнеса — например, для ресторанов, барбершопов и интернет-магазинов.",
      more: "О сотрудничестве",
    },
    final: {
      title: "Давайте создавать вместе.",
      text: "Чтобы присоединиться, не нужны продвинутые технические навыки — достаточно желания учиться, создавать и работать вместе.",
    },
  },
  about: {
    title: "О нас",
    lead: "Kvantics — растущая студенческая инициатива, объединяющая студентов вокруг технологий, инженерии, инноваций и предпринимательства.",
    who: {
      title: "Кто мы",
      paragraphs: [
        "Kvantics — экосистема инноваций и технологий для университетских студентов Азербайджана. Здесь собираются те, кого интересуют разработка программного обеспечения, искусственный интеллект и машинное обучение, инженерия и робототехника, электроника и автоматизация, предпринимательство и создание продуктов.",
        "Наша цель — создать среду, где мотивированные студенты смогут развивать навыки, находить единомышленников, получать практический опыт, участвовать в соревнованиях и превращать свои идеи в реальные продукты и бизнес.",
        "Мы не крупная устоявшаяся компания. Kvantics — молодая инициатива, которую ведут студенты, и мы верим, что лучше всего учатся, создавая настоящие вещи.",
      ],
    },
    mission: {
      title: "Наша миссия",
      text: "Поддерживать студентов, интересующихся технологиями и инновациями: давать знания, практический опыт, возможности командной работы и ресурсы, чтобы они могли превращать идеи в реальные проекты и бизнес.",
    },
    vision: {
      title: "Наше видение",
      text: "Вырасти в сильную студенческую инновационную экосистему Азербайджана, объединяющую университеты, бизнес и технологических специалистов и вносящую вклад в новые продукты и стартапы.",
    },
    whatWeDo: {
      title: "Чем мы занимаемся",
      lead: "В Kvantics учёба неотделима от практики. Наша работа сводится к четырём вещам:",
      items: [
        { title: "Создаём", text: "Сайты и программные решения для бизнеса, а также проекты по робототехнике и инженерии." },
        { title: "Соревнуемся", text: "Формируем команды для хакатонов, стартап-конкурсов и соревнований по робототехнике." },
        { title: "Организуем", text: "Собственные хакатоны, стартап-конкурсы, воркшопы и семинары." },
        { title: "Обучаем", text: "Развиваем технические и профессиональные навыки через практику." },
      ],
    },
    divisions: {
      title: "Наши направления",
      lead: "Шесть направлений развивают разные навыки и служат одной цели — инновациям.",
    },
    approach: {
      title: "Наш подход",
      lead: "Путь от знаний к продукту проходит в четыре этапа.",
      steps: [
        { title: "Учись", text: "Развивай знания и технические навыки." },
        { title: "Создавай", text: "Делай реальные проекты и прототипы." },
        { title: "Соревнуйся", text: "Участвуй в соревнованиях и проверяй себя." },
        { title: "Внедряй", text: "Превращай идеи в значимые продукты и стартапы." },
      ],
    },
  },
  divisions: [
    {
      title: "Разработка ПО",
      summary: "Сайты, цифровые платформы и программные решения для бизнеса.",
      description:
        "Мы создаём сайты, цифровые платформы и программные решения для бизнеса — например, для ресторанов, барбершопов и интернет-магазинов. Участники получают практический опыт, работая над реальными задачами.",
      tags: ["Сайты", "Цифровые платформы", "Программные решения"],
    },
    {
      title: "Робототехника и электроника",
      summary: "Проекты по робототехнике, электронике, автоматизации и инженерии.",
      description:
        "Мы делаем проекты по робототехнике, электронике, автоматизации и инженерии. Идеи проверяются на реальных устройствах, а не только на бумаге.",
      tags: ["Робототехника", "Электроника", "Автоматизация", "Инженерия"],
    },
    {
      title: "Хакатоны и соревнования",
      summary: "Команды для хакатонов, стартап-конкурсов и соревнований по робототехнике.",
      description:
        "Мы формируем команды для участия в хакатонах, стартап-конкурсах, соревнованиях по робототехнике и других инновационных событиях.",
      tags: ["Хакатоны", "Стартап-конкурсы", "Соревнования по робототехнике"],
    },
    {
      title: "Развитие стартапов",
      summary: "Путь перспективных идей к прототипам, продуктам и стартапам.",
      description:
        "Мы поддерживаем перспективные идеи участников и помогаем превращать их в прототипы, продукты и стартапы.",
      tags: ["Прототипы", "Продукты", "Стартапы"],
    },
    {
      title: "События и сообщество",
      summary: "Собственные хакатоны, конкурсы, воркшопы и встречи.",
      description:
        "Мы организуем собственные хакатоны, стартап-конкурсы, воркшопы, семинары и нетворкинг-встречи.",
      tags: ["Хакатоны", "Воркшопы", "Семинары", "Нетворкинг"],
    },
    {
      title: "Образование и развитие",
      summary: "Практическое обучение техническим и профессиональным навыкам.",
      description:
        "Мы создаём возможности практического обучения, которые помогают студентам развивать технические и профессиональные навыки.",
      tags: ["Практическое обучение", "Технические навыки", "Профессиональные навыки"],
    },
  ],
  projects: {
    title: "Проекты",
    lead: "Здесь будут представлены проекты участников Kvantics.",
    empty: {
      title: "Проекты скоро появятся",
      text: "Опубликованных проектов пока нет. По мере появления проектов они будут размещаться на этой странице с описанием, технологиями, статусом и ссылками.",
      secondary: "Чем мы занимаемся",
    },
    anatomy: {
      title: "Что будет в карточке проекта",
      items: [
        { title: "Статус", text: "На каком этапе находится проект." },
        { title: "Технологии", text: "Используемые инструменты и языки." },
        { title: "Ссылки", text: "GitHub и живая демо-версия — если они есть." },
      ],
    },
    areas: {
      title: "Направления проектов",
      items: [
        "Сайты и платформы",
        "Программные решения",
        "ИИ и машинное обучение",
        "Робототехника и электроника",
        "Автоматизация",
        "Прототипы стартапов",
      ],
    },
    status: { idea: "Идея", "in-progress": "В разработке", prototype: "Прототип", completed: "Завершён" },
    links: { github: "GitHub", demo: "Демо" },
  },
  events: {
    title: "События",
    lead: "Хакатоны, соревнования, воркшопы и встречи сообщества.",
    empty: {
      title: "Подтверждённых событий пока нет",
      text: "Ближайшие события появятся здесь с датой, местом и ссылкой на регистрацию, как только будут подтверждены. Присоединяйтесь к сообществу, чтобы участвовать в том, что будет дальше.",
    },
    formats: {
      title: "Форматы событий",
      lead: "Какие события Kvantics организует и в каких участвует:",
    },
    categories: {
      hackathon: { label: "Хакатон", text: "Создание прототипа продукта командой за ограниченное время." },
      startup: { label: "Стартап-конкурс", text: "Презентация идей и получение обратной связи." },
      robotics: { label: "Соревнование по робототехнике", text: "Испытание роботов и решений по автоматизации." },
      workshop: { label: "Воркшоп", text: "Практические занятия по прикладным навыкам." },
      seminar: { label: "Семинар", text: "Выступления о технологиях и предпринимательстве." },
      meetup: { label: "Встреча сообщества", text: "Знакомство участников и обмен идеями." },
    },
    registration: {
      open: "Регистрация открыта",
      soon: "Регистрация скоро откроется",
      closed: "Регистрация закрыта",
      completed: "Завершено",
    },
    register: "Зарегистрироваться",
    online: "Онлайн",
    dateTbd: "Дата будет объявлена",
  },
  join: {
    title: "Присоединиться к Kvantics",
    lead: "Мы ждём студентов, которые хотят учиться, создавать, сотрудничать и внедрять инновации. Продвинутые технические навыки не требуются.",
    who: {
      title: "Кто может присоединиться",
      text: "Университетские студенты, которым интересны технологии, инженерия, инновации или предпринимательство. Для подачи заявки не нужны продвинутые технические навыки — главное, желание учиться и создавать.",
    },
    gains: {
      title: "Что получают участники",
      items: [
        { title: "Практический опыт", text: "Развивай навыки на реальных проектах." },
        { title: "Команда", text: "Знакомься со студентами с общими целями и собирай команду." },
        { title: "Возможности соревноваться", text: "Участвуй в хакатонах и конкурсах в составе команды." },
        { title: "Поддержка идей", text: "Работай над тем, чтобы довести перспективную идею до прототипа и продукта." },
        { title: "Среда для обучения", text: "Практическое обучение техническим и профессиональным навыкам." },
        { title: "Сообщество", text: "Общайся с технологическим сообществом на событиях и встречах." },
      ],
    },
    opportunities: {
      title: "Возможности внутри Kvantics",
      lead: "Выбери направление по своим интересам:",
    },
    why: {
      title: "Зачем становиться участником",
      paragraphs: [
        "Одной теории недостаточно. Навыки растут быстрее всего, когда работаешь над реальным проектом, ошибаешься, решаешь задачи в команде и видишь результат. Kvantics создаёт для этого среду.",
        "Здесь можно найти команду, начать воплощать идею и проверить то, что ты создаёшь, на соревнованиях и событиях.",
      ],
    },
    looking: {
      title: "Кого мы ищем",
      items: [
        { title: "Тех, кто хочет учиться", text: "Людей, которым нравится осваивать новое." },
        { title: "Тех, кто хочет создавать", text: "Людей, готовых превращать идеи в реальный результат." },
        { title: "Командных игроков", text: "Тех, кто любит работать вместе и делиться знаниями." },
        { title: "Открытых новым идеям", text: "Тех, кто задаёт вопросы и пробует новые подходы." },
      ],
      banner: "Только начинаешь? Это нормально. Мотивации и желания учиться достаточно для первого шага.",
    },
    cta: {
      title: "Сделай первый шаг",
      text: "Заполни анкету и стань частью сообщества Kvantics.",
    },
    workPointer: { text: "Ваш бизнес или организация хотят сотрудничать?", link: "Перейти к странице сотрудничества" },
  },
  work: {
    title: "Сотрудничать с нами",
    lead: "Kvantics создаёт для бизнеса сайты, программное обеспечение и цифровые решения — с энергией студентов и опытом реальных проектов.",
    services: {
      title: "Что мы можем делать вместе",
      items: [
        { title: "Разработка сайтов", text: "Современные сайты для вашего ресторана, барбершопа, интернет-магазина или другого бизнеса." },
        { title: "Разработка ПО", text: "Программные решения и внутренние инструменты под задачи вашего бизнеса." },
        { title: "Цифровые решения", text: "Цифровые платформы, упрощающие общение с клиентами и повседневную работу." },
        { title: "Технологические проекты", text: "Проекты на основе инженерии, автоматизации и технологий." },
        { title: "Инновационные инициативы", text: "Совместное исследование и прототипирование новых продуктов и идей." },
      ],
    },
    whoFor: {
      title: "Для кого",
      text: "Рестораны, барбершопы, интернет-магазины и другой бизнес, которому нужна цифровая поддержка.",
    },
    expectations: {
      title: "Что важно знать",
      text: "Kvantics — инициатива, которую ведут студенты, и над проектами работают участники Kvantics. Объём и условия сотрудничества мы определяем вместе после рассмотрения вашей заявки.",
    },
    how: {
      title: "Как начать",
      text: "Коротко опишите потребность вашего бизнеса или идею проекта в анкете.",
    },
    backToJoin: { text: "Хотите стать участником?", link: "Перейти к странице вступления" },
  },
  footer: {
    description: "Студенческое сообщество вокруг технологий, инженерии и инноваций.",
    pages: "Страницы",
    involved: "Участие",
    contact: "Контакты",
    contactText: "Пока для связи используйте форму заявки.",
    rights: "Все права защищены.",
  },
  notFound: {
    title: "Страница не найдена",
    text: "Такой страницы не существует, или она была перемещена.",
    back: "На главную",
  },
};

const dictionaries: Record<Locale, Dictionary> = { az, en, ru };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
