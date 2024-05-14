# design-system setup

## dependencies:

- sass
- [dependecies project](https://github.com/flexbox-maniacs/dependencies)

## aliases:
### `tsconfig.json`: compilerOptions.paths

- `"@ds": ["./node_modules/{YOUR DS FOLDER}/src/components.ts"]`
- `"@mixins": ["./node_modules/{YOUR DEPENDENCIES FOLDER}/sass/mixins/*"]`
- `"@scripts": ["./node_modules/{YOUR DEPENDENCIES FOLDER}/scripts.ts"]`
- `"@dom-types": ["./node_modules/{YOUR DS FOLDER}/src/components/dom-types.ts"]` (optional)

### `vite.config.ts`: defineConfig.resolve.alias
(`import * as path from "path"`)

- `"@ds": path.resolve(__dirname, "./node_modules/{YOUR DS FOLDER}/src/components.ts")`
- `"@scripts": path.resolve(__dirname, "./node_modules/{YOUR DEPENDENCIES FOLDER}/scripts.ts")`
- `"@mixins": path.resolve(__dirname, "./node_modules/{YOUR DEPENDENCIES FOLDER}/mixins")`
- `"@dom-types": path.resolve(__dirname, "./node_modules/{YOUR DS FOLDER}/src/components/dom-types.ts")` (optional)

## general configuration

- `window.React = React` in root file (along `React` and `ReactDOM` import)
