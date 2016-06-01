var ready = require("enyo/ready");

var Application = require("./src/apps/Application.js");

ready(function() {
	console.log("Ready");
	var app = window.app = new Application({
		name: "com.alanstice.cast"
	});
});
