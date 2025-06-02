let activeCard = null;
const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark-theme');
  toggleBtn.textContent = '☀️';
}

toggleBtn.addEventListener('click', () => {
  const isDark = body.classList.toggle('dark-theme');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');

  toggleBtn.textContent = isDark ? '☀️' : '🌙';
});


document.querySelectorAll('.image-card').forEach(card => {
  card.addEventListener('click', () => {
    if (card.classList.contains('active')) {
      const url = card.getAttribute('data-link');
      window.location.href = url;
    } else {
      if (activeCard) {
        activeCard.classList.remove('active');
      }
      card.classList.add('active');
      activeCard = card;
    }
  });
});


const modalOverlay = document.getElementById('modal-overlay');
const contactOpen = document.getElementById('contact-open');

contactOpen.addEventListener('click', (e) => {
  e.preventDefault();
  modalOverlay.style.display = 'flex';
});

modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.style.display = 'none';
  }
});
