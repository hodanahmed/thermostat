'use strict';

describe('Thermostat',function(){
  var thermostat;
  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('Can make a new instance of thermostat', function(){
    expect(new Thermostat).toBeInstanceOf(Thermostat);
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.temperature).toEqual(20);
  });

});
