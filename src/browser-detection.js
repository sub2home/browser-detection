(function(name, definition) {

  if (typeof define === 'function') { // AMD
    define(definition);
  } else if (typeof module !== 'undefined' && module.exports) { // Node.js
    module.exports = definition();
  } else { // Browser
    var theModule = definition(),
      global = this,
      old = global[name];
    theModule.noConflict = function() {
      global[name] = old;
      return theModule;
    };
    global[name] = theModule;
  }
})('browserDetection', function() {

  "use strict";

  return function(options) {

    var data = {}, browser, version, os;

    parseUserAgent();

    // exception rules
    renameOsx();
    cutSafariVersion();

    prepareData();
    processOptions();

    return data;

    function parseUserAgent() {
      var userAgent = navigator.userAgent.toLowerCase(),
        browserParts = /(ie|firefox|chrome|safari|opera)(?:.*version)?(?:[ \/])?([\w.]+)/.exec(userAgent);

      if ( !! userAgent.match(/trident\/7\./)) {
        browser = "ie",
        version = 11;
      } else {
        browser = browserParts[1],
        version = browserParts[2];
      }

      os = /(mac|win|linux|freebsd|mobile|iphone|ipod|ipad|android|blackberry|j2me|webtv)/.exec(userAgent)[1];
    }

    function prepareData() {
      data.browser = browser;
      data.version = parseInt(version, 10);
      data.os = os;
    }

    function renameOsx() {
      if (os === 'mac') {
        os = 'osx';
      }
    }

    function cutSafariVersion() {
      if (os === 'safari') {
        version = version.substring(0, 1);
      }
    }

    function processOptions() {
      options = options || {};

      if (options.addClasses) {
        document.body.parentNode.className += ' ' + data.os + ' ' + data.browser + ' ' + data.browser + '-' + data.version;
      }
    }

  };

});