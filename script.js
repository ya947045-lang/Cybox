// القواميس للغتين (عربي / إنجليزي)
const translations = {
    ar: {
        nav_library: "المكتبة",
        nav_tutorials: "دروس التعليم",
        nav_request: "اطلب مشروع",
        nav_tiktok: "حساب التيك توك",
        hero_title: 'مكتبة مشاريع وبريسيتس الاحترافية <span class="highlight">CYBOX</span>',
        hero_desc: "كل ما تحتاجه لإتقان ستايل الإيديت السريع، فلاتر التلوين الحادة، والاهتزازات القوية. حمّل وتعلم مباشرة!",
        filter_all: "الكل",
        filter_project: "Project Files",
        filter_cc: "Color Correction (CC)",
        filter_shakes: "Shakes & Transitions",
        filter_sfx: "Sound Effects",
        tut_title: "تعلّم سر الستايل (الدروس والشروحات)",
        tut_desc: "فيديوهات قصيرة وشروحات لتطبيق التايمينج والتلحين الصح.",
        req_title: "مش لاقي التأثير أو المشروع اللي بتدور عليه؟",
        req_desc: "ابعت اسم المسلسل أو الأنمي أو ستايل الإيديت، وهنضيفه في التحديث الجاي!",
        req_btn: "إرسال الطلب",
        footer_text: "جميع الحقوق محفوظة © 2026 CYBOX EDITS | Built for Editors",
        downloadBtnText: "تحميل الملف مجاناً ⬇",
        watchTut: "شاهد الشرح على تيك توك ↗"
    },
    en: {
        nav_library: "Library",
        nav_tutorials: "Tutorials",
        nav_request: "Request Project",
        nav_tiktok: "TikTok Profile",
        hero_title: 'Professional Presets & Project Files by <span class="highlight">CYBOX</span>',
        hero_desc: "Everything you need to master fast-paced edits, sharp color corrections, and hard shakes. Download & learn!",
        filter_all: "All",
        filter_project: "Project Files",
        filter_cc: "Color Correction (CC)",
        filter_shakes: "Shakes & Transitions",
        filter_sfx: "Sound Effects",
        tut_title: "Learn the Style (Tutorials)",
        tut_desc: "Short guides and breakdowns to master timing and beats.",
        req_title: "Can't find what you are looking for?",
        req_desc: "Send us the anime or show name, and we'll add it in the next update!",
        req_btn: "Send Request",
        footer_text: "All Rights Reserved © 2026 CYBOX EDITS | Built for Editors",
        downloadBtnText: "Download Free ⬇",
        watchTut: "Watch on TikTok ↗"
    }
};

let currentLang = 'ar';

function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    const htmlRoot = document.getElementById('htmlRoot');
    htmlRoot.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
    htmlRoot.setAttribute('lang', currentLang);

    // تحديث النصوص الثابتة
    document.querySelectorAll('[data-lang]').forEach(el => {
        const key = el.getAttribute('data-lang');
        if (translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key];
        }
    });

    renderItems(presetsData);
    renderTutorials();
}

// قاعدة بيانات المشاريع
const presetsData = [
    {
        id: 1,
        title: "CYBOX Ultimate Anime Edit Project",
        category: "project",
        software: "After Effects 2023+",
        description: "ملف المشروع الكامل مع التقطيع والـ Velocity والـ CC.",
        preview: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbW50b2Z4c3h6ZzR5Z3Z6ZzR5Z3Z6ZzR5Z3Z6ZzR5Z3Z6/3o7TKSjRrfIPjeiVyM/giphy.gif",
        downloadUrl: "https://www.tiktok.com/@cybox43"
    },
    {
        id: 2,
        title: "Cyber Dark CC by Cybox",
        category: "cc",
        software: "After Effects / Premiere",
        description: "فلتر التلوين السينمائي الحاد المخصص لستايل النايت.",
        preview: "https://media.giphy.com/media/l0HlHFRbmaZtBRhXG/giphy.gif",
        downloadUrl: "https://www.tiktok.com/@cybox43"
    },
    {
        id: 3,
        title: "Hard Snare Shakes Pack",
        category: "shakes",
        software: "After Effects / Sapphire",
        description: "أقوى اهتزازات متزامنة مع ضربات البيز.",
        preview: "https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif",
        downloadUrl: "https://www.tiktok.com/@cybox43"
    },
    {
        id: 4,
        title: "Phonk Whooshes & Impacts SFX",
        category: "sfx",
        software: "All Programs (WAV)",
        description: "مؤثرات صوتية حصرية للانتقالات السريعة.",
        preview: "https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif",
        downloadUrl: "https://www.tiktok.com/@cybox43"
    }
];

// قاعدة بيانات الشروحات والدروس
const tutorialsData = [
    { titleAr: "إزاي تعمل Velocity احترافي زي إيديتورز تيك توك", titleEn: "How to make a pro Velocity edit", link: "https://www.tiktok.com/@cybox43" },
    { titleAr: "سر تركيب فلاتر الـ CC والـ Glow مع الإضاءة الحادة", titleEn: "Secret of CC & Glow setup", link: "https://www.tiktok.com/@cybox43" }
];

const itemsGrid = document.getElementById('itemsGrid');
const tutorialsGrid = document.getElementById('tutorialsGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('searchInput');

function renderItems(items) {
    itemsGrid.innerHTML = '';
    if (items.length === 0) {
        itemsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #9ca3af;">No results found..</p>';
        return;
    }

    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-media">
                <span class="software-badge">${item.software}</span>
                <img src="${item.preview}" alt="${item.title}" loading="lazy">
            </div>
            <div class="card-body">
                <div>
                    <h3 class="card-title">${item.title}</h3>
                    <p class="card-desc">${item.description}</p>
                </div>
                <a href="${item.downloadUrl}" target="_blank" class="download-btn">${translations[currentLang].downloadBtnText}</a>
            </div>
        `;
        itemsGrid.appendChild(card);
    });
}

function renderTutorials() {
    tutorialsGrid.innerHTML = '';
    tutorialsData.forEach(tut => {
        const tCard = document.createElement('div');
        tCard.className = 'tutorial-card';
        tCard.innerHTML = `
            <h3>${currentLang === 'ar' ? tut.titleAr : tut.titleEn}</h3>
            <a href="${tut.link}" target="_blank">${translations[currentLang].watchTut}</a>
        `;
        tutorialsGrid.appendChild(tCard);
    });
}

function sendRequest() {
    const input = document.getElementById('reqInput');
    const msg = document.getElementById('reqMessage');
    if(input.value.trim() !== '') {
        msg.textContent = currentLang === 'ar' ? 'تم إرسال طلبك بنجاح لـ Cybox! 🚀' : 'Request sent successfully to Cybox! 🚀';
        input.value = '';
    } else {
        msg.textContent = currentLang === 'ar' ? 'من فضلك اكتب طلبك أولاً..' : 'Please type your request first..';
    }
}

// تفعيل الفلترة
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filterVal = btn.getAttribute('data-filter');
        const filtered = filterVal === 'all' ? presetsData : presetsData.filter(i => i.category === filterVal);
        renderItems(filtered);
    });
});

// تفعيل البحث
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = presetsData.filter(i => i.title.toLowerCase().includes(term) || i.description.toLowerCase().includes(term));
    renderItems(filtered);
});

// التشغيل الأولي
renderItems(presetsData);
renderTutorials();
