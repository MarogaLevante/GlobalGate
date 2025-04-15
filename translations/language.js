const translations = {
    en: {
        hero_title: "Connecting Continents, Delivering Excellence",
        hero_button: "Explore Our Services",
        service1_title: "Freight Forwarding",
        service1_desc: "Air, sea, and land freight solutions with real-time tracking.",
        service1_button: "Learn More",
        service1_details: "We provide comprehensive air, sea, and land freight solutions...",
        service2_title: "Warehousing",
        service2_desc: "Secure and scalable storage solutions for your goods.",
        service2_button: "Learn More",
        service2_details: "Our warehouses are equipped with state-of-the-art technology...",
        service3_title: "Customs Clearance",
        service3_desc: "Efficient customs handling for smooth operations.",
        service3_button: "Learn More",
        service3_details: "Our team ensures hassle-free customs clearance...",
        about_title: "About Global Gate",
        about_desc: "A multinational leader in Middle Eastern logistics...",
        contact_title: "Get in Touch",
        name_placeholder: "Name",
        email_placeholder: "Email",
        message_placeholder: "Message",
        submit_button: "Send Message",
        tracking_placeholder: "Enter Tracking Number",
        track_button: "Track",
        address: "Baghdad HQ: Al-Mansour Street"
    },
    ar: {
        hero_title: "ربط القارات، تقديم التميز",
        hero_button: "استكشف خدماتنا",
        service1_title: "الشحن",
        service1_desc: "حلول الشحن الجوي والبحري والبري مع التتبع الفوري.",
        service1_button: "تعرف أكثر",
        service1_details: "نقدم حلول شحن شاملة جواً وبحراً وبراً...",
        service2_title: "التخزين",
        service2_desc: "حلول تخزين آمنة وقابلة للتوسع لبضائعك.",
        service2_button: "تعرف أكثر",
        service2_details: "مستودعاتنا مجهزة بأحدث التقنيات...",
        service3_title: "التخليص الجمركي",
        service3_desc: "معالجة جمركية فعالة لعمليات سلسة.",
        service3_button: "تعرف أكثر",
        service3_details: "يضمن فريقنا تخليصاً جمركياً خالياً من المتاعب...",
        about_title: "عن بوابة العالم",
        about_desc: "رائد متعدد الجنسيات في مجال الخدمات اللوجستية...",
        contact_title: "تواصل معنا",
        name_placeholder: "الاسم",
        email_placeholder: "البريد الإلكتروني",
        message_placeholder: "الرسالة",
        submit_button: "إرسال",
        tracking_placeholder: "أدخل رقم التتبع",
        track_button: "تتبع",
        address: "المقر الرئيسي في بغداد: شارع المنصور"
    }
};

function toggleLanguage(lang) {
    document.querySelectorAll("[data-translate]").forEach(el => {
        const key = el.getAttribute("data-translate");
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
        if (el.placeholder && translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });

    // Toggle RTL styles
    const rtlStyle = document.getElementById("rtl-style");
    if (lang === "ar") {
        document.documentElement.setAttribute("dir", "rtl");
        rtlStyle.disabled = false;
    } else {
        document.documentElement.setAttribute("dir", "ltr");
        rtlStyle.disabled = true;
    }
}
