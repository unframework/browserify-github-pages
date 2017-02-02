(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
window.onload = function () {
    document.body.style.textAlign = 'center';
    document.body.style.fontSize = '32pt';
    document.body.style.paddingTop = '200px';

    document.body.appendChild(document.createTextNode('Hello World!'));

    var link = document.createElement('a');
    link.href = 'https://github.com/unframework/browserify-github-pages';
    link.style.display = 'block';
    link.style.fontSize = '18pt';
    link.appendChild(document.createTextNode('See deployment quickstart instructions'));
    document.body.appendChild(link);
};

},{}]},{},[1]);
