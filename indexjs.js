const header=document.querySelector("header");
window.addEventListener("scroll",function(){
header.classList.toggle("sticky",window.scrollY>100);
});

const navItems = document.querySelectorAll('.nav-item');

// Add event listener to each navigation item
navItems.forEach(navItem => {
  navItem.addEventListener('click', () => {
    // Remove active class from all navigation items
    navItems.forEach(item => item.classList.remove('active'));

    // Add active class to clicked navigation item
    navItem.classList.add('active');
  });
});

let menu = document.querySelector('.fa-bars');
let navlist = document.querySelector('.navbar');


menu.onclick = () => {
  menu.classList.toggle('bx');
  navlist.classList.toggle('open');
  
  if (menu.classList.contains('bx')) {
    menu.classList.remove('fa-bars');
    menu.classList.add('fa-xmark');
    navlist.classList.add('mobile-navlist','shadow-lg');
  } else {
    menu.classList.remove('fa-xmark');
    menu.classList.add('fa-bars');
    navlist.classList.remove('mobile-navlist','shadow-lg');
  }
};

window.addEventListener('resize', () => {
    if (window.innerWidth > 890) {
      navlist.classList.remove('mobile-navlist','shadow-lg');
      menu.classList.remove('fa-xmark');
      menu.classList.add('fa-bars');
    }
  });