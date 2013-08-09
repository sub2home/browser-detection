var casper = require('casper').create();

// set up
casper.start();
casper.options.clientScripts = [
    './test/lib/jquery-1.10.2.min.js',
    './src/jquery.browser.detection.js'
    ];

casper.hasClass = function (className) {
	return this.evaluate(function (className) {
		return $('html').hasClass(className);
	}, className);
};


casper.then(function () {
	casper.userAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:24.0) Gecko/20100101 Firefox/24.0');
});

casper.thenOpen('http://localhost:8888/test/resources/addClasses.html', function () {

	this.test.comment('addClasses');

	this.test.assertTrue(this.hasClass('osx'));
	this.test.assertTrue(this.hasClass('firefox'));
	this.test.assertTrue(this.hasClass('firefox-24'));

});


casper.run();