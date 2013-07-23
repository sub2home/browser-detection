var casper = require('casper').create();

// set up
casper.options.clientScripts = [
    './test/lib/jquery-1.10.2.min.js',
    './src/jquery.browser.detection.js'
    ];

casper.start('http://localhost:8888');
casper.then(function() {

    this.test.assertEqual('test', this.evaluate(function () {
        return $.browser();
    }));

});

casper.run();