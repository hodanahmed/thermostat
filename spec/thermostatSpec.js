'use strict';

describe('Thermostat',function(){
  var thermostat;
  beforeEach(function(){
  thermostat = new Thermostat();
  });
//testing to see if it can make a new Thermostat object
  it('Can make a new instance of thermostat', function(){
    expect(thermostat).toBeInstanceOf(Thermostat);
  });
//testing to see that default temp is 20
  it('starts at 20 degrees', function() {
    expect(thermostat.temperature).toEqual(20)
  });
//testing to see if you can access this.temperature
  it('can get current temperature', function() {
      thermostat.temperature = 40;
    expect(thermostat.getCurrentTemperature()).toEqual(40)
  });
//testing if the up function works
  it('the temperature can go up', function() {
      thermostat.up();
    expect(thermostat.getCurrentTemperature()).toEqual(21)
  });
//testing if the down function works
  it('the temperature can go down', function() {
      thermostat.down();
    expect(thermostat.getCurrentTemperature()).toEqual(19)
  });
//testing to see if it has a minimum of 10 degrees
  it('has a minimum of 10 degrees', function() {
    for (var i = 0; i < 11; i++) {
      thermostat.down();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });
});
