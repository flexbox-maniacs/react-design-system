# design-system setup

## dependencies:
- sass
- theme-default
- scripts

## aliases:
- `"@ds": ["./node_modules/{YOUR DS FOLDER}/src/index.ts"]`
- `"@dom-types": ["./node_modules/{YOUR DS FOLDER}/src/components/dom-types.ts"]`
- `"@scripts": ["./node_modules/{YOUR SCRIPTS FOLDER}/scripts.ts"]`
- `"@mixins": ["./node_modules/@flex/theme-default/scss/mixins/*"]`
- `"@size": ["./node_modules/@flex/theme-default/scss/functions/_size.scss"]`
- `"@theme": ["./node_modules/@flex/theme-default/scss/main.scss"]`

## general configuration
- `window.React = React` in root file (along `React` and `ReactDOM` import)
