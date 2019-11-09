const overlayMenu = document.querySelector('.js_ovl-menu');
const overlayCloseButton = document.querySelector('.js_ovl-menu-close');
const hamburgerButton = document.querySelector('.js_hbg-btn');
const overlayMenuLinks = document.querySelectorAll('.js_ovl-menu-link');

hamburgerButton.addEventListener('click', () => {
  hamburgerButton.style.opacity = 0;
  overlayMenu.style.width = '100%';
});

overlayCloseButton.addEventListener('click', () => {
  hamburgerButton.style.opacity = 1;
  overlayMenu.style.width = '0%';
});

for (const menuLink of overlayMenuLinks) {
  menuLink.addEventListener('click', () => {
    hamburgerButton.style.opacity = 1;
    overlayMenu.style.width = '0%';
  });
}

// Get the navbar
const nav = document.querySelector('.nav');

// Get the offset position of the navbar
var sticky = nav.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyNavigation() {
  if (document.documentElement.clientWidth > 900) {
    if (window.scrollY >= sticky) {
      hamburgerButton.style.display = 'block';
      nav.style.display = 'none';
    } else {
      hamburgerButton.style.display = 'none';
      nav.style.display = 'block';
    }
  }
}

window.addEventListener('scroll', stickyNavigation);
