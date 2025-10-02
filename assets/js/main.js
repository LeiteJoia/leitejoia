
function toggleMenu() {
  const menu = document.getElementById('site-menu');
  const expanded = menu.style.display === 'flex';
  menu.style.display = expanded ? 'none' : 'flex';
}
