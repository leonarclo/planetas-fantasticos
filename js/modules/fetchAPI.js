import initNumerosAnimation from './numeros.js';

export default function initFetchPlanets() {
  async function fetchPlanets(url) {
    const planetsResponse = await fetch(url);
    const planetsJSON = await planetsResponse.json();

    const gridSection = document.querySelector('.grid-section.numero');

    function createPlanets(planet) {
      const div = document.createElement('div');
      div.classList.add('numeros-grid');
      div.innerHTML = `
      <h3>${planet.planet}</h3>
      <span data-numero>${planet.dimension}</span>
      `;
      return div;
    }
    planetsJSON.forEach((planet) => {
      const divPlanet = createPlanets(planet);
      gridSection.appendChild(divPlanet);
    });
    initNumerosAnimation();
  }

  fetchPlanets('./planets-api.json');
}
initFetchPlanets();
