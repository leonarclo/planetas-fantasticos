export default function initNumerosAnimation() {
  function animaNumbers() {
    const numbers = document.querySelectorAll('[data-numero]');

    numbers.forEach((number) => {
      const total = +number.innerText;
      const increment = Math.floor(total / 100);

      let start = 0;
      const timer = setInterval(() => {
        start += increment;
        number.innerText = start;
        if (start > total) {
          number.innerHTML = total;
          clearInterval(timer);
        }
      }, 25 * Math.random());
    });
  }

  let observer;

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains('ativo')) {
      observer.disconnect();
      animaNumbers();
    }
  }

  const observerTarget = document.querySelector('.numero');
  observer = new MutationObserver(handleMutation);

  observer.observe(observerTarget, { attributes: true });
}
