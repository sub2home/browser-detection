jquery-browser-detection [![Build Status](https://travis-ci.org/schickling/jquery-browser-detection.png)](https://travis-ci.org/schickling/jquery-browser-detection)
========================

Lightweight plugin to get information about browser, version and OS.

## Installation
```
bower install jquery-browser-detection --save
```

## Usage

#### Get Data
```js
var data = $.browserDetection();

console.log(data.browser); // chrome
console.log(data.version); // 29
console.log(data.os); // osx
```

#### Add CSS classes to `html` tag
```js
var d = $.browserDetection(),
    classes = d.browser + ' ' + d.browser + '-' + d.version + ' ' + d.os;

$('body').addClass(classes);
```

## Todo
* More tests for...
 * osx
 * win
 * linux
 * mobile
* Minification with grunt