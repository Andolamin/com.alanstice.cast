info:
	@echo "Available targets are {init, package, run}"

package: init
	@ares-package app/ service/

init:
	@cd app; enyo init

run: init

