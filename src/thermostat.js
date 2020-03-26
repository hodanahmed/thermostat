
// This class x {} is an object constructor function
// It enables us to make instances of Thermostat - similar to def initialize
// The 'this' gives the new instance a property (instance variables)
// which already set when you make a new instance of thermostat, for us it's 20 degrees.
class Thermostat {
  constructor() {
//Adding minimum temperature property as a constant
    this.MINIMUM_TEMPERATURE = 10;
    this.temperature = 20;
  }

// I created a new function called getCurrentTemperature which just
// reads the this.temperature property at that moment.
  getCurrentTemperature () {
    return this.temperature
  }
//up function increments the temperature property
  up() {
    this.temperature +=1
  }
//down function decrement the temperature property
  down() {
    this.temperature -=1
  }
//Created a MINIMUM_TEMPERATURE function so it can return a boolean to check if this has been set or not
//the function starts with 'is', it's JS convention similar to ruby's ? as the function returns a boolean
  isMinimumTemperature() {
    return this.temperature === this.MINIMUM_TEMPERATURE;
  }
};
