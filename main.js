// =============================================
//  LITHUANIA HONORARY CONSULATE — CAMEROON
//  main.js — Translations + Dark Mode + UI
// =============================================

// ── TRANSLATIONS ────────────────────────────
const translations = {
  en: {
    // Topbar
    'topbar.cooperation': 'Lithuanian Development Cooperation',
    'topbar.baltic':      'Strategy of the Baltic Sea Region',
    'topbar.gateway':     'Official Gateway of Lithuania',
    'topbar.study':       'Study in Lithuania',
    'topbar.travel':      'Visit Lithuania',
    'topbar.review':      'Lithuanian Foreign Policy Review',
    // Logo
    'logo.title': 'Republic of Lithuania',
    'logo.sub':   'Honorary Consulate · Yaoundé, Cameroon',
    // Nav
    'nav.about':    'About Lithuania',
    'nav.investment':'Investment',
    'nav.education':'Education',
    'nav.consular': 'Consular Info',
    'nav.consul':   'Our Consul',
    'nav.faq':      'FAQ',
    'nav.contact':  'Contact',
    // Flags
    'flag.lt': 'Lithuania',
    'flag.cm': 'Cameroon',
    // Hero
    'hero.tag':          "Lithuania's Honorary Consul in Yaoundé",
    'hero.title':        'The Only Lithuanian Representation\nin Cameroon',
    'hero.desc':         'Building bridges between Lithuania and Cameroon — fostering culture, trade, education, and cooperation.',
    'hero.btn.consular': 'Consular Services',
    'hero.btn.contact':  'Contact Us',
    // Info bar
    'info.location.label': 'Location',
    'info.location.value': 'Mbn Global Education, Yaoundé',
    'info.hours.label':    'Opening Hours',
    'info.hours.value':    'Mon–Fri: 9:00 – 13:00',
    'info.phone.label':    'Phone',
    'info.email.label':    'Email',
    // Welcome
    'welcome.tag':   'Welcome',
    'welcome.title': 'Discover Lithuania',
    'welcome.p1':    'If you really want to know Lithuania, you must first begin to get to know its people. Most Lithuanians are very sincere, hospitable and helpful — and, in fact, we expect the same treatment in return from our guests.',
    'welcome.p2':    'Lithuania is a country of seemingly endless forests, lakes scattered across its landscape, rivers that criss-cross the country, and the unforgettably beautiful Curonian Spit bathed by the Baltic Sea. A UNESCO World Heritage Site, it is a land of culture, history, and innovation.',
    'welcome.p3':    'Whether you are drawn by its medieval old towns, its vibrant startup scene, or the warmth of its people — Lithuania awaits you. We are pleased to welcome citizens of Cameroon and West Africa to explore everything this remarkable nation has to offer.',
    'welcome.btn':   'Learn More',
    'welcome.card1.title': 'Nature & Culture',
    'welcome.card1.text':  'Curonian Spit, Aukštaitija National Park, Vilnius Old Town — UNESCO heritage sites of extraordinary beauty.',
    'welcome.card2.title': 'Innovation Hub',
    'welcome.card2.text':  'Lithuania ranks among Europe\'s top fintech ecosystems with a thriving startup community and EU digital single market access.',
    'welcome.card3.title': 'Academic Excellence',
    'welcome.card3.text':  'World-class universities offering programmes in English. Affordable tuition and living costs within the European Union.',
    // About
    'about.tag':   'About',
    'about.title': 'About Lithuania',
    'about.desc':  'A proud Baltic nation with a rich history, vibrant culture, and a growing presence on the global stage.',
    'about.card1.title': 'History & Heritage',
    'about.card1.text':  'Lithuania is one of Europe\'s oldest nations, with a history stretching back over a millennium. Its Old Town of Vilnius is a UNESCO World Heritage Site, and its cultural identity is deeply rooted in its language, folklore, and traditions.',
    'about.card2.title': 'EU & NATO Member',
    'about.card2.text':  'A member of the European Union and NATO since 2004, Lithuania is a stable and growing democracy at the heart of the Baltic region, with strong rule of law and a business-friendly environment.',
    'about.card3.title': 'Digital Economy',
    'about.card3.text':  'Lithuania has one of Europe\'s fastest-growing fintech sectors and has attracted over 200 licensed financial institutions. It offers a highly skilled workforce, competitive costs, and full EU market access.',
    'about.card4.title': 'Global Relations',
    'about.card4.text':  'Lithuania maintains strong diplomatic ties worldwide and is committed to international development cooperation, contributing to peace and sustainable growth in partner countries across Africa and beyond.',
    // Investment
    'invest.tag':   'Opportunities',
    'invest.title': 'Investment Opportunities',
    'invest.desc':  "Lithuania offers a strategic gateway into the European Union's single market of 450 million consumers.",
    'invest.card1.title': 'Fintech & Finance',
    'invest.card1.text':  "Lithuania is Europe's fastest-growing fintech hub. The Bank of Lithuania's SEMI framework allows rapid licencing for e-money and payment institutions with full EU passporting rights.",
    'invest.card2.title': 'Life Sciences & Biotech',
    'invest.card2.text':  'A booming life sciences cluster including genomics, laser technology, and medical devices — backed by world-class research institutions and EU-funded R&D grants.',
    'invest.card3.title': 'Manufacturing & Logistics',
    'invest.card3.text':  'Strategic Baltic location with excellent logistics infrastructure connecting Eastern and Western Europe. Competitive labour costs with a highly educated workforce.',
    'invest.card4.title': 'Green Energy',
    'invest.card4.text':  'Lithuania is investing heavily in renewable energy infrastructure including offshore wind, solar, and green hydrogen, offering partnership opportunities for international investors.',
    'invest.card5.title': 'IT & Shared Services',
    'invest.card5.text':  'Global companies including Barclays, Danske Bank, and Western Union have established major IT and shared service centres in Lithuania, drawn by talent and cost efficiency.',
    'invest.card6.title': 'Agriculture & Food',
    'invest.card6.text':  'Rich agricultural land and strong food processing industry. Opportunities for joint ventures in organic farming, dairy, and processed food exports to EU markets.',
    'invest.cta':     'Interested in investing in Lithuania? The Consulate can facilitate initial contacts with Invest Lithuania, the national investment promotion agency.',
    'invest.cta.btn': 'Get in Touch',
    // Education
    'edu.tag':   'Education & Research',
    'edu.title': 'Study & Research in Lithuania',
    'edu.desc':  "Lithuania's universities offer internationally recognised degrees in a welcoming European environment.",
    'edu.why.title':  'Why Study in Lithuania?',
    'edu.li1.strong': 'EU-recognised degrees',
    'edu.li1.text':   'Qualifications accepted throughout the European Union and beyond.',
    'edu.li2.strong': 'English-taught programmes',
    'edu.li2.text':   "Hundreds of Bachelor's, Master's, and PhD programmes in English across all disciplines.",
    'edu.li3.strong': 'Affordable tuition',
    'edu.li3.text':   'Annual fees from €2,000–€5,000, significantly lower than Western Europe or North America.',
    'edu.li4.strong': 'Scholarships available',
    'edu.li4.text':   'The Lithuanian Government offers scholarships for students from partner and developing countries.',
    'edu.li5.strong': 'Safe and welcoming',
    'edu.li5.text':   "Lithuania consistently ranks among Europe's safest countries with a strong international student community.",
    'edu.li6.strong': 'Research excellence',
    'edu.li6.text':   'Vilnius University (est. 1579) and Kaunas University of Technology are recognised in global rankings.',
    'edu.portal.btn': 'Study in Lithuania Portal',
    'uni.vilnius': 'Founded in 1579 — one of the oldest universities in Northern Europe. Strong programmes in law, medicine, natural sciences, and humanities.',
    'uni.kaunas':  "Lithuania's largest technical university, ranked among the world's top 5% in engineering and technology fields.",
    'uni.health':  'A leading institution for medicine, pharmacy, and veterinary sciences — offering English-medium medical degrees.',
    'uni.ism':     'Top-ranked business school with international accreditations, offering MBA and executive education programmes.',
    // Consular
    'consular.tag':   'Consular Services',
    'consular.title': 'Consular Information',
    'consular.desc':  'The Honorary Consulate provides a range of consular assistance services to Lithuanian citizens and Cameroonian nationals seeking to engage with Lithuania.',
    'consular.card1.title': 'Visa Information',
    'consular.card1.text':  'Cameroonian nationals wishing to apply for a Lithuanian Schengen visa should submit their application through the French Embassy in Yaoundé, as France manages Lithuania\'s Schengen visa processing in Cameroon. We provide guidance on required documentation and the process.',
    'consular.card1.link':  'Read visa FAQ →',
    'consular.card2.title': 'Emergency Assistance',
    'consular.card2.text':  'Lithuanian citizens in Cameroon in distress can contact the Consulate for emergency assistance including liaison with Lithuanian authorities, welfare checks, and emergency documentation.',
    'consular.card2.link':  'Contact for emergencies →',
    'consular.card3.title': 'Document Legalisation',
    'consular.card3.text':  'Assistance with apostille, document authentication, and legalisation services for documents to be used in Lithuania or Cameroon. Notarial acts where applicable.',
    'consular.card3.link':  'Enquire now →',
    'consular.card4.title': 'Business Support',
    'consular.card4.text':  'Facilitation of business contacts, trade introductions, and commercial representation between Cameroon and Lithuania. Support for bilateral trade missions and delegations.',
    'consular.card4.link':  'Get support →',
    'consular.card5.title': 'Student Support',
    'consular.card5.text':  'Guidance for Cameroonian students applying to Lithuanian universities, including information on admissions, scholarships, student visas, and living in Lithuania.',
    'consular.card5.link':  'Study in Lithuania →',
    'consular.card6.title': 'Information & Referrals',
    'consular.card6.text':  'General information about Lithuania, referrals to relevant Lithuanian government agencies, embassies, and institutions for matters requiring full diplomatic representation.',
    'consular.card6.link':  'Ask a question →',
    'hours.title': 'Consulate Opening Hours',
    'hours.mth':   'Monday – Thursday',
    'hours.fri':   'Friday',
    'hours.sat':   'Saturday – Sunday',
    'hours.ph':    'Public Holidays',
    'hours.open':  'Open',
    'hours.closed':'Closed',
    'hours.note':  'Appointments are recommended. Please email or call in advance for consular services.',
    // Consul / team
    'consul.tag':   'Our Representative',
    'consul.title': 'The Honorary Consul & Team',
    'consul.desc':  'Meet the team dedicated to strengthening ties between Lithuania and Cameroon.',
    'consul.role':  'Honorary Consul of the Republic of Lithuania in Cameroon',
    'consul.bio1':  'Mr. Deli Sarsar serves as the Honorary Consul of the Republic of Lithuania in Cameroon, appointed to represent Lithuanian interests and strengthen bilateral relations between Lithuania and Cameroon. Based in Yaoundé, he is the sole official representative of Lithuania in the country.',
    'consul.bio2':  'The Honorary Consulate is based behind the Mbn Global Education campus in Yaoundé. Entrance at the back. Mr. Sarsar works to connect Cameroonian students and professionals with international academic opportunities, including pathways to study in Lithuania and other EU member states.',
    'consul.bio3':  'Additionally, Mr. Sarsar leads Prime Nexus, a technology firm that partners with businesses and institutions worldwide to design, secure, and operate technology meeting international standards — specialising in cloud infrastructure, cybersecurity, data management, and software delivery.',
    'consul.bio4':  'Through these combined roles, Mr. Sarsar actively promotes cultural exchange, educational partnerships, technology cooperation, and economic ties between Lithuania and Cameroon.',
    'consul.tag1':  'Honorary Consul',
    'consul.tag2':  'Education',
    'consul.tag3':  'Technology',
    'consul.tag4':  'Bilateral Relations',
    'consul.tag5':  'EU Partnerships',
    'team.title':    'The Consulate Team',
    'team.member1.name': 'Consular Liaison Officer',
    'team.member1.role': 'Handles consular enquiries, documentation and citizen assistance for Lithuanian nationals in Cameroon.',
    'team.member2.name': 'Education Advisor',
    'team.member2.role': 'Specialist in Lithuanian university admissions, scholarship applications, and student visa guidance for Cameroonian applicants.',
    'team.member3.name': 'Trade & Commerce Officer',
    'team.member3.role': 'Facilitates business introductions, trade enquiries, and investment support between Lithuanian and Cameroonian enterprises.',
    'team.note': 'For appointments and enquiries, please contact the consulate directly via email or telephone.',
    // Cooperation
    'coop.tag':   'Partnership',
    'coop.title': 'Lithuanian Development Cooperation',
    'coop.desc':  'Lithuania is committed to supporting sustainable development globally through official development assistance and partnership programmes.',
    'coop.p1':    'Lithuania implements development cooperation through the Ministry of Foreign Affairs and in partnership with UN agencies, EU institutions, and bilateral partners. Key focus areas include democracy and good governance, education, capacity building, and civil society support.',
    'coop.p2':    'Lithuania contributes to the EU\'s collective development assistance framework and maintains bilateral cooperation programmes with a growing number of partner countries. The Baltic Development Cooperation initiative also brings together Estonia, Latvia, and Lithuania in joint projects.',
    'coop.baltic.title': 'Strategy of the Baltic Sea Region',
    'coop.baltic.text':  'The EU Strategy for the Baltic Sea Region (EUSBSR) is a macro-regional strategy promoting cooperation on environment, transport, energy, and economic development across the Baltic Sea area. Lithuania is an active participant and champion of this regional framework.',
    'coop.btn': 'Lithuanian MFA →',
    'coop.pillar1.title': 'Democracy & Governance',
    'coop.pillar1.text':  'Supporting democratic institutions, rule of law, and transparent governance in partner countries.',
    'coop.pillar2.title': 'Education & Capacity Building',
    'coop.pillar2.text':  'Scholarships, training programmes, and knowledge-transfer initiatives for developing nations.',
    'coop.pillar3.title': 'Civil Society',
    'coop.pillar3.text':  'Supporting NGOs and civil society organisations that advance human rights and democratic values.',
    'coop.pillar4.title': 'Sustainable Development',
    'coop.pillar4.text':  'Aligned with the UN Sustainable Development Goals, contributing to the 2030 Agenda for Sustainable Development.',
    // FAQ
    'faq.tag':   'Questions',
    'faq.title': 'Frequently Asked Questions',
    'faq.desc':  'Find answers to the most common questions about the consulate and visiting Lithuania.',
    'faq.q1': 'What is an Honorary Consul and what services can they provide?',
    'faq.a1': 'An Honorary Consul is an unpaid representative of a foreign state, typically a local citizen, appointed to perform limited consular functions. Unlike a career consul, an Honorary Consul cannot issue passports or Schengen visas but can provide information, assistance in emergencies, notarial services, and act as a point of contact between the two countries.',
    'faq.q2': 'How do I apply for a Schengen visa to visit Lithuania?',
    'faq.a2': 'Cameroonian nationals require a Schengen visa to enter Lithuania. Applications must be submitted at the nearest Lithuanian Embassy with consular jurisdiction over Cameroon — the Embassy of Lithuania in Cairo, Egypt or the Embassy in Pretoria, South Africa. The Consulate can provide guidance and documentation advice but does not process visa applications directly.',
    'faq.q3': 'Can Lithuanian citizens in Cameroon get emergency help from the Consulate?',
    'faq.a3': 'Yes. Lithuanian citizens in distress in Cameroon should contact the Consulate immediately. We can assist with emergency liaison to Lithuanian authorities, contact with family members, help in case of accident or hospitalisation, and emergency travel document facilitation in coordination with the Lithuanian Embassy in Cairo or Pretoria.',
    'faq.q4': 'What scholarships are available for Cameroonians to study in Lithuania?',
    'faq.a4': 'The Lithuanian Government offers state scholarships for students from developing countries, including Cameroon, under its development cooperation programme. These are typically full or partial scholarships for Master\'s and PhD programmes. Additionally, many Lithuanian universities offer their own international scholarships. Contact the Consulate or visit Mbn Global Education for up-to-date information.',
    'faq.q5': 'What are the main business sectors for Cameroon–Lithuania cooperation?',
    'faq.a5': 'Key areas of mutual interest include agriculture and agro-processing, timber and wood products, information technology, renewable energy, education services, and healthcare. Lithuania has particular strengths in fintech, laser technology, and advanced manufacturing. The Consulate can facilitate introductions to Lithuanian businesses and trade organisations.',
    'faq.q6': 'Is an appointment required to visit the Consulate?',
    'faq.a6': 'Appointments are strongly recommended to ensure you receive proper attention and that the relevant documentation is prepared in advance. Please contact us by phone or email during business hours to schedule an appointment. Walk-ins may be received subject to availability.',
    'faq.q7': 'How can I get documents apostilled or legalised for use in Lithuania?',
    'faq.a7': 'Cameroon is a signatory to the Hague Apostille Convention. Documents issued in Cameroon for use in Lithuania must be apostilled by the competent Cameroonian authority (typically the Ministry of Justice). The Consulate can provide guidance on this process and advise on which Lithuanian authorities need to receive the documents.',
    // Review
    'review.tag':   'Publications',
    'review.title': 'Lithuanian Foreign Policy Review',
    'review.desc':  "Stay informed with Lithuania's official foreign policy publications and international positions.",
    'review.card1.tag':   'Foreign Policy',
    'review.card1.title': "Lithuania's Global Engagement",
    'review.card1.text':  "Lithuania's foreign policy priorities centre on Euro-Atlantic integration, regional security, democracy promotion, and development cooperation with partner nations worldwide.",
    'review.card2.tag':   'Diplomacy',
    'review.card2.title': 'Africa–Lithuania Relations',
    'review.card2.text':  'Lithuania is expanding its diplomatic footprint in Sub-Saharan Africa through Honorary Consulates, development programmes, and growing trade and educational partnerships.',
    'review.card3.tag':   'Security',
    'review.card3.title': 'Baltic Security Framework',
    'review.card3.text':  'As a NATO member and EU partner, Lithuania actively contributes to European and international security, including peacekeeping missions and cybersecurity cooperation.',
    'review.btn': 'Read the Full Review →',
    // Contact
    'contact.tag':          'Get in Touch',
    'contact.title':        'Contact Us',
    'contact.desc':         'We welcome enquiries from Lithuanian citizens, Cameroonian nationals, businesses, and institutions.',
    'contact.consul.name':  'Honorary Consulate of Lithuania',
    'contact.consul.sub':   'in Cameroon – Yaoundé',
    'contact.addr.label':   'Address',
    'contact.addr.value':   'Mbn Global Education – Campus De Yaoundé\nYaoundé, Cameroon',
    'contact.hours.label':  'Office Hours',
    'contact.hours.value':  'Monday – Thursday: 9:00 – 13:00\nFriday: 9:00 – 12:00',
    'contact.phone.label':  'Telephone',
    'contact.email.label':  'Email',
    'emergency.title': '🚨 Emergency Contact',
    'emergency.text':  'For Lithuanian citizens in emergency situations outside office hours, please contact the Embassy of Lithuania in Cairo, Egypt or Pretoria, South Africa, or the Lithuanian MFA duty line at +370 5 236 2516.',
    'form.title':             'Send a Message',
    'form.name':              'Full Name *',
    'form.email':             'Email Address *',
    'form.subject':           'Subject *',
    'form.subject.placeholder':'Select a topic…',
    'form.opt1': 'Visa Information',
    'form.opt2': 'Emergency Assistance',
    'form.opt3': 'Document Legalisation',
    'form.opt4': 'Business / Investment',
    'form.opt5': 'Education / Scholarships',
    'form.opt6': 'General Enquiry',
    'form.message':       'Message *',
    'form.send':          'Send Message',
    'form.note':          'We aim to respond within 2 business days.',
    'form.success.title': 'Message Sent!',
    'form.success.text':  'Thank you for contacting the Honorary Consulate of Lithuania in Cameroon. We will respond to your enquiry within 2 business days.',
    'map.title':    'Find Us',
    'map.location': 'Mbn Global Education – Campus De Yaoundé, Cameroon',
    'map.note':     'Yaoundé, Centre Region, Cameroon',
    'map.btn':      'Open in Google Maps',
    // Slider
    'slider.tag':       'Discover Lithuania',
    'slider.title':     'A Country Worth Knowing',
    'slide1.location':  'Vilnius',
    'slide1.title':     'Vilnius Old Town',
    'slide1.desc':      'A stunning baroque cityscape and UNESCO World Heritage Site — the jewel of the Baltic.',
    'slide2.location':  'Neringa',
    'slide2.title':     'Curonian Spit',
    'slide2.desc':      'A unique sand dune peninsula stretching along the Baltic Sea — a UNESCO World Heritage Site.',
    'slide3.location':  'Trakai',
    'slide3.title':     'Trakai Island Castle',
    'slide3.desc':      'A magnificent Gothic island fortress rising from the serene waters of Lake Galvė.',
    'slide4.location':  'Aukštaitija',
    'slide4.title':     'Pristine Nature',
    'slide4.desc':      'Vast ancient forests, crystal-clear lakes, and peaceful river valleys — nature at its purest.',
    'slide5.location':  'Kaunas',
    'slide5.title':     'Kaunas — City of the Future',
    'slide5.desc':      'European Capital of Culture 2022 — a vibrant hub of art deco architecture, innovation, and nightlife.',
    // Misc
    'bilateral.text':   'Bilateral Cooperation',
    'theme.light':      'Light',
    'theme.dark':       'Dark',
    // Footer
    'footer.title':    'Republic of Lithuania',
    'footer.sub':      'Honorary Consulate · Yaoundé',
    'footer.tagline':  'Building bridges between Lithuania and Cameroon through diplomacy, culture, trade, and education.',
    'footer.col1':     'Consulate',
    'footer.col2':     'Lithuania',
    'footer.col3':     'External Links',
    'footer.mfa':      'Ministry of Foreign Affairs',
    'footer.study':    'Study in Lithuania',
    'footer.invest':   'Invest Lithuania',
    'footer.copy':     '© 2026 Honorary Consulate of Lithuania in Cameroon. All rights reserved.',
  },

  fr: {
    'topbar.cooperation': 'Coopération au développement lituanienne',
    'topbar.baltic':      'Stratégie de la région de la mer Baltique',
    'topbar.gateway':     'Portail officiel de la Lituanie',
    'topbar.study':       'Étudier en Lituanie',
    'topbar.travel':      'Visiter la Lituanie',
    'topbar.review':      'Revue de politique étrangère lituanienne',
    'logo.title': 'République de Lituanie',
    'logo.sub':   'Consulat honoraire · Yaoundé, Cameroun',
    'nav.about':     'À propos',
    'nav.investment':'Investissement',
    'nav.education': 'Éducation',
    'nav.consular':  'Info consulaire',
    'nav.consul':    'Notre Consul',
    'nav.faq':       'FAQ',
    'nav.contact':   'Contact',
    'flag.lt': 'Lituanie',
    'flag.cm': 'Cameroun',
    'hero.tag':          'Consul honoraire de Lituanie à Yaoundé',
    'hero.title':        'La seule représentation lituanienne\nau Cameroun',
    'hero.desc':         'Bâtir des ponts entre la Lituanie et le Cameroun — en favorisant la culture, le commerce, l\'éducation et la coopération.',
    'hero.btn.consular': 'Services consulaires',
    'hero.btn.contact':  'Nous contacter',
    'info.location.label': 'Emplacement',
    'info.location.value': 'Mbn Global Education, Yaoundé',
    'info.hours.label':    'Heures d\'ouverture',
    'info.hours.value':    'Lun–Ven : 9h00 – 13h00',
    'info.phone.label':    'Téléphone',
    'info.email.label':    'E-mail',
    'welcome.tag':   'Bienvenue',
    'welcome.title': 'Découvrir la Lituanie',
    'welcome.p1':    'Si vous voulez vraiment connaître la Lituanie, vous devez d\'abord commencer à connaître ses habitants. La plupart des Lituaniens sont très sincères, hospitaliers et serviables — et nous attendons le même traitement de la part de nos hôtes.',
    'welcome.p2':    'La Lituanie est un pays de forêts apparemment sans fin, de lacs dispersés dans ses paysages, de rivières qui sillonnent le pays, et de la magnifique Lagune de Courlande baignée par la mer Baltique. Site du patrimoine mondial de l\'UNESCO, c\'est une terre de culture, d\'histoire et d\'innovation.',
    'welcome.p3':    'Que vous soyez attirés par ses vieilles villes médiévales, son écosystème de startups dynamique, ou la chaleur de ses habitants — la Lituanie vous attend. Nous sommes heureux d\'accueillir les citoyens du Cameroun et d\'Afrique de l\'Ouest.',
    'welcome.btn':   'En savoir plus',
    'welcome.card1.title': 'Nature et Culture',
    'welcome.card1.text':  'Lagune de Courlande, Parc national d\'Aukštaitija, Vieille ville de Vilnius — sites du patrimoine de l\'UNESCO d\'une beauté extraordinaire.',
    'welcome.card2.title': 'Pôle d\'innovation',
    'welcome.card2.text':  'La Lituanie figure parmi les premiers écosystèmes fintech d\'Europe avec une communauté de startups florissante.',
    'welcome.card3.title': 'Excellence académique',
    'welcome.card3.text':  'Universités de classe mondiale proposant des programmes en anglais. Frais de scolarité abordables au sein de l\'Union européenne.',
    'about.tag':   'À propos',
    'about.title': 'À propos de la Lituanie',
    'about.desc':  'Une fière nation baltique avec une histoire riche, une culture dynamique et une présence croissante sur la scène mondiale.',
    'about.card1.title': 'Histoire et Patrimoine',
    'about.card1.text':  'La Lituanie est l\'une des nations les plus anciennes d\'Europe, avec une histoire s\'étendant sur plus d\'un millénaire. Sa vieille ville de Vilnius est un site du patrimoine mondial de l\'UNESCO.',
    'about.card2.title': 'Membre UE et OTAN',
    'about.card2.text':  'Membre de l\'Union européenne et de l\'OTAN depuis 2004, la Lituanie est une démocratie stable et croissante au cœur de la région baltique.',
    'about.card3.title': 'Économie numérique',
    'about.card3.text':  'La Lituanie possède l\'un des secteurs fintech à la croissance la plus rapide d\'Europe et a attiré plus de 200 institutions financières agréées.',
    'about.card4.title': 'Relations mondiales',
    'about.card4.text':  'La Lituanie maintient des liens diplomatiques forts dans le monde entier et s\'engage dans la coopération internationale au développement.',
    'invest.tag':   'Opportunités',
    'invest.title': 'Opportunités d\'investissement',
    'invest.desc':  "La Lituanie offre une passerelle stratégique vers le marché unique de l'Union européenne de 450 millions de consommateurs.",
    'invest.card1.title': 'Fintech et Finance',
    'invest.card1.text':  "La Lituanie est le pôle fintech à la croissance la plus rapide d'Europe.",
    'invest.card2.title': 'Sciences de la vie et Biotech',
    'invest.card2.text':  'Un cluster de sciences de la vie en plein essor incluant la génomique, la technologie laser et les dispositifs médicaux.',
    'invest.card3.title': 'Fabrication et Logistique',
    'invest.card3.text':  'Emplacement baltique stratégique avec une excellente infrastructure logistique reliant l\'Europe de l\'Est et de l\'Ouest.',
    'invest.card4.title': 'Énergie verte',
    'invest.card4.text':  'La Lituanie investit massivement dans les infrastructures d\'énergie renouvelable, notamment l\'éolien offshore, le solaire et l\'hydrogène vert.',
    'invest.card5.title': 'IT et Services partagés',
    'invest.card5.text':  'Des entreprises mondiales ont établi de grands centres IT en Lituanie, attirées par les talents et l\'efficacité des coûts.',
    'invest.card6.title': 'Agriculture et Alimentation',
    'invest.card6.text':  'Terres agricoles riches et industrie agroalimentaire solide. Opportunités de coentreprises en agriculture biologique et exportations vers l\'UE.',
    'invest.cta':     'Intéressé par l\'investissement en Lituanie ? Le Consulat peut faciliter les contacts initiaux avec Invest Lithuania.',
    'invest.cta.btn': 'Nous contacter',
    'edu.tag':   'Éducation et Recherche',
    'edu.title': 'Étudier et Rechercher en Lituanie',
    'edu.desc':  'Les universités lituaniennes offrent des diplômes internationalement reconnus dans un environnement européen accueillant.',
    'edu.why.title':  'Pourquoi étudier en Lituanie ?',
    'edu.li1.strong': 'Diplômes reconnus par l\'UE',
    'edu.li1.text':   'Qualifications acceptées dans toute l\'Union européenne et au-delà.',
    'edu.li2.strong': 'Programmes enseignés en anglais',
    'edu.li2.text':   'Des centaines de programmes de Licence, Master et Doctorat en anglais dans toutes les disciplines.',
    'edu.li3.strong': 'Frais de scolarité abordables',
    'edu.li3.text':   'Frais annuels de 2 000 à 5 000 €, nettement inférieurs à l\'Europe occidentale ou l\'Amérique du Nord.',
    'edu.li4.strong': 'Bourses disponibles',
    'edu.li4.text':   'Le gouvernement lituanien offre des bourses pour les étudiants des pays en développement, dont le Cameroun.',
    'edu.li5.strong': 'Sécurité et accueil',
    'edu.li5.text':   'La Lituanie figure régulièrement parmi les pays les plus sûrs d\'Europe avec une forte communauté étudiante internationale.',
    'edu.li6.strong': 'Excellence en recherche',
    'edu.li6.text':   "L'Université de Vilnius (fondée en 1579) et l'Université technologique de Kaunas sont reconnues dans les classements mondiaux.",
    'edu.portal.btn': 'Portail Étudier en Lituanie',
    'uni.vilnius': 'Fondée en 1579 — l\'une des plus anciennes universités d\'Europe du Nord. Solides programmes en droit, médecine, sciences naturelles et sciences humaines.',
    'uni.kaunas':  'La plus grande université technique de Lituanie, classée parmi les 5 % meilleures mondiales en ingénierie et technologie.',
    'uni.health':  'Institution de premier plan pour la médecine, la pharmacie et les sciences vétérinaires — offrant des diplômes de médecine en anglais.',
    'uni.ism':     'École de commerce de premier rang avec des accréditations internationales, offrant MBA et programmes de formation continue.',
    'consular.tag':   'Services consulaires',
    'consular.title': 'Informations consulaires',
    'consular.desc':  'Le Consulat honoraire fournit une gamme de services d\'assistance consulaire aux citoyens lituaniens et camerounais.',
    'consular.card1.title': 'Information sur les visas',
    'consular.card1.text':  'Les ressortissants camerounais souhaitant obtenir un visa Schengen pour la Lituanie doivent déposer leur demande auprès de l\'Ambassade de France à Yaoundé, la France gérant le traitement des visas Schengen lituaniens au Cameroun. Nous fournissons des conseils sur les documents requis et la procédure.',
    'consular.card1.link':  'Lire la FAQ sur les visas →',
    'consular.card2.title': 'Assistance d\'urgence',
    'consular.card2.text':  'Les citoyens lituaniens en détresse au Cameroun peuvent contacter le Consulat pour une assistance d\'urgence.',
    'consular.card2.link':  'Contacter pour urgences →',
    'consular.card3.title': 'Légalisation de documents',
    'consular.card3.text':  'Assistance avec l\'apostille, l\'authentification et la légalisation de documents pour usage en Lituanie ou au Cameroun.',
    'consular.card3.link':  'Faire une demande →',
    'consular.card4.title': 'Soutien aux entreprises',
    'consular.card4.text':  'Facilitation des contacts commerciaux et représentation commerciale entre le Cameroun et la Lituanie.',
    'consular.card4.link':  'Obtenir du soutien →',
    'consular.card5.title': 'Soutien aux étudiants',
    'consular.card5.text':  'Orientation pour les étudiants camerounais souhaitant s\'inscrire dans des universités lituaniennes.',
    'consular.card5.link':  'Étudier en Lituanie →',
    'consular.card6.title': 'Information et Renvois',
    'consular.card6.text':  'Informations générales sur la Lituanie et renvois aux agences gouvernementales lituaniennes compétentes.',
    'consular.card6.link':  'Poser une question →',
    'hours.title': 'Heures d\'ouverture du Consulat',
    'hours.mth':   'Lundi – Jeudi',
    'hours.fri':   'Vendredi',
    'hours.sat':   'Samedi – Dimanche',
    'hours.ph':    'Jours fériés',
    'hours.open':  'Ouvert',
    'hours.closed':'Fermé',
    'hours.note':  'Les rendez-vous sont recommandés. Veuillez nous contacter par e-mail ou téléphone avant votre visite.',
    'consul.tag':   'Notre Représentant',
    'consul.title': 'Le Consul honoraire et son équipe',
    'consul.desc':  'Rencontrez l\'équipe dédiée au renforcement des liens entre la Lituanie et le Cameroun.',
    'consul.role':  'Consul honoraire de la République de Lituanie au Cameroun',
    'consul.bio1':  'M. Deli Sarsar est le Consul honoraire de la République de Lituanie au Cameroun, nommé pour représenter les intérêts lituaniens et renforcer les relations bilatérales entre la Lituanie et le Cameroun. Basé à Yaoundé, il est le seul représentant officiel de la Lituanie dans le pays.',
    'consul.bio2':  'Le Consulat honoraire est situé derrière le campus de Mbn Global Education à Yaoundé. Entrée par l\'arrière. M. Sarsar s\'efforce de connecter les étudiants et professionnels camerounais avec des opportunités académiques internationales, notamment vers la Lituanie et d\'autres États membres de l\'UE.',
    'consul.bio3':  'M. Sarsar dirige également Prime Nexus, une société technologique qui accompagne les entreprises et institutions du monde entier pour concevoir, sécuriser et opérer des technologies aux standards internationaux — spécialisée en infrastructure cloud, cybersécurité, gestion des données et livraison logicielle.',
    'consul.bio4':  'À travers ces rôles combinés, M. Sarsar promeut activement les échanges culturels, les partenariats éducatifs, la coopération technologique et les liens économiques entre la Lituanie et le Cameroun.',
    'consul.tag1':  'Consul honoraire',
    'consul.tag2':  'Éducation',
    'consul.tag3':  'Technologie',
    'consul.tag4':  'Relations bilatérales',
    'consul.tag5':  'Partenariats UE',
    // Slider
    'slider.tag':       'Découvrir la Lituanie',
    'slider.title':     'Un pays qui mérite d\'être connu',
    'slide1.location':  'Vilnius',
    'slide1.title':     'Vieille ville de Vilnius',
    'slide1.desc':      'Un panorama baroque époustouflant et site du patrimoine mondial de l\'UNESCO — le joyau de la Baltique.',
    'slide2.location':  'Neringa',
    'slide2.title':     'Lagune de Courlande',
    'slide2.desc':      'Une péninsule de dunes de sable unique le long de la mer Baltique — protégée en tant que site du patrimoine mondial de l\'UNESCO.',
    'slide3.location':  'Trakai',
    'slide3.title':     'Château insulaire de Trakai',
    'slide3.desc':      'Une magnifique forteresse gothique insulaire se dressant des eaux sereines du lac Galvė.',
    'slide4.location':  'Aukštaitija',
    'slide4.title':     'Nature préservée',
    'slide4.desc':      'Vastes forêts anciennes, lacs aux eaux cristallines et paisibles vallées fluviales — la nature dans toute sa pureté.',
    'slide5.location':  'Kaunas',
    'slide5.title':     'Kaunas — Ville du futur',
    'slide5.desc':      'Capitale européenne de la culture 2022 — un pôle dynamique d\'architecture art déco, d\'innovation et de vie nocturne.',
    'bilateral.text':   'Coopération bilatérale',
    'theme.light':      'Clair',
    'theme.dark':       'Sombre',
    'team.title':    'L\'équipe du Consulat',
    'team.member1.name': 'Agent de liaison consulaire',
    'team.member1.role': 'Gère les demandes consulaires, la documentation et l\'assistance aux citoyens lituaniens au Cameroun.',
    'team.member2.name': 'Conseiller en éducation',
    'team.member2.role': 'Spécialiste des admissions universitaires lituaniennes, demandes de bourses et orientation visa étudiant.',
    'team.member3.name': 'Chargé du commerce',
    'team.member3.role': 'Facilite les introductions commerciales et le soutien aux investissements entre entreprises lituaniennes et camerounaises.',
    'team.note': 'Pour les rendez-vous et demandes, veuillez contacter le consulat directement par e-mail ou téléphone.',
    'coop.tag':   'Partenariat',
    'coop.title': 'Coopération au développement lituanienne',
    'coop.desc':  'La Lituanie s\'engage à soutenir le développement durable dans le monde entier.',
    'coop.p1':    'La Lituanie met en œuvre la coopération au développement par le biais du ministère des Affaires étrangères et en partenariat avec les agences des Nations Unies, les institutions de l\'UE et les partenaires bilatéraux.',
    'coop.p2':    'La Lituanie contribue au cadre d\'aide au développement collectif de l\'UE et maintient des programmes de coopération bilatérale avec un nombre croissant de pays partenaires.',
    'coop.baltic.title': 'Stratégie pour la région de la mer Baltique',
    'coop.baltic.text':  'La Stratégie de l\'UE pour la région de la mer Baltique (EUSBSR) est une stratégie macro-régionale promouvant la coopération sur l\'environnement, le transport, l\'énergie et le développement économique.',
    'coop.btn': 'Ministère lituanien des AE →',
    'coop.pillar1.title': 'Démocratie et Gouvernance',
    'coop.pillar1.text':  'Soutien aux institutions démocratiques, à l\'état de droit et à la gouvernance transparente dans les pays partenaires.',
    'coop.pillar2.title': 'Éducation et Renforcement des capacités',
    'coop.pillar2.text':  'Bourses, programmes de formation et initiatives de transfert de connaissances pour les nations en développement.',
    'coop.pillar3.title': 'Société civile',
    'coop.pillar3.text':  'Soutien aux ONG et organisations de la société civile qui défendent les droits de l\'homme et les valeurs démocratiques.',
    'coop.pillar4.title': 'Développement durable',
    'coop.pillar4.text':  'Aligné sur les Objectifs de développement durable des Nations Unies, contribuant à l\'Agenda 2030.',
    'faq.tag':   'Questions',
    'faq.title': 'Questions fréquemment posées',
    'faq.desc':  'Trouvez des réponses aux questions les plus courantes sur le consulat et la visite en Lituanie.',
    'faq.q1': 'Qu\'est-ce qu\'un Consul honoraire et quels services peut-il fournir ?',
    'faq.a1': 'Un Consul honoraire est un représentant non rémunéré d\'un État étranger, généralement un citoyen local, nommé pour exercer des fonctions consulaires limitées. Il ne peut pas délivrer de passeports ou de visas Schengen mais peut fournir des informations, une assistance en cas d\'urgence et des actes notariaux.',
    'faq.q2': 'Comment demander un visa Schengen pour visiter la Lituanie ?',
    'faq.a2': 'Les ressortissants camerounais doivent soumettre leur demande à l\'Ambassade de Lituanie au Caire, en Égypte, ou à l\'Ambassade de Pretoria, en Afrique du Sud. Le Consulat peut fournir des conseils sur la documentation requise.',
    'faq.q3': 'Les citoyens lituaniens au Cameroun peuvent-ils obtenir de l\'aide d\'urgence du Consulat ?',
    'faq.a3': 'Oui. Les citoyens lituaniens en détresse au Cameroun doivent contacter immédiatement le Consulat. Nous pouvons aider à la liaison d\'urgence avec les autorités lituaniennes, notamment les Ambassades du Caire ou de Pretoria.',
    'faq.q4': 'Quelles bourses sont disponibles pour les Camerounais étudiant en Lituanie ?',
    'faq.a4': 'Le gouvernement lituanien offre des bourses d\'État pour les étudiants des pays en développement, dont le Cameroun. Contactez le Consulat ou visitez Mbn Global Education pour des informations actualisées.',
    'faq.q5': 'Quels sont les principaux secteurs de coopération Cameroun-Lituanie ?',
    'faq.a5': 'Les domaines d\'intérêt mutuel comprennent l\'agriculture, les TIC, l\'énergie renouvelable, les services éducatifs et la santé. La Lituanie excelle dans la fintech et la technologie laser.',
    'faq.q6': 'Un rendez-vous est-il nécessaire pour visiter le Consulat ?',
    'faq.a6': 'Les rendez-vous sont fortement recommandés. Veuillez nous contacter par téléphone ou e-mail pendant les heures de bureau pour planifier un rendez-vous.',
    'faq.q7': 'Comment faire apostiller ou légaliser des documents pour usage en Lituanie ?',
    'faq.a7': 'Le Cameroun est signataire de la Convention de La Haye sur l\'apostille. Les documents camerounais pour usage en Lituanie doivent être apostillés par le Ministère de la Justice. Le Consulat peut vous guider.',
    'review.tag':   'Publications',
    'review.title': 'Revue de politique étrangère lituanienne',
    'review.desc':  'Restez informé des publications officielles de politique étrangère de la Lituanie.',
    'review.card1.tag':   'Politique étrangère',
    'review.card1.title': 'Engagement mondial de la Lituanie',
    'review.card1.text':  "Les priorités de la politique étrangère lituanienne se concentrent sur l'intégration euro-atlantique, la sécurité régionale et la coopération au développement.",
    'review.card2.tag':   'Diplomatie',
    'review.card2.title': 'Relations Afrique–Lituanie',
    'review.card2.text':  'La Lituanie élargit son empreinte diplomatique en Afrique subsaharienne grâce à des consulats honoraires et des programmes de développement.',
    'review.card3.tag':   'Sécurité',
    'review.card3.title': 'Cadre de sécurité baltique',
    'review.card3.text':  'En tant que membre de l\'OTAN, la Lituanie contribue activement à la sécurité européenne et internationale.',
    'review.btn': 'Lire la revue complète →',
    'contact.tag':   'Nous contacter',
    'contact.title': 'Contactez-nous',
    'contact.desc':  'Nous accueillons les demandes des citoyens lituaniens, camerounais, des entreprises et des institutions.',
    'contact.consul.name': 'Consulat honoraire de Lituanie',
    'contact.consul.sub':  'au Cameroun – Yaoundé',
    'contact.addr.label':  'Adresse',
    'contact.addr.value':  'Mbn Global Education – Campus De Yaoundé\nYaoundé, Cameroun',
    'contact.hours.label': 'Heures de bureau',
    'contact.hours.value': 'Lundi – Jeudi : 9h00 – 13h00\nVendredi : 9h00 – 12h00',
    'contact.phone.label': 'Téléphone',
    'contact.email.label': 'E-mail',
    'emergency.title': '🚨 Contact d\'urgence',
    'emergency.text':  'Pour les citoyens lituaniens en situation d\'urgence en dehors des heures de bureau, veuillez contacter l\'Ambassade de Lituanie au Caire, Égypte ou à Pretoria, Afrique du Sud, ou la permanence du MAE lituanien au +370 5 236 2516.',
    'form.title':              'Envoyer un message',
    'form.name':               'Nom complet *',
    'form.email':              'Adresse e-mail *',
    'form.subject':            'Sujet *',
    'form.subject.placeholder':'Sélectionner un sujet…',
    'form.opt1': 'Information sur les visas',
    'form.opt2': 'Assistance d\'urgence',
    'form.opt3': 'Légalisation de documents',
    'form.opt4': 'Affaires / Investissement',
    'form.opt5': 'Éducation / Bourses',
    'form.opt6': 'Demande générale',
    'form.message':       'Message *',
    'form.send':          'Envoyer le message',
    'form.note':          'Nous répondons dans un délai de 2 jours ouvrables.',
    'form.success.title': 'Message envoyé !',
    'form.success.text':  'Merci de contacter le Consulat honoraire de Lituanie au Cameroun. Nous répondrons à votre demande dans un délai de 2 jours ouvrables.',
    'map.title':    'Nous trouver',
    'map.location': 'Mbn Global Education – Campus De Yaoundé, Cameroun',
    'map.note':     'Yaoundé, Région du Centre, Cameroun',
    'map.btn':      'Ouvrir dans Google Maps',
    'footer.title':   'République de Lituanie',
    'footer.sub':     'Consulat honoraire · Yaoundé',
    'footer.tagline': 'Bâtir des ponts entre la Lituanie et le Cameroun par la diplomatie, la culture, le commerce et l\'éducation.',
    'footer.col1':  'Consulat',
    'footer.col2':  'Lituanie',
    'footer.col3':  'Liens externes',
    'footer.mfa':   'Ministère des Affaires étrangères',
    'footer.study': 'Étudier en Lituanie',
    'footer.invest':'Invest Lithuania',
    'footer.copy':  '© 2026 Consulat honoraire de Lituanie au Cameroun. Tous droits réservés.',
    'coop.tag': 'Partenariat',
  },

  lt: {
    'topbar.cooperation': 'Lietuvos vystomasis bendradarbiavimas',
    'topbar.baltic':      'Baltijos jūros regiono strategija',
    'topbar.gateway':     'Oficialus Lietuvos portalas',
    'topbar.study':       'Studijuok Lietuvoje',
    'topbar.travel':      'Aplankyti Lietuvą',
    'topbar.review':      'Lietuvos užsienio politikos apžvalga',
    'logo.title': 'Lietuvos Respublika',
    'logo.sub':   'Garbės konsulatas · Jaundė, Kamerūnas',
    'nav.about':     'Apie Lietuvą',
    'nav.investment':'Investicijos',
    'nav.education': 'Švietimas',
    'nav.consular':  'Konsulinė info',
    'nav.consul':    'Mūsų konsulas',
    'nav.faq':       'DUK',
    'nav.contact':   'Kontaktai',
    'flag.lt': 'Lietuva',
    'flag.cm': 'Kamerūnas',
    'hero.tag':          'Lietuvos garbės konsulas Jaundėje',
    'hero.title':        'Vienintelė Lietuvos atstovybė\nKamerūne',
    'hero.desc':         'Tiltų tiesimas tarp Lietuvos ir Kamerūno — kultūros, prekybos, švietimo ir bendradarbiavimo puoselėjimas.',
    'hero.btn.consular': 'Konsulinės paslaugos',
    'hero.btn.contact':  'Susisiekite',
    'info.location.label': 'Vieta',
    'info.location.value': 'Mbn Global Education, Jaundė',
    'info.hours.label':    'Darbo laikas',
    'info.hours.value':    'Pr–Pen: 9:00 – 13:00',
    'info.phone.label':    'Telefonas',
    'info.email.label':    'El. paštas',
    'welcome.tag':   'Sveiki atvykę',
    'welcome.title': 'Atraskite Lietuvą',
    'welcome.p1':    'Jei tikrai norite pažinti Lietuvą, pirmiausia turite susipažinti su jos žmonėmis. Dauguma lietuvių yra labai nuoširdūs, svetingi ir paslaugūs — ir iš tiesų mes tikimės tokio pat elgesio iš savo svečių.',
    'welcome.p2':    'Lietuva — tai šalis, regis, be galo tęsiančių miškų, ežerų, išbarstytų visoje šalyje, upių, kertančių kraštą, ir nepamirštumai gražios Kuršių nerijos, maudančios Baltijos jūroje.',
    'welcome.p3':    'Nesvarbu, ar jus vilioja viduramžių senamiesčiai, dinamiškas startuolių pasaulis, ar šiltų žmonių draugija — Lietuva laukia. Mielai kviečiame Kamerūno ir Vakarų Afrikos piliečius atrasti šios nuostabios šalies stebuklus.',
    'welcome.btn':   'Sužinoti daugiau',
    'welcome.card1.title': 'Gamta ir kultūra',
    'welcome.card1.text':  'Kuršių nerija, Aukštaitijos nacionalinis parkas, Vilniaus senamiestis — UNESCO paveldo objektai, stulbinantys grožiu.',
    'welcome.card2.title': 'Inovacijų centras',
    'welcome.card2.text':  'Lietuva yra tarp Europos pirmaujančių fintech ekosistemų su sparčiai augančia startuolių bendruomene.',
    'welcome.card3.title': 'Akademinė kompetencija',
    'welcome.card3.text':  'Pasaulinio lygio universitetai, siūlantys programas anglų kalba. Prieinamos studijų kainos Europos Sąjungoje.',
    'about.tag':   'Apie',
    'about.title': 'Apie Lietuvą',
    'about.desc':  'Išdidi Baltijos šalis su turtinga istorija, gyva kultūra ir augančiu vaidmeniu pasaulinėje arenoje.',
    'about.card1.title': 'Istorija ir paveldas',
    'about.card1.text':  'Lietuva yra viena seniausių Europos valstybių, kurios istorija siekia daugiau nei tūkstantmetį. Vilniaus senamiestis yra UNESCO pasaulio paveldo sąraše.',
    'about.card2.title': 'ES ir NATO narė',
    'about.card2.text':  'ES ir NATO narė nuo 2004 m., Lietuva yra stabili ir auganti demokratija Baltijos regiono širdyje.',
    'about.card3.title': 'Skaitmeninė ekonomika',
    'about.card3.text':  'Lietuva turi vieną greičiausiai augančių fintech sektorių Europoje ir pritraukė daugiau nei 200 licencijuotų finansinių institucijų.',
    'about.card4.title': 'Pasauliniai ryšiai',
    'about.card4.text':  'Lietuva palaiko tvirtus diplomatinius ryšius visame pasaulyje ir yra įsipareigojusi tarptautiniam vystomojo bendradarbiavimui.',
    'invest.tag':   'Galimybės',
    'invest.title': 'Investicinės galimybės',
    'invest.desc':  'Lietuva siūlo strateginį kelią į ES bendrąją rinką su 450 milijonų vartotojų.',
    'invest.card1.title': 'Fintech ir finansai',
    'invest.card1.text':  'Lietuva — greičiausiai augantis fintech centras Europoje.',
    'invest.card2.title': 'Gyvybės mokslai ir biotechnologijos',
    'invest.card2.text':  'Sparčiai augantis gyvybės mokslų klasteris, apimantis genomiką, lazerines technologijas ir medicinos prietaisus.',
    'invest.card3.title': 'Gamyba ir logistika',
    'invest.card3.text':  'Strateginė Baltijos padėtis su puikia logistikos infrastruktūra, jungiantia Rytų ir Vakarų Europą.',
    'invest.card4.title': 'Žalioji energetika',
    'invest.card4.text':  'Lietuva aktyviai investuoja į atsinaujinančios energijos infrastruktūrą: jūrų vėjo, saulės ir žaliojo vandenilio projektus.',
    'invest.card5.title': 'IT ir bendrosios paslaugos',
    'invest.card5.text':  'Pasaulinės kompanijos įkūrė svarbius IT centrus Lietuvoje, pritrauktos talentų ir išlaidų efektyvumo.',
    'invest.card6.title': 'Žemės ūkis ir maistas',
    'invest.card6.text':  'Turtinga žemės ūkio žemė ir stipri maisto perdirbimo pramonė. Galimybės ekologinėje žemdirbystėje.',
    'invest.cta':     'Domitės investicijomis Lietuvoje? Konsulatas gali padėti užmegzti pirminius ryšius su Invest Lithuania.',
    'invest.cta.btn': 'Susisiekite',
    'edu.tag':   'Švietimas ir tyrimai',
    'edu.title': 'Studijuoti ir tirti Lietuvoje',
    'edu.desc':  'Lietuvos universitetai siūlo tarptautiniu mastu pripažintus diplomus svetingoje Europos aplinkoje.',
    'edu.why.title':  'Kodėl verta studijuoti Lietuvoje?',
    'edu.li1.strong': 'ES pripažinti diplomai',
    'edu.li1.text':   'Kvalifikacijos, pripažintos visoje Europos Sąjungoje ir už jos ribų.',
    'edu.li2.strong': 'Programos anglų kalba',
    'edu.li2.text':   'Šimtai bakalauro, magistrantūros ir doktorantūros programų anglų kalba visose srityse.',
    'edu.li3.strong': 'Prieinamas mokestis',
    'edu.li3.text':   'Metinis mokestis nuo 2 000 iki 5 000 €, žymiai mažesnis nei Vakarų Europoje ar Šiaurės Amerikoje.',
    'edu.li4.strong': 'Stipendijų galimybės',
    'edu.li4.text':   'Lietuvos vyriausybė siūlo stipendijas studentams iš besivystančių šalių, įskaitant Kamerūną.',
    'edu.li5.strong': 'Saugi ir svetinga aplinka',
    'edu.li5.text':   'Lietuva nuolat priskiriama prie saugiausių Europos šalių su stipria tarptautinių studentų bendruomene.',
    'edu.li6.strong': 'Tyrimų kompetencija',
    'edu.li6.text':   'Vilniaus universitetas (įk. 1579) ir Kauno technologijos universitetas yra pripažinti pasaulio reitinguose.',
    'edu.portal.btn': 'Studijuok Lietuvoje portalas',
    'uni.vilnius': 'Įkurtas 1579 m. — vienas seniausių universitetų Šiaurės Europoje. Stiprios programos teisėje, medicinoje, gamtos moksluose ir humanitarinėse disciplinose.',
    'uni.kaunas':  'Didžiausias Lietuvos technologijų universitetas, priskiriamas prie geriausiųjų 5 % pasaulyje inžinerijos ir technologijų srityse.',
    'uni.health':  'Pirmaujanti institucija medicinoje, farmacijoje ir veterinarijoje — siūlanti medicinos studijų programas anglų kalba.',
    'uni.ism':     'Aukščiausiai vertinamų verslo mokyklų dėka tarptautinių akreditacijų turėtojas, siūlantis MBA ir vadovų ugdymo programas.',
    'consular.tag':   'Konsulinės paslaugos',
    'consular.title': 'Konsulinė informacija',
    'consular.desc':  'Garbės konsulatas teikia konsulinės pagalbos paslaugas Lietuvos piliečiams ir Kamerūno gyventojams.',
    'consular.card1.title': 'Vizų informacija',
    'consular.card1.text':  'Kamerūno piliečiai, norintys gauti Lietuvos Šengeno vizą, savo prašymą turi pateikti Prancūzijos ambasadoje Jaundėje, nes Prancūzija Kamerūne tvarko Lietuvos Šengeno vizų išdavimą. Teikiame konsultacijas dėl reikalingų dokumentų ir procedūros.',
    'consular.card1.link':  'Skaityti vizų DUK →',
    'consular.card2.title': 'Pagalba nepaprastosios padėties atveju',
    'consular.card2.text':  'Bėdoje atsidūrę Lietuvos piliečiai Kamerūne gali kreiptis į Konsulatą dėl skubios pagalbos.',
    'consular.card2.link':  'Susisiekite dėl skubios pagalbos →',
    'consular.card3.title': 'Dokumentų legalizavimas',
    'consular.card3.text':  'Pagalba su apostiliavimu, autentifikavimu ir dokumentų legalizavimu naudojimui Lietuvoje ar Kamerūne.',
    'consular.card3.link':  'Teikti užklausą →',
    'consular.card4.title': 'Verslo palaikymas',
    'consular.card4.text':  'Verslo kontaktų sudarymas ir prekybinės atstovybės tarp Kamerūno ir Lietuvos.',
    'consular.card4.link':  'Gauti paramą →',
    'consular.card5.title': 'Pagalba studentams',
    'consular.card5.text':  'Orientacija Kamerūno studentams, stojant į Lietuvos universitetus: priėmimas, stipendijos, vizos.',
    'consular.card5.link':  'Studijuoti Lietuvoje →',
    'consular.card6.title': 'Informacija ir nuorodos',
    'consular.card6.text':  'Bendra informacija apie Lietuvą ir nuorodos į kompetentingas Lietuvos vyriausybės institucijas.',
    'consular.card6.link':  'Užduoti klausimą →',
    'hours.title': 'Konsulato darbo laikas',
    'hours.mth':   'Pirmadienis – Ketvirtadienis',
    'hours.fri':   'Penktadienis',
    'hours.sat':   'Šeštadienis – Sekmadienis',
    'hours.ph':    'Valstybinės šventės',
    'hours.open':  'Atidaryta',
    'hours.closed':'Uždaryta',
    'hours.note':  'Rekomenduojama iš anksto registruotis. Prašome susisiekti el. paštu arba telefonu.',
    'consul.tag':   'Mūsų atstovas',
    'consul.title': 'Garbės konsulas ir komanda',
    'consul.desc':  'Susipažinkite su komanda, skirtą stiprinti ryšius tarp Lietuvos ir Kamerūno.',
    'consul.role':  'Lietuvos Respublikos garbės konsulas Kamerūne',
    'consul.bio1':  'P. Deli Sarsar yra Lietuvos Respublikos garbės konsulas Kamerūne, paskirtas atstovauti Lietuvos interesams ir stiprinti abišalius santykius tarp Lietuvos ir Kamerūno. Įsikūręs Jaundėje, jis yra vienintelis oficialus Lietuvos atstovas šalyje.',
    'consul.bio2':  'Garbės konsulatas yra įsikūręs už Mbn Global Education miestelio Jaundėje. Įėjimas iš galinės pusės. P. Sarsar stengiasi sujungti Kamerūno studentus ir specialistus su tarptautinėmis akademinėmis galimybėmis, įskaitant studijų kelius Lietuvoje ir kitose ES valstybėse narėse.',
    'consul.bio3':  'Be to, p. Sarsar vadovauja „Prime Nexus" — technologijų įmonei, padedančiai verslo ir institucijoms visame pasaulyje kurti, apsaugoti ir valdyti technologijas, atitinkančias tarptautinius standartus — debesų infrastruktūros, kibernetinio saugumo, duomenų valdymo ir programinės įrangos pristatymo srityse.',
    'consul.bio4':  'Per šiuos sujungtus vaidmenis p. Sarsar aktyviai skatina kultūrinius mainus, švietimo partnerystes, technologijų bendradarbiavimą ir ekonominius ryšius tarp Lietuvos ir Kamerūno.',
    'consul.tag1':  'Garbės konsulas',
    'consul.tag2':  'Švietimas',
    'consul.tag3':  'Technologijos',
    'consul.tag4':  'Dvišaliai santykiai',
    'consul.tag5':  'ES partnerystė',
    // Slider
    'slider.tag':       'Atraskite Lietuvą',
    'slider.title':     'Šalis, kurią verta pažinti',
    'slide1.location':  'Vilnius',
    'slide1.title':     'Vilniaus senamiestis',
    'slide1.desc':      'Stulbinantis barokinis miesto peizažas ir UNESCO pasaulio paveldo objektas — Baltijos šalių perlas.',
    'slide2.location':  'Neringa',
    'slide2.title':     'Kuršių nerija',
    'slide2.desc':      'Unikali kopų pusiasalis, driekiantis palei Baltijos jūrą — saugomas kaip UNESCO pasaulio paveldo objektas.',
    'slide3.location':  'Trakai',
    'slide3.title':     'Trakų salos pilis',
    'slide3.desc':      'Didinga gotikos salos tvirtovė, iškilusi iš ramaus Galvės ežero vandenų.',
    'slide4.location':  'Aukštaitija',
    'slide4.title':     'Nepaliestos gamtos grožis',
    'slide4.desc':      'Didžiuliai seni miškai, skaidrūs ežerai ir ramios upių slėniai — gamta savo tyriausiu pavidalu.',
    'slide5.location':  'Kaunas',
    'slide5.title':     'Kaunas — Ateities miestas',
    'slide5.desc':      '2022 m. Europos kultūros sostinė — dinamiškas art deco architektūros, inovacijų ir naktinio gyvenimo centras.',
    'bilateral.text':   'Dvišalis bendradarbiavimas',
    'theme.light':      'Šviesi',
    'theme.dark':       'Tamsi',
    'team.title':    'Konsulato komanda',
    'team.member1.name': 'Konsulinių reikalų pareigūnas',
    'team.member1.role': 'Tvarko konsulų užklausas, dokumentaciją ir pilietinę pagalbą Lietuvos piliečiams Kamerūne.',
    'team.member2.name': 'Švietimo patarėjas',
    'team.member2.text': 'Specialistas Lietuvos universitetų stojimo, stipendijų paraiškų ir studijų vizų klausimais Kamerūno studentams.',
    'team.member2.role': 'Specialistas Lietuvos universitetų stojimo, stipendijų ir vizų klausimais Kamerūno studentams.',
    'team.member3.name': 'Prekybos ir ekonomikos pareigūnas',
    'team.member3.role': 'Palengvina verslo įvadus ir investicijų paramą tarp Lietuvos ir Kamerūno įmonių.',
    'team.note': 'Dėl susitikimų ir užklausų prašome susisiekti su konsulatu tiesiogiai el. paštu arba telefonu.',
    'coop.tag':   'Partnerystė',
    'coop.title': 'Lietuvos vystomasis bendradarbiavimas',
    'coop.desc':  'Lietuva yra įsipareigojusi remti tvarią plėtrą visame pasaulyje.',
    'coop.p1':    'Lietuva vykdo vystomojo bendradarbiavimo programas per Užsienio reikalų ministeriją ir kartu su JT agentūromis, ES institucijomis ir dvišaliais partneriais.',
    'coop.p2':    'Lietuva prisideda prie ES kolektyvinio paramos vystymuisi sistemos ir palaiko dvišalius bendradarbiavimo programas su vis daugiau šalių partnerių.',
    'coop.baltic.title': 'Baltijos jūros regiono strategija',
    'coop.baltic.text':  'ES Baltijos jūros regiono strategija (EUSBSR) yra makroregioninė strategija, skatinanti bendradarbiavimą aplinkosaugos, transporto, energetikos ir ekonominės plėtros srityse.',
    'coop.btn': 'Lietuvos URM →',
    'coop.pillar1.title': 'Demokratija ir valdymas',
    'coop.pillar1.text':  'Demokratinių institucijų, teisinės valstybės ir skaidraus valdymo rėmimas šalių partnerių atveju.',
    'coop.pillar2.title': 'Švietimas ir gebėjimų stiprinimas',
    'coop.pillar2.text':  'Stipendijos, mokymo programos ir žinių perdavimo iniciatyvos besivystančioms šalims.',
    'coop.pillar3.title': 'Pilietinė visuomenė',
    'coop.pillar3.text':  'NVO ir pilietinės visuomenės organizacijų, kurios gina žmogaus teises ir demokratines vertybes, rėmimas.',
    'coop.pillar4.title': 'Tvarus vystymasis',
    'coop.pillar4.text':  'Suderintas su JT Darnaus vystymosi tikslais, prisidedantis prie 2030 m. darbotvarkės.',
    'faq.tag':   'Klausimai',
    'faq.title': 'Dažnai užduodami klausimai',
    'faq.desc':  'Raskite atsakymus į dažniausius klausimus apie konsulatą ir apsilankymą Lietuvoje.',
    'faq.q1': 'Kas yra garbės konsulas ir kokias paslaugas jis teikia?',
    'faq.a1': 'Garbės konsulas yra neapmokamas užsienio valstybės atstovas, paprastai vietos pilietis, paskirtas atlikti ribotas konsulų funkcijas. Jis negali išduoti pasų ar Šengeno vizų, tačiau gali teikti informaciją, pagalbą ekstremaliais atvejais ir notarinius veiksmus.',
    'faq.q2': 'Kaip kreiptis dėl Šengeno vizos aplankyti Lietuvą?',
    'faq.a2': 'Kamerūno piliečiai privalo pateikti prašymą artimiausiai Lietuvos ambasadai — Kaire, Egipte, arba Pretorijos mieste, Pietų Afrikoje. Konsulatas gali suteikti informacinę pagalbą dokumentų klausimais.',
    'faq.q3': 'Ar Lietuvos piliečiai Kamerūne gali gauti pagalbą iš konsulato ekstremaliu atveju?',
    'faq.a3': 'Taip. Bėdoje atsidūrę Lietuvos piliečiai Kamerūne turėtų nedelsiant susisiekti su Konsulatu. Galime padėti koordinuoti su Lietuvos institucijomis ir Lietuvos ambasadomis Kaire ar Pretorijos mieste.',
    'faq.q4': 'Kokios stipendijos prieinamos Kamerūno studentams studijuoti Lietuvoje?',
    'faq.a4': 'Lietuvos Vyriausybė siūlo valstybines stipendijas studentams iš besivystančių šalių, įskaitant Kamerūną. Susisiekite su Konsulatu arba apsilankykite Mbn Global Education dėl aktualios informacijos.',
    'faq.q5': 'Kokie pagrindiniai Kamerūno ir Lietuvos bendradarbiavimo sektoriai?',
    'faq.a5': 'Pagrindinės abiejų šalių interesų sritys apima žemės ūkį, IT, atsinaujinančią energiją, švietimą ir sveikatos apsaugą. Lietuva ypač stipri fintech ir lazerių technologijų srityse.',
    'faq.q6': 'Ar reikia registruotis iš anksto, norint aplankyti Konsulatą?',
    'faq.a6': 'Rekomenduojama iš anksto registruotis. Prašome susisiekti el. paštu arba telefonu darbo valandomis susitikimui suplanuoti.',
    'faq.q7': 'Kaip apostiliuoti ar legalizuoti dokumentus naudojimui Lietuvoje?',
    'faq.a7': 'Kamerūnas yra Hagos apostilės konvencijos narys. Kamerūne išduoti dokumentai Lietuvoje naudoti turi būti apostiliuoti kompetentingos Kamerūno institucijos (paprastai Teisingumo ministerijos).',
    'review.tag':   'Leidiniai',
    'review.title': 'Lietuvos užsienio politikos apžvalga',
    'review.desc':  'Sekite oficialius Lietuvos užsienio politikos leidinius ir tarptautines pozicijas.',
    'review.card1.tag':   'Užsienio politika',
    'review.card1.title': 'Lietuvos globalus įsitraukimas',
    'review.card1.text':  'Lietuvos užsienio politikos prioritetai apima euro-atlantinę integraciją, regioninį saugumą ir bendradarbiavimą vystymuisi.',
    'review.card2.tag':   'Diplomatija',
    'review.card2.title': 'Afrikos–Lietuvos santykiai',
    'review.card2.text':  'Lietuva plečia diplomatinę veiklą Subsacharinėje Afrikoje per garbės konsulatus ir vystomojo bendradarbiavimo programas.',
    'review.card3.tag':   'Saugumas',
    'review.card3.title': 'Baltijos saugumo sistema',
    'review.card3.text':  'Kaip NATO narė, Lietuva aktyviai prisideda prie Europos ir tarptautinio saugumo, dalyvaudama taikos palaikymo misijose.',
    'review.btn': 'Skaityti visą apžvalgą →',
    'contact.tag':   'Susisiekite',
    'contact.title': 'Kontaktai',
    'contact.desc':  'Laukiame Lietuvos piliečių, Kamerūno gyventojų, įmonių ir institucijų kreipimųsi.',
    'contact.consul.name': 'Lietuvos garbės konsulatas',
    'contact.consul.sub':  'Kamerūne – Jaundėje',
    'contact.addr.label':  'Adresas',
    'contact.addr.value':  'Mbn Global Education – Campus De Yaoundé\nJaundė, Kamerūnas',
    'contact.hours.label': 'Darbo laikas',
    'contact.hours.value': 'Pirmadienis – Ketvirtadienis: 9:00 – 13:00\nPenktadienis: 9:00 – 12:00',
    'contact.phone.label': 'Telefonas',
    'contact.email.label': 'El. paštas',
    'emergency.title': '🚨 Pagalba ekstremaliais atvejais',
    'emergency.text':  'Lietuvos piliečiams ekstremaliais atvejais ne darbo valandomis: kreipkitės į Lietuvos ambasadą Kaire, Egipte arba Pretorijos mieste, Pietų Afrikoje, arba į LR URM budėtoją: +370 5 236 2516.',
    'form.title':              'Siųsti žinutę',
    'form.name':               'Vardas ir pavardė *',
    'form.email':              'El. pašto adresas *',
    'form.subject':            'Tema *',
    'form.subject.placeholder':'Pasirinkite temą…',
    'form.opt1': 'Vizų informacija',
    'form.opt2': 'Pagalba ekstremaliu atveju',
    'form.opt3': 'Dokumentų legalizavimas',
    'form.opt4': 'Verslas / Investicijos',
    'form.opt5': 'Švietimas / Stipendijos',
    'form.opt6': 'Bendra užklausa',
    'form.message':       'Žinutė *',
    'form.send':          'Siųsti žinutę',
    'form.note':          'Stengiamės atsakyti per 2 darbo dienas.',
    'form.success.title': 'Žinutė išsiųsta!',
    'form.success.text':  'Ačiū, kad susisiekėte su Lietuvos garbės konsulatu Kamerūne. Atsakysime į jūsų užklausą per 2 darbo dienas.',
    'map.title':    'Kaip mus rasti',
    'map.location': 'Mbn Global Education – Campus De Yaoundé, Kamerūnas',
    'map.note':     'Jaundė, Centrinė sritis, Kamerūnas',
    'map.btn':      'Atidaryti „Google" žemėlapiuose',
    'footer.title':   'Lietuvos Respublika',
    'footer.sub':     'Garbės konsulatas · Jaundė',
    'footer.tagline': 'Tiltų tiesimas tarp Lietuvos ir Kamerūno diplomatijos, kultūros, prekybos ir švietimo srityse.',
    'footer.col1':  'Konsulatas',
    'footer.col2':  'Lietuva',
    'footer.col3':  'Išorinės nuorodos',
    'footer.mfa':   'Užsienio reikalų ministerija',
    'footer.study': 'Studijuok Lietuvoje',
    'footer.invest':'Invest Lithuania',
    'footer.copy':  '© 2026 Lietuvos garbės konsulatas Kamerūne. Visos teisės saugomos.',
    'coop.tag': 'Partnerystė',
  }
};

