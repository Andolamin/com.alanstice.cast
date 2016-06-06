var PlayMediaAssistant = function() {}

PlayMediaAssistant.prototype = {
	run: function(future, subscription) {
		future.result = {returnValue: false, errorCode: 501, errorText: "Method not implemented"};
	},
	cancelSubscription: function() {
	}
}
