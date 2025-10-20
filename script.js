// Tombol Mode Gelap
const toggle = document.getElementById('darkModeToggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggle.textContent = document.body.classList.contains('dark')
    ? "☀️ Mode Terang"
    : "🌙 Mode Gelap";
});

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

// Membuat popup sambutan gemoyyyy
function showWelcomePopup() {
  const popup = document.createElement("div");
  popup.innerHTML = `
    <div class="welcome-popup">
      <h2>Selamat Datang!</h2>
      <p>Selamat menjelajahi portofolio saya</p>
    </div>
  `;
  document.body.appendChild(popup);

  // Hapus popup setelah 4 detik
  setTimeout(() => {
    popup.querySelector(".welcome-popup").classList.add("fade-out");
    setTimeout(() => popup.remove(), 1000);
  }, 4000);
}

// Jalankan saat halaman dimuat
window.addEventListener('load', () => {
  changeBackgroundGradient(); // ubah gradasi awal
  showWelcomePopup(); // tampilkan popup sambutan
  checkScroll(); // jalankan animasi scroll

  // Ubah gradasi otomatis setiap 5 detik
  setInterval(changeBackgroundGradient, 5000);

  // Fungsi tambahan (jika ada di file lain)
  if (typeof displayProjects === 'function') displayProjects();
  if (typeof displayExperience === 'function') displayExperience();
});
