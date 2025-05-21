# Material Design 3 for the Ionic Framework

This repository provides a tool-set for generating [Material Design 3 (MD3)](https://m3.material.io/) style sheets,
similar to the [MD3 theme builder](https://m3.material.io/theme-builder), and creates style overrides for the
[Ionic Framework](https://ionic.io/) in order to apply MD3.

__Note__: If you are not relying on the Ionic Framework, you are probably better off using
the [MD3 theme builder](https://m3.material.io/theme-builder).

### Run locally

You can run the code in this repository locally by cloning the repository and running `npm install`:

```bash
git clone https://github.com/danielkleebinder/md3-for-ionic.git
cd md3-for-ionic
npm install
```

Afterwards, just run the `src/index.js` file as node process:

```bash
node . --output="./out" --color=#ff0000 --with-ionic-overrides
```

The generator will derive primary, secondary, tertiary, a neutral, a neutral variant and an error color from the color
you specified with `--color=<hex>`.

### Add Overwrites

In order for your Ionic application to recognize your generated MD3 styles and Ionic overwrites, you have to copy the
newly created `md3/` folder (a sub-directory of your `--output` directory) into your Ionic project into `src/theme`.
Afterwards, add the following line of CSS code at the bottom of your `global.scss` file:

```CSS
@import "theme/md3/theme.css";
```

And that's it, you can now extend the existing theme files and enjoy your MD3.

### Add Roboto Font (recommended)

If you would like to use the Roboto font as well, you have to include the following lines in your `index.html` file.

```html

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap" rel="stylesheet">
```

## Contribute

This project is only supposed to be a helper to bridge the time between the release of
the [Material Design 3 (MD3) Guidelines](https://m3.material.io/) and the point in time when
the [Ionic Framework](https://ionic.io/) eventually supports MD3. In order to make this project work, __feel free to
contribute__ by [opening a pull request](https://github.com/danielkleebinder/md3-for-ionic/pulls).

In order to test your contributions, I would recommend creating a new Ionic application to apply your styles. Each
component has it's own css file in the directory `md3/ionic/` and strictly follows
the [MD3 component specs](https://m3.material.io/components). Extend those or create new component style files if
necessary :-)
