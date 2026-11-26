// قاعدة بيانات المشاريع والبريسيتس (عدل عليها وزود براحتك)
const presetsData = [
    {
        id: 1,
        title: "Breaking Bad Full Edit Project",
        category: "project",
        software: "After Effects 2023+",
        description: "ملف المشروع الكامل شامل التقطيع، الـ Velocity، والتلوين الغامق.",
        preview: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbW50b2Z4c3h6ZzR5Z3Z6ZzR5Z3Z6ZzR5Z3Z6ZzR5Z3Z6/3o7TKSjRrfIPjeiVyM/giphy.gif", // تقدر تستبدله بصورة GIF أو رابط فيديو قصير من عندك
        downloadUrl: "https://drive.google.com/" // حط هنا رابط التحميل المباشر
    },
    {
        id: 2,
        title: "Nate Dark Moody CC",
        category: "cc",
        software: "After Effects / Magic Bullet",
        description: "بريست التلوين الأساسي لستايل Nate مع حدة عالية وتباين سينمائي.",
        preview: "https://media.giphy.com/media/l0HlHFRbmaZtBRhXG/giphy.gif",
        downloadUrl: "https://drive.google.com/"
    },
    {
        id: 3,
        title: "Hard Impact Shakes Pack (10 Shakes)",
        category: "shakes",
        software: "After Effects / Sapphire",
        description: "باكيدج 10 اهتزازات قوية متزامنة مع ضربات البيز والـ Snare.",
        preview: "https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif",
        downloadUrl: "https://drive.google.com/"
    },
    {
        id: 4,
        title: "Phonk Edit SFX & Risers Pack",
        category: "sfx",
        software: "All Programs (WAV)",
        description: "أقوى المؤثرات الصوتية المستخدمة في انتقالات تيك توك السريعة.",
        preview: "https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif",
        downloadUrl: "https://drive.google.com/"
    }
];

const itemsGrid = document.getElementById('itemsGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('searchInput');

// دالة عرض الكروت في الصفحة
function renderItems(items) {
    itemsGrid.innerHTML = '';

    if (items.length === 0) {
        itemsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #9ca3af;">مفيش نتائج مطابقة لبحثك حالياً..</p>';
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
                <a href="${item.downloadUrl}" target="_blank" class="download-btn">تحميل الملف مجاناً ⬇</a>
            </div>
        `;
        itemsGrid.appendChild(card);
    });
}

// تشغيل الفلترة بالأزرار
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');
        const filtered = filterValue === 'all' 
            ? presetsData 
            : presetsData.filter(item => item.category === filterValue);
        
        renderItems(filtered);
    });
});

// تشغيل البحث المباشر
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = presetsData.filter(item => 
        item.title.toLowerCase().includes(term) || 
        item.description.toLowerCase().includes(term) ||
        item.software.toLowerCase().includes(term)
    );
    renderItems(filtered);
});

// عرض كل المشاريع أول ما الصفحة تفتح
renderItems(presetsData);
