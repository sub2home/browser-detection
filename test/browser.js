var casper = require('casper').create();

// set up
casper.start();
casper.options.clientScripts = [
    './test/lib/jquery-1.10.2.min.js',
    './src/jquery.browser.detection.js'
    ];

casper.getData = function () {
	return this.evaluate(function () {
		return $.browserDetection();
	});
};

var testCases = [
	{
		userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:24.0) Gecko/20100101 Firefox/24.0',
		expectedBrowser: 'firefox',
		expectedVersion: 24,
		expectedOs: 'osx'
	}
];

testCases.forEach(function (testCase) {

	casper.then(function () {
		casper.userAgent(testCase.userAgent);
	});
	casper.thenOpen('http://localhost:8888/test/resources/index.html', function () {

		casper.test.comment(testCase.userAgent);

		var data = this.getData();
		this.test.assertEqual(data.browser, testCase.expectedBrowser);
		this.test.assertEqual(data.version, testCase.expectedVersion);
		this.test.assertEqual(data.os, testCase.expectedOs);

	});

});

casper.run();