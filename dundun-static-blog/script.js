const btn = document.getElementById('mode-toggle');

btn.addEventListener('click', () => {
  document.body.classList.toggle('light');
  btn.textContent = document.body.classList.contains('light') ? '🌙 다크모드' : '☀️ 라이트모드';
});