// ── ACTIVE LANGUAGE ─────────────────────────
let currentLang = localStorage.getItem('lang') || 'en';

function applyTranslation(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  const t = translations[lang] || translations.en;

  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.textContent = t[key];
    }
  });

  // Update lang buttons active state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

// ── DARK MODE ───────────────────────────────
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

function initTheme() {
  const saved = localStorage.getItem('theme');
  // Default: light
  applyTheme(saved || 'light');
}

// ── MOBILE NAV ──────────────────────────────
function initNav() {
  const toggle = document.getElementById('nav-toggle');
  const nav    = document.getElementById('main-nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ── ACTIVE NAV ON SCROLL ────────────────────
function initScrollNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav a');
  const header   = document.querySelector('.header');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY + 120;
    let current = '';
    sections.forEach(sec => { if (scrollY >= sec.offsetTop) current = sec.id; });
    navLinks.forEach(link => {
      link.classList.toggle('active-nav', link.getAttribute('href') === `#${current}`);
    });
    header && header.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });
}

// ── FAQ ACCORDION ───────────────────────────
function initFaq() {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item   = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => {
        i.classList.remove('open');
        i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

// ── CONTACT FORM ────────────────────────────
window.handleSubmit = function(e) {
  e.preventDefault();
  const form    = e.target;
  const success = document.getElementById('form-success');
  form.style.display    = 'none';
  success.style.display = 'block';
  form.reset();
};

// ── SCROLL REVEAL ───────────────────────────
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll(
    '.about-card, .invest-card, .consular-card, .review-card, .welcome-card, .pillar, .uni-card, .team-card, .consul-profile'
  ).forEach(el => {
    el.classList.add('reveal-target');
    observer.observe(el);
  });
}

// ── LITHUANIA PHOTO SLIDER ──────────────────
function initSlider() {
  const track = document.getElementById('sliderTrack');
  const dots  = document.querySelectorAll('.dot');
  if (!track || !dots.length) return;

  let current  = 0;
  let autoPlay = null;
  const total  = 5;

  function goTo(n) {
    current = ((n % total) + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
  }

  function startAuto() {
    stopAuto();
    autoPlay = setInterval(() => goTo(current + 1), 5000);
  }
  function stopAuto() {
    clearInterval(autoPlay);
  }

  document.getElementById('sliderPrev')?.addEventListener('click', () => { goTo(current - 1); startAuto(); });
  document.getElementById('sliderNext')?.addEventListener('click', () => { goTo(current + 1); startAuto(); });
  dots.forEach((dot, i) => dot.addEventListener('click', () => { goTo(i); startAuto(); }));

  // Touch / swipe support
  let touchStartX = 0;
  track.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 40) { goTo(current + (dx < 0 ? 1 : -1)); startAuto(); }
  }, { passive: true });

  startAuto();
}

// ── INJECT ANIMATION CSS ────────────────────
function injectStyles() {
  const style = document.createElement('style');
  style.textContent = `
    .reveal-target {
      opacity: 0;
      transform: translateY(22px);
      transition: opacity 0.55s ease, transform 0.55s ease;
    }
    .reveal-target.revealed {
      opacity: 1;
      transform: none;
    }
    .nav a.active-nav {
      color: var(--green);
      background: var(--green-light);
    }
    .header.scrolled {
      box-shadow: 0 2px 16px rgba(0,0,0,0.12);
    }
  `;
  document.head.appendChild(style);
}

// ── INIT ────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  injectStyles();
  initTheme();
  initNav();
  initScrollNav();
  initFaq();
  initSlider();
  initReveal();

  // Apply saved language
  applyTranslation(currentLang);

  // Lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyTranslation(btn.dataset.lang));
  });

  // Theme toggle
  const themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      applyTheme(current === 'dark' ? 'light' : 'dark');
    });
  }
});
