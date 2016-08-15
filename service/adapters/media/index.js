'use strict';

var Adapter = require('../../helpers/bus/Adapter.js');
var Subscription = require('../../helpers/Subscription.js');

class DiscoveryAdapter extends Adapter {
	get name() {
		return "media";
	}

	get basePath() {
		return "/media";
	}

	get methods() {
		return {
			"/playMedia": this.onPlayMediaRequest,
			"/getDuration": this.onGetDurationRequest,
			"/getPosition": this.onGetPositionRequest,
			"/getStatus": this.onGetStatusRequest
		};
	}

	onPlayMediaRequest(inRequest) {
		return new Subscription((resolve, reject, notify) => {
			if (inRequest.isSubscription) {
				reject({returnValue: false, errorCode: 405, errorText: "Subscription not yet implemented"});
			} else {
				reject({returnValue: false, errorCode: 405, errorText: "Request not yet implemented"});
			}
		});
	}

	onGetDurationRequest(inRequest) {
		return new Subscription((resolve, reject, notify) => {
			if (inRequest.isSubscription) {
				reject({returnValue: false, errorCode: 405, errorText: "Subscription not yet implemented"});
			} else {
				reject({returnValue: false, errorCode: 405, errorText: "Request not yet implemented"});
			}
		});
	}

	onGetPositionRequest(inRequest) {
		return new Subscription((resolve, reject, notify) => {
			if (inRequest.isSubscription) {
				reject({returnValue: false, errorCode: 405, errorText: "Subscription not yet implemented"});
			} else {
				reject({returnValue: false, errorCode: 405, errorText: "Request not yet implemented"});
			}
		});
	}

	onGetStatusRequest(inRequest) {
		return new Subscription((resolve, reject, notify) => {
			if (inRequest.isSubscription) {
				reject({returnValue: false, errorCode: 405, errorText: "Subscription not yet implemented"});
			} else {
				reject({returnValue: false, errorCode: 405, errorText: "Request not yet implemented"});
			}
		});
	}

}

module.exports = DiscoveryAdapter;
