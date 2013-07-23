module.exports = function (grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		jshint: {
			files: [
				'Gruntfile.js',
				'src/jquery.browser.detection.js',
				'test/*.js',
			],
			options: {
				// options here to override JSHint defaults
				globals: {
					jQuery: true,
					console: true,
					module: true,
					document: true
				}
			}
		},

		connect: {
			server: {
				options: {
					port: 8888,
					base: './'
				}
			}
		},

		casperjs: {
			files: ['test/*.js']
		}

	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-casperjs');


	grunt.registerTask('test', [
		'jshint',
		'connect:server',
		'casperjs'
	]);

	grunt.registerTask('default', [
		'test'
	]);

};