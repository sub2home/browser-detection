jquery-browser-detection [![Build Status](https://travis-ci.org/schickling/jquery-browser-detection.png)](https://travis-ci.org/schickling/jquery-browser-detection)
========================

Adds special classes to the `<html>` tag according to  OS, browser, version and screen resolution.

## Installation
```
bower install jquery-browser-detection
```

## Usage
Simply add the script to your `index.html` or module loader.

## Example

CSS:
```css
html{
    background: #FFF;
}

/* Only for IE7 */
html.ie-7{
    background: red;
}

/* Only for mac users in screen resolution 1650x1080 */
html.mac.screen-1680{
    background: gray;
}
```

JS:
```js
if ($('html').hasClass('safari')) {
    alert('This browser is Safari');
}
```

## Todo
* Tests for...
 * osx
 * win
 * linux
 * mobile
 * resizing
 * screen size 
* Minification with grunt