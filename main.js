// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Contact form handler
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert("Thanks for your message! I'll get back to you soon.");
  this.reset();
});
