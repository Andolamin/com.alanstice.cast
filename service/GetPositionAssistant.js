var GetPositionAssistant = function() {}

GetPositionAssistant.prototype = {
	run: function(future, subscription) {
		future.result = {returnValue: false, errorCode: 501, errorText: "Method not implemented"};
	},
	cancelSubscription: function() {
	}
}
