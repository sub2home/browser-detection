(function ($) {

	"use strict";

	$.browserDetection = function () {

		var data = {}, browser, version, os;

		prepare();
		defaultBehavior();

		// exception rules
		renameOsx();

		return data;


		function prepare() {
			var userAgent = navigator.userAgent.toLowerCase(),
				browserParts = /(ie|firefox|chrome|safari|opera)(?:.*version)?(?:[ \/])?([\w.]+)/.exec(userAgent);

			browser = browserParts[1],
			version = browserParts[2],
			os = /(mac|win|linux|freebsd|mobile|iphone|ipod|ipad|android|blackberry|j2me|webtv)/.exec(userAgent)[1];
		}

		function defaultBehavior() {
			data.browser = browser;
			data.version = parseInt(version, 10);
			data.os = os;
		}

		function renameOsx() {
			if (data.os === 'mac') {
				data.os = 'osx';
			}
		}

	};

})(jQuery);