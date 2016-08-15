'use strict';

class Subscription extends Promise {
	constructor(resolver, onCancelled) {
		var privates = {
			_isFulfilled: false,
			_onCancelled: onCancelled,
			_progressHandler: () => {}
		};
		super((resolve, reject) => {
			privates._reject = reject;
			const wrappedResolve = value => { resolve(value); privates._isFulfilled = true; };
			const wrappedReject = reason => { reject(reason); privates._isFulfilled = true; };
			const wrappedNotify = value => { privates._progressHandler(value); };
			try {
				resolver(wrappedResolve, wrappedReject, wrappedNotify);
			} catch (err) {
				privates._reject(err);
			}
		});
		this.privates = privates;
	}

	cancel() {
		if (typeof this.privates._onCancelled === "function" && !this.privates._isFulfilled) {
			try {
				this.privates._onCancelled();
			} catch (e) {
				this.privates._reject(e);
			}
		}

		this.privates._reject("Cancelled"); // I assume double-rejections are no-ops
	}

	then(resolveHandler, rejectHandler) {
		// When you chain off a cancellable promise, you get another cancellable promise.
		// And cancellations propagate to progenitor promises, i.e. when calling
		// `promise.then(...).cancel()`, this ends up calling `promise.cancel()` too (see examples).
		return new this.constructor(
			(resolve, reject) => super.then(resolveHandler, rejectHandler),
			() => this.cancel()
		);
	}

	catch(args) {
		super.catch(args);
	}

	progress(handler) {
		this.privates._progressHandler = handler;
		return this;
	}
}

module.exports = Subscription;
