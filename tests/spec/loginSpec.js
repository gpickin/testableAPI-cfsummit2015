describe("Forgotten Password Form", function() {

  it("should warn you if the email is invalid before making Ajax Call", function() {
    
    expect( isEmailInputInvalid('') ).toBe(true);
    expect( isEmailInputInvalid('dddddddddd') ).toBe(true);
    expect( isEmailInputInvalid('dddddd@') ).toBe(true);
    expect( isEmailInputInvalid('dddddd@ddddd') ).toBe(true);
    expect( isEmailInputInvalid('dddddd@ddddddd.') ).toBe(true);
    expect( isEmailInputInvalid('dddddd@ddddddd.com') ).toBe(false); 
  });

});  

describe("Login Form", function() {

  it("should set status correct status message with successful Ajax Response", function() {
    spyOn( window, "setStatusMessage");

    processLoginAjaxDone('{"RESULT":"200"}');

    expect(setStatusMessage).toHaveBeenCalled();
    expect(setStatusMessage).toHaveBeenCalledWith('TARDIS Access Granted - Please wait for the Doctor to take you for a spin');
  });


  it("should set status correct status message with unsuccessful Ajax Response", function() {
    spyOn( window, "setStatusMessage");

    processLoginAjaxDone('{"RESULT":"400"}');

    expect(setStatusMessage).toHaveBeenCalled();
    expect(setStatusMessage).toHaveBeenCalledWith('Did you lose your TARDIS key? Please try to login again.');
  });

  it("should set status correct status message with failing Ajax Response", function() {
    spyOn( window, "setStatusMessage");

    processLoginAjaxFail('{"ERROR":"ANYTHING"}');

    expect(setStatusMessage).toHaveBeenCalled();
    expect(setStatusMessage).toHaveBeenCalledWith('The TARDIS is lost in a timey whimey vortex - try back later.');
  });

});  


describe("Login API", function() {
  
  beforeEach(function( done ) {
	spyOn( window, "processLoginAjaxDone").and.callFake( function(){
		done();
	});
    	spyOn( window, "processLoginAjaxFail").and.callFake( function(){
		done();
	});
    	loginButtonEventHandlerProcess( 'gavin@gavin.co.nz', 'password');
    
  });
  
  it("should return a failing Ajax Response", function() {
    
	//loginButtonEventHandlerProcess( 'gavin@gavin.co.nz', 'password');
      
	expect(processLoginAjaxDone).toHaveBeenCalled();
	expect(processLoginAjaxDone).toHaveBeenCalledWith('{"RESULT":400}');
	expect(processLoginAjaxFail).not.toHaveBeenCalled();
  });

});

describe("Login API", function() {
  
  beforeEach(function( done ) {
	spyOn( window, "processLoginAjaxDone").and.callFake( function(){
		done();
	});
    	spyOn( window, "processLoginAjaxFail").and.callFake( function(){
		done();
	});
    	loginButtonEventHandlerProcess( 'gavin@gavin.co.nz', 'topsecret');
  });
  
  it("should return a Successful Ajax Response", function() {
    
	//loginButtonEventHandlerProcess( 'gavin@gavin.co.nz', 'password');
      
	expect(processLoginAjaxDone).toHaveBeenCalled();
	expect(processLoginAjaxDone).toHaveBeenCalledWith('{"RESULT":200}');
	expect(processLoginAjaxFail).not.toHaveBeenCalled();
  });

});
