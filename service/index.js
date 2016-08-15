'use strict';

var fs = require('fs');

var Service = require('./helpers/bus/Service.js');
var service = new Service('com.alanstice.cast.service');

var AdapterClass = require('./helpers/bus/Adapter.js');
var adapterRootPath = './adapters/';

fs.readdir('./adapters/', (err, paths) => {
	for (var adapterPath of paths) {
		try {
			var Adapter = require(adapterRootPath + adapterPath + "/index.js");
			if (Adapter.prototype instanceof AdapterClass) {
				new Adapter(service);
			}
		} catch (e) {
			console.error("Couldn't load adapter in path " + adapterPath);
		}
	}
});
