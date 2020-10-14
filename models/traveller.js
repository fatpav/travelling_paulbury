const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journey) => {
    return journey.startLocation
  });
};

Traveller.prototype.getJourneyEndLocations = function () {

};

Traveller.prototype.getJourneysByTransport = function (transport) {

};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((journey) => {
    return journey.distance >= minDistance;
  })
};

Traveller.prototype.calculateTotalDistanceTravelled = function (travelled) {
  const sumTotal = this.journeys.reduce((runningTotal, travelled) => {
    return runningTotal + travelled.distance;
  }, 0)
  return sumTotal;
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  
};


module.exports = Traveller;
