'use strict';

var Adapter = require('../../helpers/bus/Adapter.js');
var Subscription = require('../../helpers/Subscription.js');

class DiscoveryAdapter extends Adapter {
	get name() {
		return "controls";
	}

	get basePath() {
		return "/controls";
	}

	get methods() {
		return {
			"/fastForward": this.onFastForwardRequest,
			"/jumpTo": this.onJumpToRequest,
			"/next": this.onNextRequest,
			"/pause": this.onPauseRequest,
			"/play": this.onPlayRequest,
			"/previous": this.onPreviousRequest,
			"/rewind": this.onRewindRequest,
			"/seek": this.onSeekRequest,
			"/stop": this.onStopRequest
		};
	}

	onFastForwardRequest(inRequest) {
		return new Subscription((resolve, reject, notify) => {
			if (inRequest.isSubscription) {
				resolve({returnValue: false, errorCode: 501, errorText: "Method not implemented"});
			} else {
				reject({returnValue: false, errorCode: 405, errorText: "Request not allowed, please subscribe"});
			}
		});
	}

	onJumpToRequest(inRequest) {
		return new Subscription((resolve, reject, notify) => {
			if (inRequest.isSubscription) {
				resolve({returnValue: false, errorCode: 501, errorText: "Method not implemented"});
			} else {
				reject({returnValue: false, errorCode: 405, errorText: "Request not allowed, please subscribe"});
			}
		});
	}

	onNextRequest(inRequest) {
		return new Subscription((resolve, reject, notify) => {
			if (inRequest.isSubscription) {
				resolve({returnValue: false, errorCode: 501, errorText: "Method not implemented"});
			} else {
				reject({returnValue: false, errorCode: 405, errorText: "Request not allowed, please subscribe"});
			}
		});
	}

	onPauseRequest(inRequest) {
		return new Subscription((resolve, reject, notify) => {
			if (inRequest.isSubscription) {
				resolve({returnValue: false, errorCode: 501, errorText: "Method not implemented"});
			} else {
				reject({returnValue: false, errorCode: 405, errorText: "Request not allowed, please subscribe"});
			}
		});
	}

	onPlayRequest(inRequest) {
		return new Subscription((resolve, reject, notify) => {
			if (inRequest.isSubscription) {
				resolve({returnValue: false, errorCode: 501, errorText: "Method not implemented"});
			} else {
				reject({returnValue: false, errorCode: 405, errorText: "Request not allowed, please subscribe"});
			}
		});
	}

	onPreviousRequest(inRequest) {
		return new Subscription((resolve, reject, notify) => {
			if (inRequest.isSubscription) {
				resolve({returnValue: false, errorCode: 501, errorText: "Method not implemented"});
			} else {
				reject({returnValue: false, errorCode: 405, errorText: "Request not allowed, please subscribe"});
			}
		});
	}

	onRewindRequest(inRequest) {
		return new Subscription((resolve, reject, notify) => {
			if (inRequest.isSubscription) {
				resolve({returnValue: false, errorCode: 501, errorText: "Method not implemented"});
			} else {
				reject({returnValue: false, errorCode: 405, errorText: "Request not allowed, please subscribe"});
			}
		});
	}

	onSeekRequest(inRequest) {
		return new Subscription((resolve, reject, notify) => {
			if (inRequest.isSubscription) {
				resolve({returnValue: false, errorCode: 501, errorText: "Method not implemented"});
			} else {
				reject({returnValue: false, errorCode: 405, errorText: "Request not allowed, please subscribe"});
			}
		});
	}

	onStopRequest(inRequest) {
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
