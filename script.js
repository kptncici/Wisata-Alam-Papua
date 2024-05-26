document.addEventListener('DOMContentLoaded', function() {

  // Interactive elements or animations can be added here

  // Example: Smooth scroll
  document.querySelectorAll('nav ul li a').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();

          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });
});
