
export default function initAnimaScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');


  if (sections.length) {
    sections[0].classList.add('ativo')
    const windowMid = window.innerHeight * 0.7;
    
    
    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top - windowMid;
        if (sectionTop < 0) {
          section.classList.add('ativo');
        } else if (section.classList.contains('ativo')) {
          section.classList.remove('ativo');
        }
      })  
    }
    animaScroll()

    window.addEventListener('scroll', animaScroll)
  }
}


