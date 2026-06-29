// ===== DATA LAYANAN =====
const serviceData = {
  'detail-bot': {
    icon: '<svg viewBox="0 0 24 24"><path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a7 7 0 0 1-7 7h-1v1a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-1H7a7 7 0 0 1-7-7H1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"/><circle cx="9" cy="12" r="1.5"/><circle cx="15" cy="12" r="1.5"/><path d="M9 16c.85.63 1.87 1 3 1s2.15-.37 3-1"/></svg>',
    title: 'Bot & Automation',
    text: 'Butuh bot yang bisa dipakai di Telegram, WhatsApp, Discord, Twitter, atau platform lain? Atau butuh script buat ambil data dari ratusan website dalam hitungan menit? Saya bikin semuanya — mulai dari bot chat interaktif, auto-reply, scraping data, auto-form filler, macro, sampai batch processing. Apapun kebutuhan otomatisasi kamu, saya wujudin. Mau yang jalan terus atau sekali jalan, semua saya handle.',
    tags: ['Bot (Telegram/WA/Discord)', 'Web Scraping', 'Auto-Reply', 'Batch Processing', 'Macro']
  },
  'detail-hosting': {
    icon: '<svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
    title: 'Hosting',
    text: 'Males ribet ngurus server, domain, dan SSL? Saya handle semuanya. Dari setup VPS, konfigurasi Nginx, sampe deploy aplikasi — website kamu online dalam hitungan jam, tanpa drama teknis.',
    tags: ['VPS Setup', 'Domain & SSL', 'Nginx/Apache', 'Docker', 'cPanel']
  },
  'detail-apk': {
    icon: '<svg viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>',
    title: 'Project APK',
    text: 'Punya ide aplikasi Android tapi gak bisa coding? Saya wujudin ide kamu jadi APK nyata yang siap dipakai. Bisa buat internal tim, komunitas, atau produk digital yang kamu jual di Play Store.',
    tags: ['Flutter', 'Kotlin/Java', 'Firebase', 'REST API']
  },
  'detail-function': {
    icon: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14"/><path d="M15.54 8.46a5 5 0 010 7.07M8.46 8.46a5 5 0 000 7.07"/></svg>',
    title: 'Function & Plugin',
    text: 'Ada software lama yang udah gak cukup buat kebutuhan sekarang? Saya bikin plugin, extension, atau integrasi custom — tanpa harus ganti sistem dari nol. Lebih murah, lebih cepat, lebih efektif.',
    tags: ['C/C++', 'C#', 'Plugin', 'DLL', 'Extension']
  },
  'detail-web': {
    icon: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>',
    title: 'Design Website',
    text: 'Mau bisnis kamu keliatan lebih profesional di mata klien? Landing page yang bikin orang penasaran, portofolio yang bikin klien percaya, toko online yang gampang diakses. Responsif di HP, loading cepat, dan desain yang bikin bisnis kamu keliatan lebih profesional dari kompetitor.',
    tags: ['HTML/CSS', 'React', 'Next.js', 'Laravel', 'Responsive']
  },
  'detail-lainnya': {
    icon: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>',
    title: 'Custom Order',
    text: 'Ada kebutuhan di luar list di atas? Gak masalah. Langsung chat aja, kita diskusi bareng cari solusi terbaik. Konsultasi gratis, harga fleksibel.',
    tags: ['Konsultasi Gratis', 'Harga Fleksibel', 'Custom']
  }
};

// ===== SERVICE CARD CLICK → MODAL =====
document.querySelectorAll('.service-card').forEach(card => {
  card.addEventListener('click', function() {
    const targetId = this.dataset.target;
    const data = serviceData[targetId];
    if (!data) return;

    document.getElementById('modalIcon').innerHTML = data.icon;
    document.getElementById('modalTitle').textContent = data.title;
    document.getElementById('modalText').textContent = data.text;

    const tagsContainer = document.getElementById('modalTags');
    tagsContainer.innerHTML = '';
    data.tags.forEach(tag => {
      const span = document.createElement('span');
      span.textContent = tag;
      tagsContainer.appendChild(span);
    });

    document.getElementById('serviceModal').classList.add('show');
  });
});

// ===== MODAL =====
function closeModal() {
  document.getElementById('serviceModal').classList.remove('show');
}

document.getElementById('serviceModal').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

// ===== DONATE TOGGLE =====
function toggleDonate() {
  const body = document.getElementById('donateBody');
  const header = document.querySelector('.donate-header');
  body.classList.toggle('open');
  header.classList.toggle('open');
}

// ===== POPUP =====
function showPopup() {
  document.getElementById('popupOverlay').classList.add('show');
}

function closePopup() {
  document.getElementById('popupOverlay').classList.remove('show');
}

document.getElementById('popupOverlay').addEventListener('click', function(e) {
  if (e.target === this) closePopup();
});

// ========================================
// ===== PROTEKSI COPY PASTE (Tanpa Notifikasi) =====
// ========================================

// 1. Nonaktifkan klik kanan
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
  return false;
});

// 2. Nonaktifkan semua shortcut
document.addEventListener('keydown', function(e) {
  if (e.ctrlKey) {
    if (e.key === 'c' || e.key === 'v' || e.key === 'u' || 
        e.key === 'i' || e.key === 'j' || e.key === 's' || 
        e.key === 'a' || e.key === 'p' || e.key === 'f') {
      e.preventDefault();
      return false;
    }
  }
  
  if (e.ctrlKey && e.shiftKey) {
    if (e.key === 'I' || e.key === 'C' || e.key === 'J' || e.key === 'K') {
      e.preventDefault();
      return false;
    }
  }
  
  if (e.key === 'F12') {
    e.preventDefault();
    return false;
  }
});

// 3. Nonaktifkan drag
document.addEventListener('dragstart', function(e) {
  e.preventDefault();
  return false;
});

// 4. Nonaktifkan copy & paste event
document.addEventListener('copy', function(e) {
  e.preventDefault();
  return false;
});

document.addEventListener('paste', function(e) {
  e.preventDefault();
  return false;
});
