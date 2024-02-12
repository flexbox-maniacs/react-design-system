# design-system setup

## dependencies:

- sass
- [dependecies project](https://github.com/flexbox-maniacs/dependencies)

## aliases:

- `"@ds": ["./node_modules/{YOUR DS FOLDER}/src/components.ts"]`
- `"@scripts": ["./node_modules/{YOUR DEPENDENCIES FOLDER}/scripts.ts"]`
- `"@mixins": ["./node_modules/{YOUR DEPENDENCIES FOLDER}/sass/mixins/*"]`
- `"@dom-types": ["./node_modules/{YOUR DS FOLDER}/src/components/dom-types.ts"]` (optional)

## general configuration

- `window.React = React` in root file (along `React` and `ReactDOM` import)
