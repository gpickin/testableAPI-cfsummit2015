// Original Source: http://www.meanstack.co/setting-up-jasmine-and-grunt/
// Combined with https://gist.github.com/seancoyne/9b1b24dca08ed9282fc6

module.exports = function (grunt) {
	
	grunt.loadNpmTasks('grunt-shell');
	
	grunt.initConfig({
		pkg: grunt.file.readJSON('node_modules/grunt/package.json'),
		jasmine: {
			all: {
				src: [
					'js/jquery.min.js',
					'src/*.js' 
					],
				options: {
					//'vendor': ['path/to/vendor/libs/*.js'],
					'specs': ['tests/spec/*.js' ],
					'--web-security': false
				}
			}
		}, 

		watch: {
			js: {
				files: [
					'js/*.js',
					'specs/*.js',
					"cfcs/*.cfc"
				],
				tasks: ['jasmine:all']
			},
			cfml: {
					files: [ "cfcs/*.cfc"],
					tasks: [ "testbox" ]
				}
		},
		
		shell: {
				testbox: {
					command: "./node_modules/testbox-runner/index.js --colors --runner http://www.testableapi.local.com:8504/tests/runner.cfm --directory /tests/specs --recurse true"
				}
		}

	});
	
	grunt.registerTask("testbox", [ "shell:testbox" ]);
	grunt.loadNpmTasks('grunt-contrib-jasmine');
	grunt.loadNpmTasks('grunt-contrib-watch');
};