'use strict';

describe('Thermostat',function(){
  var thermostat;
  beforeEach(function(){
  thermostat = new Thermostat();
  });

  it('Can make a new instance of thermostat', function(){
    expect(thermostat).toBeInstanceOf(Thermostat);
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.temperature).toEqual(20)
  });

  it('can get current temperature', function() {
      thermostat.temperature = 40;
    expect(thermostat.getCurrentTemperature()).toEqual(40)
  });

  it('the temperature can go up', function() {
      thermostat.up();
    expect(thermostat.getCurrentTemperature()).toEqual(21)
  });

  it('the temperature can go down', function() {
      thermostat.down();
    expect(thermostat.getCurrentTemperature()).toEqual(19)
  });

});
