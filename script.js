// Animasi muncul saat scroll
const elements = document.querySelectorAll('.fade-in');
function checkScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < triggerBottom) {
      el.classList.add('show');
    }
  });
}
window.addEventListener('scroll', checkScroll);

// Fungsi menghasilkan warna pastel lembut
function generatePastelColor() {
  const hue = Math.floor(Math.random() * 360);
  return `hsl(${hue}, 70%, 85%)`;
}

// Membuat gradasi lembut acak
function generateGradient() {
  const color1 = generatePastelColor();
  const color2 = generatePastelColor();
  const angle = Math.floor(Math.random() * 360);
  return `linear-gradient(${angle}deg, ${color1}, ${color2})`;
}

// Mengubah latar belakang menjadi gradasi lembut acak
function changeBackgroundGradient() {
  document.body.style.transition = "background 2s ease";
  document.body.style.background = generateGradient();
}

// Membuat popup sambutan dominan dan otomatis hilang
function showWelcomePopup() {
  const overlay = document.createElement("div");
  overlay.classList.add("popup-overlay");

  const popup = document.createElement("div");
  popup.classList.add("welcome-popup");
  popup.innerHTML = `
    <h2>Selamat Datang!</h2>
    <p><br>Selamat menjelajahi portofolio saya</p>
  `;

  overlay.appendChild(popup);
  document.body.appendChild(overlay);

  // Hilangkan popup otomatis dalam 3 detik
  setTimeout(() => {
    popup.classList.add("fade-out");
    overlay.classList.add("fade-out-overlay");
    setTimeout(() => overlay.remove(), 1000);
  }, 3000);
}

// Jalankan saat halaman dimuat
window.addEventListener('load', () => {
  changeBackgroundGradient(); // ubah gradasi awal
  showWelcomePopup(); // tampilkan popup sambutan
  checkScroll(); // animasi scroll

  // Ganti gradasi otomatis tiap 5 detik
  setInterval(changeBackgroundGradient, 5000);

  // Fungsi tambahan jika ada
  if (typeof displayProjects === 'function') displayProjects();
  if (typeof displayExperience === 'function') displayExperience();
});
