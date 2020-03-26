
// This class x {} is an object constructor function
// It enables us to make instances of Thermostat - similar to def initialize
// The 'this' gives the new instance a property (instance variables)
// which already set when you make a new instance of thermostat, for us it's 20 degrees.
class Thermostat {
  constructor() {
    this.temperature = 20;
  }

// I created a new function called getCurrentTemperature which just
// reads the this.temperature property at that moment.
  getCurrentTemperature () {
    return this.temperature
  }
  up() {
    this.temperature +=1
  }
  down() {
    this.temperature -=1
  }
};
