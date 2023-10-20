.PHONY: clean build security-check

clean:
	rm -rf ./dist ./coverage

build:
	npm ci
	npm run build

security-check:
	npm audit
