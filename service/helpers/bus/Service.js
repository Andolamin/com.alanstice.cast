'use strict';

var PalmBus, isMockBus = false;
var Subscription = require('../Subscription.js');

try {
	PalmBus = require('palmbus');
} catch (e) {
	PalmBus = require('../mock/MockBus.js');
	isMockBus = true;
}

var path = require('path');

class Service {
	constructor(name) {
		this._handle = new PalmBus.Handle(name, true);
		this._handle.addListener('request', (message) => {
			this._handleRequest(message);
		});
		this._handle.addListener('cancel', (message) => {
			this._handleCancel(message);
		});

		this._methods = {};
	}

	_handleRequest(inMessage) {
		// First, validate that the payload is a valid json string
		try {
			var params = JSON.parse(inMessage.payload());
			if (global.toString.call(params) !== '[object Object]') {
				inMessage.respond(JSON.stringify({
					"errorCode": 400,
					"returnValue": false,
					"errorText": "Request is not a valid json message"
				}));
				return;
			}
		} catch (e) {
			inMessage.respond(JSON.stringify({
					"errorCode": 400,
					"returnValue": false,
					"errorText": "Request is not a valid json message"
				}));
			return;
		}

		var requestPath = path.join(inMessage.category() || "/", inMessage.method());

		if (this._methods[requestPath]) {
		} else {
			inMessage.respond(JSON.stringify({
				returnValue: false,
				errorCode: -1,
				errorText: 'Unknown method "' + inMessage.method() + '" for category "' + inMessage.category() + '"'
			}));
		}
	}

	_handleCancel(message) {
	}

	registerMethod(methodPath, requestHandler) {
		if (typeof methodPath == 'string' && typeof requestHandler == 'function') {
			var category = path.dirname(methodPath).replace(/\./g, "");
			var method = path.basename(methodPath);
			var requestPath = path.join("/", category, method);

			this._methods[requestPath] = requestHandler;
			this._handle.registerMethod(category, method);
		}
	}

	static get isMockBus() {
		return isMockBus;
	}

	call(uri, params) {
		return new Subscription((resolve, reject, notify) => {
		});
	}
}

module.exports = Service;
