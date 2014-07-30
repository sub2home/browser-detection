browser-detection [![Build Status](https://travis-ci.org/sub2home/browser-detection.png?branch=master)](https://travis-ci.org/sub2home/browser-detection)
========================

Lightweight package to get information about browser, version and OS.

## Installation
```sh
$ bower install browserdetection --save
```

## Usage

```javascript
var data = browserDetection();

console.log(data.browser); // chrome
console.log(data.version); // 29
console.log(data.os); // osx
```

#### Possible values

* **data.browser:** `ie`, `chrome`, `firefox`, `safari`, `opera`
* **data.version:** *depends on the browser*
* **data.os:** `mac`, `win`, `linux`, `freebsd`, `mobile`, `iphone`, `ipod`, `ipad`, `android`, `blackberry`, `j2me`, `webtv`


#### Add CSS classes to `html` tag

Javascript:
```javascript
browserDetection({
    addClasses: true
});
```

CSS:
```css
html{
    background: white;
}

/* Internet Explorer 7 specific */
html.ie-7{
    background: red;
}

/* Only for OSX users with firefox */
html.osx.firefox{
    background: blue;
}
```

## Todo
* More tests for...
 * osx
 * win
 * linux
 * mobile
* Minification with grunt
