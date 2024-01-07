# design-system setup

## dependencies:

- sass
- scripts project

## aliases:

- `"@ds": ["./node_modules/{YOUR DS FOLDER}/src/components.ts"]`
- `"@scripts": ["./node_modules/{YOUR SCRIPTS FOLDER}/scripts.ts"]`
- `"@dom-types": ["./node_modules/{YOUR DS FOLDER}/src/components/dom-types.ts"]` (optional)

## general configuration

- `window.React = React` in root file (along `React` and `ReactDOM` import)
