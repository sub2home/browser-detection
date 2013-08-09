jquery-browser-detection [![Build Status](https://travis-ci.org/schickling/jquery-browser-detection.png)](https://travis-ci.org/schickling/jquery-browser-detection)
========================

Lightweight plugin to get browser, version, OS and screen resoluion.

## Installation
```
bower install jquery-browser-detection --save
```

## Usage

```js
var data = $.browserDetection();

console.log(data.browser); // chrome
console.log(data.version); // 29
console.log(data.os); // osx
```

## Todo
* Tests for...
 * osx
 * win
 * linux
 * mobile
 * resizing
 * screen size 
* Browser detection not by User Agent
* Minification with grunt