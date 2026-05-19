// responsive menu consts
const openMenuBtn = document.getElementById('open_menu');
const closeMenuBtn = document.getElementById('close_menu');
const ShowMenu = document.getElementById('mobile-navigation');

// full menu popup (menu page only — not the header burger)
const menuPopUp = document.getElementById('full-menu-container');
const fullMenuBtn = document.getElementById('full_menu');
const closePopUp = document.getElementById('close-menu-page');
const mobileMenuTrigger = document.querySelector('header .buttons');

function openMenu() {
  if (!openMenuBtn || !closeMenuBtn || !ShowMenu) {
    return;
  }

  ShowMenu.classList.add('is-open');
  openMenuBtn.style.display = 'none';
  closeMenuBtn.style.display = 'block';
}

function closeMenu() {
  if (!openMenuBtn || !closeMenuBtn || !ShowMenu) {
    return;
  }

  ShowMenu.classList.remove('is-open');
  closeMenuBtn.style.display = 'none';
  openMenuBtn.style.display = 'block';
}

window.closeMobileNav = closeMenu;

if (mobileMenuTrigger) {
  mobileMenuTrigger.addEventListener('click', () => {
    if (ShowMenu && !ShowMenu.classList.contains('is-open')) {
      openMenu();
    }
  });
} else if (openMenuBtn) {
  openMenuBtn.addEventListener('click', openMenu);
}

if (closeMenuBtn) {
  closeMenuBtn.addEventListener('click', closeMenu);
}

if (fullMenuBtn && menuPopUp) {
  fullMenuBtn.addEventListener('click', () => {
    menuPopUp.classList.add('is-open');
  });
}

if (closePopUp && menuPopUp) {
  closePopUp.addEventListener('click', () => {
    menuPopUp.classList.remove('is-open');
  });
}
