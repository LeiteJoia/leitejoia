
function toggleMenu() {
  const menu = document.getElementById('site-menu');
  const expanded = menu.style.display === 'flex';
  menu.style.display = expanded ? 'none' : 'flex';
}
<script>
document.addEventListener('DOMContentLoaded', function () {
  const v = document.getElementById('heroVideo');
  if (!v) return;

  v.muted = true; // necessário para autoplay em mobile

  function tryPlay() {
    v.play().catch(() => {
      // se ainda assim o navegador bloquear, mostramos os controles
      v.setAttribute('controls', '');
    });
  }

  if (v.readyState >= 2) {
    tryPlay();
  } else {
    v.addEventListener('canplay', tryPlay, { once: true });
    // fallback extra para alguns navegadores
    setTimeout(tryPlay, 1200);
  }
});
</script>
