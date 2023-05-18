import * as fs from "fs-extra";

import {argbFromHex, themeFromSourceColor} from "@material/material-color-utilities";
import commandLineArgs from "command-line-args";

import {
    generateColorsModule,
    generateTheme,
    generateTokens,
    generateUtilities,
    writeStyleSheet
} from "./generators/index.js";


const optionDefinitions = [
    {name: 'output', alias: 'o', type: String, defaultValue: './src/theme'},
    {name: 'color', alias: 'c', type: String, defaultValue: '#3880ff'}, // '#fbba1f'
];
const options = commandLineArgs(optionDefinitions);

const outDir = options['output'];
const colorSource = options['color'];
const sourcePrefix = '--md-source';
const palettePrefix = '--md-ref-palette';
const colorPrefix = '--md-sys-color';
const customColorPrefix = '--md-custom-color';
const utilitiesPrefix = '--md-sys';
const classPrefix = 'md';

// Get the theme from a hex color
const theme = themeFromSourceColor(
    argbFromHex(colorSource),
    [
        {name: 'success', blend: true, value: argbFromHex('#00ff00')},
        {name: 'warning', blend: true, value: argbFromHex('#ffff00')},
    ]
);

const tokensCss = generateTokens(theme, palettePrefix, colorPrefix, customColorPrefix, sourcePrefix);
const themeLightCss = generateTheme(theme, 'light', colorPrefix, customColorPrefix);
const themeDarkCss = generateTheme(theme, 'dark', colorPrefix, customColorPrefix);
const utilitiesCss = generateUtilities(theme, utilitiesPrefix, colorPrefix);
const colorsModuleCss = generateColorsModule(theme, classPrefix, colorPrefix, customColorPrefix);

writeStyleSheet('tokens.css', tokensCss, `${outDir}/md3/specs`);
writeStyleSheet('theme.light.css', themeLightCss, `${outDir}/md3/specs`);
writeStyleSheet('theme.dark.css', themeDarkCss, `${outDir}/md3/specs`);
writeStyleSheet('utilities.css', utilitiesCss, `${outDir}/md3/specs`);
writeStyleSheet('colors.module.css', colorsModuleCss, `${outDir}/md3/specs`);

// Write barrel export for specification files
writeStyleSheet('specs.css',
    '@import url("tokens.css");\n' +
    '@import url("theme.light.css");\n' +
    '@import url("theme.dark.css");\n' +
    '@import url("utilities.css");\n' +
    '@import url("colors.module.css");\n',
    `${outDir}/md3/specs`);

// Write barrel export for Ionic MD3
writeStyleSheet('theme.css',
    '@import url("specs/specs.css");\n' +
    '@import url("ionic-overrides/ionic-overrides.css");\n'
    , `${outDir}/md3`)

fs.copy('./src/ionic-overrides', `${outDir}/md3/ionic-overrides`, {overwrite: true});
console.log('Ionic overrides created');

console.log();
console.log('Add the following line of CSS code to your "global.scss" file:');
console.log('@import "theme/md3/theme.css";');
