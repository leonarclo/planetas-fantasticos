
export default function initScrollSuave() {
  const navLinks = document.querySelectorAll('[data-anime="scrollSuave"] a[href^="#"]');

  function smoothScroll(event) {
    event.preventDefault()
    const href = this.getAttribute('href');
    const section = document.querySelector(href);
  
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }   

  navLinks.forEach((link) => {
    link.addEventListener('click', smoothScroll);  
  })
}