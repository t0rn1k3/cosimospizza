// responsive menu consts
const openMenuBtn = document.getElementById('open_menu');
const closeMenuBtn = document.getElementById('close_menu');
const ShowMenu = document.getElementById('mobile-navigation');
const scrollMenu = document.getElementById('nav_mobile');
const mobDecoration = document.getElementById('scroll-decoration');

// full menu popup (menu page only — not the header burger)
const menuPopUp = document.getElementById('full-menu-container');

function openMenu() {
  if (!openMenuBtn || !closeMenuBtn || !ShowMenu) {
    return;
  }

  ShowMenu.classList.add('is-open');
  openMenuBtn.style.display = 'none';
  closeMenuBtn.style.display = 'block';
  ShowMenu.style.height = '100vh';
  ShowMenu.style.overflow = 'visible';

  if (mobDecoration) {
    mobDecoration.style.height = '100vh';
  }

  if (scrollMenu) {
    scrollMenu.style.height = 'auto';
    scrollMenu.style.overflow = 'visible';
  }
}

function closeMenu() {
  if (!openMenuBtn || !closeMenuBtn || !ShowMenu) {
    return;
  }

  ShowMenu.classList.remove('is-open');
  closeMenuBtn.style.display = 'none';
  openMenuBtn.style.display = 'block';
  ShowMenu.style.height = '0';
  ShowMenu.style.overflow = 'hidden';

  if (mobDecoration) {
    mobDecoration.style.height = '0';
  }
}

window.closeMobileNav = closeMenu;

document.addEventListener('click', (event) => {
  if (event.target.closest('#close_menu')) {
    closeMenu();
    return;
  }

  if (
    event.target.closest('#open_menu') &&
    ShowMenu &&
    !ShowMenu.classList.contains('is-open')
  ) {
    openMenu();
    return;
  }

  if (!menuPopUp) {
    return;
  }

  if (event.target.closest('#full_menu')) {
    menuPopUp.classList.add('is-open');
    return;
  }

  if (event.target.closest('#close-menu-page')) {
    menuPopUp.classList.remove('is-open');
  }
});
