component extends="testbox.system.BaseSpec" {
	
	function run() {
	
		describe("userService API Login", function(){
			it( "will error with incorrect login", function(){
					var oTest = new cfcs.userServiceRemote();
					expect( oTest.login( 'gavin@gavin.com', 'topsecret').result ).toBe('400');
			});
			it( "will error with incorrect password", function(){
					var oTest = new cfcs.userServiceRemote();
					expect( oTest.login( 'gavin@gavin.co.nz', 'notsecret').result ).toBe('400');
			});
			it( "will success with correct login", function(){
					var oTest = new cfcs.userServiceRemote();
					expect( oTest.login( 'gavin@gavin.co.nz', 'topsecret').result ).toBe('200');
			});
		});
		
	}
	
	
}