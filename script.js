 const nav = document.getElementById('navLinks');
const toggleBtn = document.getElementById('menu-toggle');
const navLinks = document.querySelectorAll('#navLinks a');

// Open/close nav and animate icon
toggleBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  nav.classList.toggle('active');
  toggleBtn.classList.toggle('open');
});

// Close menu when clicking outside
window.addEventListener('click', () => {
  nav.classList.remove('active');
  toggleBtn.classList.remove('open');
});

// Prevent closing when clicking inside menu
nav.addEventListener('click', (e) => e.stopPropagation());

// Close menu when clicking any nav link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    toggleBtn.classList.remove('open');
  });
});

 // ===================== nav active ======================//

const navLink = document.querySelectorAll("nav a"); // ✅ sahi: sabhi <a> elements select karna
navLinks.forEach(link => { // ✅ har link par loop chalao
  link.addEventListener('click', function() {
    navLinks.forEach(l => l.classList.remove("active")); // ✅ sabse pehle sabse active hatao
    this.classList.add("active"); // ✅ clicked link par active class lagao
  });
});
