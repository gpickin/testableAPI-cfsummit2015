component extends="testbox.system.BaseSpec" {
	
	function run() {
	
		describe("userService API Login", function(){
			it( "will error with incorrect login", function(){
					var email = "gavin@gavin.com";
					var password = "topsecret";
					var result = "";
					http url="http://www.testableapi.local.com:8504/cfcs/userServiceRemote.cfc?method=login&email=#email#&password=#password#" result="result";
					expect( DeserializeJSON(result.filecontent).result ).toBe('400');
			});
			it( "will error with incorrect password", function(){
					var email = "gavin@gavin.co.nz";
					var password = "notsecret";
					var result = "";
					http url="http://www.testableapi.local.com:8504/cfcs/userServiceRemote.cfc?method=login&email=#email#&password=#password#" result="result";
					expect( DeserializeJSON(result.filecontent).result ).toBe('400');
			});
			it( "will success with correct login", function(){
					var email = "gavin@gavin.co.nz";
					var password = "topsecret";
					var result = "";
					http url="http://www.testableapi.local.com:8504/cfcs/userServiceRemote.cfc?method=login&email=#email#&password=#password#" result="result";
					expect( DeserializeJSON(result.filecontent).result ).toBe('200');
			});
		});
		
	}
	
	
}