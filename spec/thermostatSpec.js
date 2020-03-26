describe('Thermostat',function(){
  var thermostat;
  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('Can make a new instance of thermostat', function(){
    expect(new Thermostat).toBeInstanceOf(Thermostat);
  });
});
