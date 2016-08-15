info:
	@echo "Available targets are {init, package, run}"

package: init
	@ares-package -e "test" app/ service/

init:
	@cd app; enyo init
	@cd service; npm install

run: init

