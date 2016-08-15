'use strict';

class Adapter {
	constructor(bus) {
		this.bus = bus;
		for (var path in this.methods) {
			if (path && this.methods.hasOwnProperty(path)) {
				bus.registerMethod(this.basePath + path, this.methods[path]);
			}
		}
	}

	get basePath() {
		return "";
	}

	get methods() {
		return {};
	}
}

module.exports = Adapter;
