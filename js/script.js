// language bar const
const languageLinks = document.getElementsByClassName('language-links');
// responsive menu consts
const openMenuBtn = document.getElementById('open_menu');
const closeMenuBtn = document.getElementById('close_menu');
const ShowMenu = document.getElementById('mobile-navigation');
const scrollMenu = document.getElementById('nav_mobile'); 
const mobIcons = document.getElementById('mobile-icon');
const mobDecoration = document.getElementById('scroll-decoration');



// language bar active===========================
for (let i = 0; i < languageLinks.length; i++) {
  languageLinks[i].addEventListener("click", function() {
    let activeElement = document.getElementsByClassName("actv");
    activeElement[0].className = activeElement[0].className.replace(" actv", "");
    this.className += " actv";
  });
}

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

menuButton.addEventListener('click', () => {
  menuPopUp.style.display = 'block';
});

closePopUp.addEventListener('click', () => {
  menuPopUp.style.display = 'none';
});