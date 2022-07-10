export default function initDate() {
  const dateEclipse = document.querySelector('[data-eclipse]');

  const now = new Date();
  const eclipe = new Date('Nov 8 2022 00:00');

  function convertInDays(time) {
    return time / (24 * 60 * 60 * 1000);
  }

  const daysNow = convertInDays(now);
  const daysEclipe = convertInDays(eclipe);

  const missing = Math.floor(daysEclipe - daysNow);
  dateEclipse.innerText = missing;
}

initDate();
