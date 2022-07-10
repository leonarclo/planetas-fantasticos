export default function initTabNav() {
  const planetList = document.querySelectorAll('[data-tab="menu"] li');
  const planetDesc = document.querySelectorAll('[data-tab="content"] section');

  function activeTab(index) {
    planetDesc.forEach((section) => {
      section.classList.remove('ativo');
    });

    const direction = planetDesc[index].dataset.anime;
    planetDesc[index].classList.add('ativo', direction);
  }

  if (planetDesc && planetList) {
    planetDesc[0].classList.add('ativo');

    planetList.forEach((item, index) => {
      item.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}
