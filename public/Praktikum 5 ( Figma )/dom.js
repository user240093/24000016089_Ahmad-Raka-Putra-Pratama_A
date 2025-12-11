// === Hamburger Menu ===
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Tutup menu otomatis setelah klik link
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
  });
});

// === Fade-in Animasi saat Scroll ===
window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.fade-card');
  const triggerBottom = window.innerHeight * 0.85;

    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;

    if (cardTop < triggerBottom) {
        card.classList.remove('opacity-0', 'translate-y-10');
        card.classList.add('opacity-100', 'translate-y-0');
    }
    });
});
