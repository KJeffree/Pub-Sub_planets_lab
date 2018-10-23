const planetsData = require('../data/planets.js');
const PubSub = require('../helpers/pub_sub.js');

const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.bindEvents = function(){
  PubSub.subscribe('SelectPlanetView:click', (event) => {
    const selectedPlanetId = event.detail;
    console.log(selectedPlanetId);
    this.publishPlanetInfo(selectedPlanetId);
  });
};

SolarSystem.prototype.publishPlanetInfo = function(planetSelected){
const planetInfo = this.planets.find( n => n["name"] === planetSelected)
  console.log(planetInfo);
  PubSub.publish('SolarSystem:selected-planet-ready', planetInfo)
}

module.exports = SolarSystem;
