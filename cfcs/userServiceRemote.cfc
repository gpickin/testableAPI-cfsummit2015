component name="userServiceRemote" { 
	
	remote function login( required string email, required string password ) returnType="struct" returnFormat="json" {
		var result = {};
		if ( email == 'gavin@gavin.co.nz'){
			if ( password == 'topsecret'){
				result.result = 200;
			}
			else {
				result.result = 400;
			}
		} else {
			result.result = 400;
		}
		return result;
	}
	
	remote function resetPassword( required string email ) returnType="struct" returnFormat="json" {
		var result = {};
		if ( email == 'gavin@gavin.co.nz'){
			result.result = 200;
		} else {
			result.result = 400;
			result.email = email;
		}
		return result;
	}
	
}
