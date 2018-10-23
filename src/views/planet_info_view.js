const PubSub = require('../helpers/pub_sub.js');

const PlanetInfoView = function(container){
  this.container = container;
}

PlanetInfoView.prototype.bindEvents = function(){
  PubSub.subscribe('SolarSystem:selected-planet-ready', (event) =>{
    const planet = event.detail;
    console.log(planet)
    this.render(planet);
  })
};

PlanetInfoView.prototype.render = function(planetInfo) {
  const infoPlanetName = document.createElement('h1');
  const infoPlanetList = document.createElement('ul');
  infoPlanetName.textContent = `${planetInfo.name}`;
  const infoPlanetDay = document.createElement('li');
  infoPlanetDay.textContent = `Day: ${planetInfo.day} Earth Day's`
  infoPlanetList.appendChild(infoPlanetDay);
  const infoPlanetOrbit = document.createElement('li');
  infoPlanetOrbit.textContent = `Orbit: ${planetInfo.orbit} Earth Day's`
  infoPlanetList.appendChild(infoPlanetOrbit);
  const infoPlanetSurfaceArea = document.createElement('li');
  infoPlanetSurfaceArea.textContent = `Surface Area: ${planetInfo.surfaceArea} Earths`
  infoPlanetList.appendChild(infoPlanetSurfaceArea);
  const infoPlanetVolume = document.createElement('li');
  infoPlanetVolume.textContent = `Volume: ${planetInfo.volume} Earths`
  infoPlanetList.appendChild(infoPlanetVolume);
  const infoPlanetGravity = document.createElement('li');
  infoPlanetGravity.textContent = `Gravity: ${planetInfo.gravity}g`
  infoPlanetList.appendChild(infoPlanetGravity);
  const infoPlanetMoons = document.createElement('li');
  infoPlanetMoons.textContent = `Moons: ${planetInfo.moons}`
  infoPlanetList.appendChild(infoPlanetMoons);

const planetImage = document.createElement("IMG")
planetImage.src = planetInfo.image


  this.container.innerHTML = "";
  this.container.appendChild(infoPlanetName);
   this.container.appendChild(infoPlanetList);
   this.container.appendChild(planetImage);

}



module.exports = PlanetInfoView;
