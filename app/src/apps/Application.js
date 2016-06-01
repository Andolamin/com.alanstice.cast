var
	kind = require('enyo/kind'),
	Application = require('enyo/Application');

var
	MainView = require('../views/MainView.js');

module.exports = kind({
	name: "com.alanstice.cast.Application",
	kind: Application,
	view: MainView
});
