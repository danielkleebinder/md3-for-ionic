# Material Design 3 for the Ionic Framework

This repository provides a tool-set for generating [Material Design 3 (MD3)](https://m3.material.io/) style sheets,
similar to the [MD3 theme builder](https://m3.material.io/theme-builder), and creates style overrides for the
[Ionic Framework](https://ionic.io/) in order to apply MD3.

__Note__: If you are not relying on the Ionic Framework, you are probably better off using
the [MD3 theme builder](https://m3.material.io/theme-builder).

## Installation

```bash
npm i @dk/md3-for-ionic --save-dev
```

### Generate Ionic Overrides

```bash
node node_modules/@dk/md3-for-ionic/index.js --color=#00ff00
```

or by using NPX:

```bash
npx @dk/md3-for-ionic --color=#00ff00
```

### Add Roboto Font

If you would like to use the Roboto font as well, you have to include the following lines in your `index.html` file.

```html

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap" rel="stylesheet">
```
