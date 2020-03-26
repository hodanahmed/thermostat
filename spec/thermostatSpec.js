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
//testing for power saving mode default - expect to return a boolean true
  it('has power saving mode on by default', function() {
  expect(thermostat.isPowerSavingMode()).toBe(true);
  });
// testing for power saving mode to turn off - expect boolean false
  it('can switch PSM off', function(){
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingMode()).toBe(false);
});

  //New describe block for PSM on for testing to see if the require limit the PSM mode depending on temperature
  //PSM turns on when temperature is < 25
  describe('when power saving mode is on', function() {
    //testing if power saving mode switches when its above 25
    it('has a maximum temperature of 25 degrees', function() {

      for (var i = 0; i < 6; i++) {
      thermostat.up();
      }
    expect(thermostat.getCurrentTemperature()).toEqual(25);
    });

    // testing for power saving mode to turn on - expect boolean true
    it('can switch PSM on', function(){
      thermostat.switchPowerSavingModeOn();
    expect(thermostat.isPowerSavingMode()).toBe(true);
    });
  });
});
