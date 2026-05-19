const openMenuBtn = document.getElementById('open_menu');
const closeMenuBtn = document.getElementById('close_menu');
const mobileNav = document.getElementById('mobile-navigation');
const scrollMenu = document.getElementById('nav_mobile');
const mobDecoration = document.getElementById('scroll-decoration');
const mobileMenuTrigger = document.querySelector('header .buttons');

const menuPopUp = document.getElementById('full-menu-container');
const fullMenuBtn = document.getElementById('full_menu');
const closePopUp = document.getElementById('close-menu-page');

let ignoreCloseClick = false;

function isMobileMenuOpen() {
  return mobileNav && mobileNav.style.visibility === 'visible';
}

function openMenu() {
  if (!openMenuBtn || !closeMenuBtn || !mobileNav) {
    return;
  }

  ignoreCloseClick = true;

  mobileNav.style.height = '100vh';
  mobileNav.style.visibility = 'visible';
  mobileNav.style.zIndex = '30';
  mobileNav.style.pointerEvents = 'auto';
  mobileNav.style.overflow = 'visible';

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
  closeMenuBtn.style.pointerEvents = 'none';

  window.setTimeout(function () {
    ignoreCloseClick = false;
    closeMenuBtn.style.pointerEvents = 'auto';
  }, 300);
}

function closeMenu() {
  if (!openMenuBtn || !closeMenuBtn || !mobileNav) {
    return;
  }

  mobileNav.style.height = '0';
  mobileNav.style.visibility = 'hidden';
  mobileNav.style.zIndex = '-1';
  mobileNav.style.pointerEvents = 'none';
  mobileNav.style.overflow = 'hidden';

  if (scrollMenu) {
    scrollMenu.style.height = '0';
    scrollMenu.style.overflow = 'hidden';
  }

  if (mobDecoration) {
    mobDecoration.style.height = '0';
    mobDecoration.style.pointerEvents = 'none';
  }

  closeMenuBtn.style.display = 'none';
  closeMenuBtn.style.pointerEvents = 'auto';
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
  mobileMenuTrigger.addEventListener('click', function (event) {
    event.stopPropagation();

    if (!isMobileMenuOpen()) {
      openMenu();
    }
  });
} else if (openMenuBtn) {
  openMenuBtn.addEventListener('click', function (event) {
    event.stopPropagation();
    openMenu();
  });
}

if (closeMenuBtn) {
  closeMenuBtn.addEventListener('click', function (event) {
    event.stopPropagation();

    if (ignoreCloseClick) {
      return;
    }

    closeMenu();
  });
}

if (fullMenuBtn && menuPopUp) {
  fullMenuBtn.addEventListener('click', openFullMenu);
}

if (closePopUp && menuPopUp) {
  closePopUp.addEventListener('click', closeFullMenu);
}

closeMenu();
closeFullMenu();
