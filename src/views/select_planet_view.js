const PubSub = require('../helpers/pub_sub.js');

const SelectPlanetView = function(element){
  this.element = element;
}

SelectPlanetView.prototype.bindEvents = function(){
  this.element.addEventListener('click', (event) => {
    const selectPlanetId = event.target.id;
    console.log(selectPlanetId);
    PubSub.publish('SelectPlanetView:click', selectPlanetId);
  });
};

module.exports = SelectPlanetView;
