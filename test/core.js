var casper = require('casper').create();

// set up
casper.start();
casper.options.clientScripts = [
	'./test/lib/jquery-1.10.2.min.js',
	'./src/jquery.browser.detection.js'
	];

casper.then(function() {
    this.test.assertEqual('test', 'test');
});

casper.run();