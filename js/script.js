// responsive menu consts
const openMenuBtn = document.getElementById('open_menu');
const closeMenuBtn = document.getElementById('close_menu');
const ShowMenu = document.getElementById('mobile-navigation');
const scrollMenu = document.getElementById('nav_mobile'); 
const mobIcons = document.getElementById('mobile-icon');
const mobDecoration = document.getElementById('scroll-decoration');



// menu pop up button ===================
const menuButton = document.getElementById('full_menu');
const menuPopUp = document.getElementById('full-menu-container');
const closePopUp =document.getElementById('close-menu-page');


// menu buttons ==============================]
function openMenu() {
  openMenuBtn.style.display = 'none';
  closeMenuBtn.style.display = 'block';
  ShowMenu.style.height = '100vh';
  ShowMenu.style.overflow = 'visible';
  mobDecoration.style.height = '100vh';
  scrollMenu.style.height = 'auto';
  scrollMenu.style.overflow = 'visible';
};
  

function closeMenu() {
  closeMenuBtn.style.display = 'none';
  openMenuBtn.style.display = 'block';
  ShowMenu.style.height = '0';
  ShowMenu.style.overflow = 'hidden';
  mobDecoration.style.height = '0';
}


openMenuBtn.addEventListener('click', () => {
  openMenu();
});

closeMenuBtn.addEventListener('click', () => {
  closeMenu();
});

if (menuButton && menuPopUp) {
  menuButton.addEventListener('click', () => {
    menuPopUp.style.display = 'block';
  });
}

if (closePopUp && menuPopUp) {
  closePopUp.addEventListener('click', () => {
    menuPopUp.style.display = 'none';
  });
}