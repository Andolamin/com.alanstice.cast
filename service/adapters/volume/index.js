'use strict';

var Adapter = require('../../helpers/bus/Adapter.js');
var Subscription = require('../../helpers/Subscription.js');

class DiscoveryAdapter extends Adapter {
	get name() {
		return "volume";
	}

	get basePath() {
		return "/volume";
	}

	get methods() {
		return {
			"/getVolume": this.onGetVolumeRequest,
			"/setVolume": this.onSetVolumeRequest,
			"/volumeDown": this.onVolumeDownRequest,
			"/volumeUp": this.onVolumeUpRequest
		};
	}

	onGetVolumeRequest(inRequest) {
		return new Subscription((resolve, reject, notify) => {
			if (inRequest.isSubscription) {
				resolve({returnValue: false, errorCode: 501, errorText: "Method not implemented"});
			} else {
				reject({returnValue: false, errorCode: 405, errorText: "Request not allowed, please subscribe"});
			}
		});
	}

	onSetVolumeRequest(inRequest) {
		return new Subscription((resolve, reject, notify) => {
			if (inRequest.isSubscription) {
				resolve({returnValue: false, errorCode: 501, errorText: "Method not implemented"});
			} else {
				reject({returnValue: false, errorCode: 405, errorText: "Request not allowed, please subscribe"});
			}
		});
	}

	onVolumeDownRequest(inRequest) {
		return new Subscription((resolve, reject, notify) => {
			if (inRequest.isSubscription) {
				resolve({returnValue: false, errorCode: 501, errorText: "Method not implemented"});
			} else {
				reject({returnValue: false, errorCode: 405, errorText: "Request not allowed, please subscribe"});
			}
		});
	}

	onVolumeUpRequest(inRequest) {
		return new Subscription((resolve, reject, notify) => {
			if (inRequest.isSubscription) {
				resolve({returnValue: false, errorCode: 501, errorText: "Method not implemented"});
			} else {
				reject({returnValue: false, errorCode: 405, errorText: "Request not allowed, please subscribe"});
			}
		});
	}

}

module.exports = DiscoveryAdapter;
