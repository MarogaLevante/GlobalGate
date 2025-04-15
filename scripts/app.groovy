// Carga de traducciones
let currentLang = 'en';
const translations = {
    en: {
        hero_title: "Connecting Continents, Delivering Excellence",
        service1_title: "Freight Forwarding",
        track_button: "Track"
    },
    ar: {
        hero_title: "ربط القارات، بتوصيل الامتياز",
        service1_title: "الشحن الدولي",
        track_button: "تتبع"
    }
};

// Cambio de idioma y dirección
function toggleLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    // Activa/desactiva estilos RTL
    document.getElementById('rtl-style').disabled = lang !== 'ar';
    
    // Actualiza textos
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        el.textContent = translations[lang][key];
    });
}