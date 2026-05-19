const openMenuBtn = document.getElementById('open_menu');
const closeMenuBtn = document.getElementById('close_menu');
const ShowMenu = document.getElementById('mobile-navigation');
const scrollMenu = document.getElementById('nav_mobile');
const mobDecoration = document.getElementById('scroll-decoration');

const menuPopUp = document.getElementById('full-menu-container');
const fullMenuBtn = document.getElementById('full_menu');
const closePopUp = document.getElementById('close-menu-page');
const mobileMenuTrigger = document.querySelector('header .buttons');

function isMobileMenuOpen() {
  return ShowMenu && ShowMenu.style.visibility === 'visible';
}

function openMenu() {
  if (!openMenuBtn || !closeMenuBtn || !ShowMenu) {
    return;
  }

  ShowMenu.style.height = '100vh';
  ShowMenu.style.visibility = 'visible';
  ShowMenu.style.zIndex = '30';
  ShowMenu.style.pointerEvents = 'auto';
  ShowMenu.style.overflow = 'visible';

  if (scrollMenu) {
    scrollMenu.style.height = 'auto';
    scrollMenu.style.overflow = 'visible';
  }

  if (mobDecoration) {
    mobDecoration.style.height = '100vh';
    mobDecoration.style.pointerEvents = 'auto';
  }

  openMenuBtn.style.display = 'none';
  closeMenuBtn.style.display = 'block';
}

function closeMenu() {
  if (!openMenuBtn || !closeMenuBtn || !ShowMenu) {
    return;
  }

  ShowMenu.style.height = '0';
  ShowMenu.style.visibility = 'hidden';
  ShowMenu.style.zIndex = '-1';
  ShowMenu.style.pointerEvents = 'none';
  ShowMenu.style.overflow = 'hidden';

  if (scrollMenu) {
    scrollMenu.style.height = '0';
    scrollMenu.style.overflow = 'hidden';
  }

  if (mobDecoration) {
    mobDecoration.style.height = '0';
    mobDecoration.style.pointerEvents = 'none';
  }

  closeMenuBtn.style.display = 'none';
  openMenuBtn.style.display = 'block';
}

function openFullMenu() {
  if (menuPopUp) {
    menuPopUp.style.display = 'block';
  }
}

function closeFullMenu() {
  if (menuPopUp) {
    menuPopUp.style.display = 'none';
  }
}

window.closeMobileNav = closeMenu;
window.closeFullMenu = closeFullMenu;

if (mobileMenuTrigger) {
  mobileMenuTrigger.addEventListener('click', () => {
    if (!isMobileMenuOpen()) {
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
  fullMenuBtn.addEventListener('click', openFullMenu);
}

if (closePopUp && menuPopUp) {
  closePopUp.addEventListener('click', closeFullMenu);
}

closeMenu();
closeFullMenu();
