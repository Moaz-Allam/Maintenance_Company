// Define translations
const translations = {
    en: {
        home: 'Home',
        about: 'About',
        services: 'Services',
        projects: 'Partners',
        english: 'العربية',
        contact: 'Contact Us',
        hero_title: 'Empowering Excellence in Maintenance and Operation',
        hero_description: 'Welcome to Maharat Al-Ghad Operation and Maintenance Company, where innovation meets dedication. We are committed to enhancing the quality of life through our comprehensive maintenance and operation services, ensuring excellence in every project we undertake.',
        all_services: 'All Services',
        read_more: 'Read More About Us',
        about_span: 'About',
        about_title: 'Innovating Maintenance and Operation for a Better Tomorrow',
        about_description: 'Maharat Al-Ghad Operation and Maintenance Company stands as a beacon of excellence in Saudi Arabia, providing top-notch protection and maintenance services. Established with a forward-thinking vision, we cater to a diverse market, ensuring high-quality and efficient maintenance of infrastructure and public facilities. Our mission is to improve the community\'s quality of life through our specialized services.',
        explore_more: 'Explore More',
        services_title: 'Our Services',
        services_description: 'Maharat Al-Ghad Operation and Maintenance Company offers a wide range of services to maintain and enhance buildings and facilities. From thorough cleaning and reliable maintenance to landscape care and efficient medical operations, we ensure top-quality and efficient service using the latest technologies and best practices.',
        cleaning_title: 'Comprehensive Cleaning Solutions',
        cleaning_description: 'General, glass, carpet, and furniture cleaning services to maintain the spotless for the environment.',
        maintenance_title: 'Reliable Building Maintenance & operation',
        maintenance_description: 'Preventive and repair maintenance for electrical, mechanical, plumbing, and other systems.',
        landscaping_title: 'External Landscapes and Gardening Care',
        landscaping_description: 'Gardening, irrigation, beautification, and regular, beautification upkeep of outdoor spaces.',
        Medical_Facility_title: 'Medical Facility Operation & support',
        Medical_Facility_description: 'Operational support for hospitals, medical complexes, and day surgery centers.',
        Specialized_Hospital_title: 'Specialized Hospital Support',
        Specialized_Hospital_description: 'Emergency, intensive care, and surgery. Support to guarantee patient safety.',
        Strategic_title: 'Strategic Planning and Management',
        Strategic_description: 'High efficiency and professionalism across all medical and facility operations.',
        see_more: 'See More',
        partners_title: "Our Partners",
        contact_title: 'For More Details Contact Us!',
        name_label: 'Name',
        email_label: 'Email',
        message_label: 'Message',
        submit_button: 'Submit',
        footer_home: 'Home',
        footer_about: 'About',
        footer_services: 'Services',
        footer_projects: 'Partners',
        footer_contact: 'Contact us at: lol@exmaple.com',
        copyright_text: '© 2024 Maharat Al-Ghad Operation and Maintenance Company. All rights reserved.',
        creator: 'This website created by: Eng Hussein Jumia',

        individuals_tap: 'Individuals Sector',
        business_tap: 'Business Sector',

        about_us: "About Us",
        mission: "Mission",
        mission_description: "We deliver professional services that meet international quality standards, exceeding client expectations and building sustainable partnerships in both government and private sectors.",
        vision: "Vision",
        vision_description: "To be the preferred and trusted partner for integrated building and facility operation and maintenance solutions, leading the sector in the Kingdom of Saudi Arabia.",
    },
    ar: {
        home: 'الرئيسية',
        about: 'عن الشركة',
        services: 'الخدمات',
        projects: 'العملاء',
        english: 'English',
        contact: 'تواصل معنا',
        hero_title: 'التميز في تقديم خدمات الصيانة والتشغيل',
        hero_description: 'شركة مهارة الغد محورًا لتوفير خدمات  للمباني، إضافة إلى خدمات التنظيف والصيانة للمباني الحكومية والخاصة. بفضل فريق عمل مؤهل ومدرب بشكل متقن، تستطيع الشركة تقديم خدمات صيانة شاملة وفعالة، تشمل تنظيف المباني والرعاية والصيانة للحدائق والمساحات الخارجية.',
        all_services: 'كل الخدمات',
        read_more: 'اقرأ المزيد عنا',
        about_span: 'عن الشركة',
        about_title: 'الابتكار في الصيانة والتشغيل من أجل غد أفضل',
        about_description: 'وتتسم شركة مهارة الغد بروح الابتكار والتطوير المستمر، وتسعى باستمرار لتحقيق معايير الجودة العالمية في جميع خدماتها. وبفضل التزامها بالتميز والكفاءة، تعد الشركة شريكًا موثوقًا لعملائها في مجالات الصيانة والتشغيل الطبي. بهذا الروح الشابة والمبتكرة، تسعى شركة مهارة الغد للتشغيل والصيانة لتكون الرائدة في قطاع خدمات الصيانة في المملكة العربية السعودية، كما تعمل الشركة باستمرار إلى تطوير وتحسين خدماتها وتوسيع نطاق عملها لتلبية التحديات المستقبلية ومتطلبات السوق',
        explore_more: 'استكشاف المزيد',
        services_title: 'خدماتنا',
        services_description: 'تقدم شركة مهارة الغد للصيانة والتشغيل مجموعة واسعة من الخدمات لصيانة وتحسين المباني والمرافق. من التنظيف الشامل والصيانة الموثوقة إلى رعاية الحدائق والعمليات الطبية الفعّالة، نضمن الخدمة عالية الجودة والفعالة باستخدام أحدث التقنيات وأفضل الممارسات.',
        cleaning_title: 'خدمات التنظيف للمباني',
        cleaning_description: 'تتضمن هذه الخدمات تنظيف المباني والمنشآت بشكل دوري وشامل، بما في ذلك التنظيف العام وتنظيف الزجاج وتنظيف السجاد والأثاث.',
        maintenance_title: 'خدمات صيانة المباني',
        maintenance_description: 'تتمثل هذه الخدمات في صيانة المباني والمرافق بشكل عام، وتشمل الصيانة الوقائية والتصليحية للأنظمة الكهربائية والميكانيكية والسباكة وغيرها، بما يضمن استمرارية عمل المباني بكفاءة عالية.',
        landscaping_title: 'خدمات الصيانة للمناظر الخارجية',
        landscaping_description: 'تتمثل هذه الخدمات في العناية بالحدائق والمناظر الطبيعية المحيطة بالمباني والمنشآت، بما يشمل الزراعة والري والتجميل والصيانة الدورية.',
        Medical_Facility_title: "التشغيل الطبي للمستشفيات والمجمعات الطبية",
        Medical_Facility_description: "تشمل هذه الخدمات توفير كادر متخصص لتشغيل المستشفيات والمجمعات الطبية ومراكز جراحة اليوم الواحد، بما في ذلك التخطيط الاستراتيجي وإدارة العمليات وتقديم الخدمات الطبية بكفاءة عالية.",
        Specialized_Hospital_title: "التشغيل الطبي للمستشفيات",
        Specialized_Hospital_description: "تعتبر هذه الخدمة حيوية لضمان سلامة المرضى والتشغيل الفعال للمستشفى. وتشمل التشغيل الطبي تقديم الدعم اللازم لأقسام المستشفى المختلفة، مثل قسم الطوارئ، والعناية المركزة، والجراحة، وغيرها.",
        Strategic_title: "التخطيط الاستراتيجي والإدارة",
        Strategic_description: "الكفاءة العالية والاحترافية في جميع العمليات الطبية والمرافق.",
        see_more: 'عرض المزيد',
        partners_title: 'عملاؤنا',
        contact_title: 'لمزيد من التفاصيل تواصل معنا!',
        name_label: 'الاسم',
        email_label: 'البريد الإلكتروني',
        message_label: 'الرسالة',
        submit_button: 'إرسال',
        footer_home: 'الرئيسية',
        footer_about: 'حول',
        footer_services: 'خدمات',
        footer_projects: 'العملاء',
        footer_contact: 'تواصل معنا على: Info@Mahart-alghad.com',
        copyright_text: '© 2024 شركة مهارة الغد للصيانة والتشغيل. كل الحقوق محفوظة.',
        creator: 'تم إنشاء الموقع بواسطة: Eng Hussein Jumia',

        individuals_tap: 'قطاع الأفراد',
        business_tap: 'قطاع الأعمال',

        about_us: "من نحن",
        mission: "الرسالة",
        mission_description: "تتمحور رسالتنا حول الالتزام بتقديم خدماتنا بمهنية عالية، وفقاً لمعايير الجودة العالمية، لتلبية رغبات واحتياجات عملائنا في القطاع الحكومي والخاص. نسعى جاهدين إلى بناء شراكات استراتيجية مستدامة مع عملائنا، مع التركيز على تحقيق رضاهم وتحقيق أهدافهم.",
        vision: "الرؤية",
        vision_description: "نسعى لأن نكون الشريك المفضل والموثوق لعملائنا في توفير الحلول المتكاملة لتشغيل وصيانة المباني والمنشآت، وأن نكون الرائدة في هذا المجال على مستوى المملكة العربية السعودية.",
    }
};

function setLanguage(language) {
    // Save the language preference in localStorage
    localStorage.setItem('selectedLanguage', language);

    // Get all elements with the "translate" attribute
    const elementsToTranslate = document.querySelectorAll('[data-translate]');
    elementsToTranslate.forEach(element => {
        const translationKey = element.getAttribute('data-translate');
        if (translations[language] && translations[language][translationKey]) {
            element.textContent = translations[language][translationKey];
        }
    });

    // Update the text direction based on the language
    document.documentElement.lang = language;
    if (language === 'ar') {
        document.body.dir = 'rtl';
    } else {
        document.body.dir = 'ltr';
    }
}

// Load the language preference from localStorage and set it on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'ar'; // Set default language to Arabic
    setLanguage(savedLanguage);

    // Add click event listener to the language toggle button
    document.getElementById('language-toggle').addEventListener('click', () => {
        const newLanguage = document.documentElement.lang === 'en' ? 'ar' : 'en';
        setLanguage(newLanguage);
    });
});