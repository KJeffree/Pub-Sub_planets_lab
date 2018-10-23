const planetsData = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');
const SelectPlanetView = require('./views/select_planet_view.js')
const PlanetInfoView = require('./views/planet_info_view.js')

document.addEventListener('DOMContentLoaded', () => {
  const planetsDataModel = new SolarSystem(planetsData);
  console.log(planetsDataModel.planets);
  planetsDataModel.bindEvents();

  const selectElement = document.querySelector('nav.planets-menu');
  const elementInfo = new SelectPlanetView(selectElement);
  elementInfo.bindEvents();

  const infoSec = document.querySelector('section.planet-details');

  const planetInfo = new PlanetInfoView(infoSec);
  planetInfo.bindEvents();
});
