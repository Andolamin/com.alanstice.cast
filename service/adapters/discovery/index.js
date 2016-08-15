'use strict';

var Adapter = require('../../helpers/bus/Adapter.js');
var Subscription = require('../../helpers/Subscription.js');

class DiscoveryAdapter extends Adapter {
	get name() {
		return "discovery";
	}

	get methods() {
		return {
			"/listDevices": this.onListDevicesRequest
		};
	}

	get discoveryRunning() {
		return this._discoveryRunning || false;
	}

	set discoveryRunning(newValue) {
		this._discoveryRunning = newValue;
	}

	onListDevicesRequest(inRequest) {
		return new Subscription((resolve, reject, notify) => {
			if (inRequest.isSubscription) {
				resolve({returnValue: false, errorCode: 501, errorText: "Subscription not yet implemented"});
			} else {
				reject({returnValue: false, errorCode: 405, errorText: "Request not allowed, please subscribe"});
			}
		});
	}
}

module.exports = DiscoveryAdapter;
