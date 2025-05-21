import * as fs from "fs-extra";

import commandLineArgs from "command-line-args";
import {argbFromHex, themeFromSourceColor} from "@material/material-color-utilities";

import {generateTheme, generateUtilities, writeStyleSheet} from "./generators/index.js";


const optionDefinitions = [
    {name: 'output', alias: 'o', type: String, defaultValue: './src/theme'},
    {name: 'color', alias: 'c', type: String, defaultValue: '#3880ff'}, // '#fbba1f'
    {name: 'with-ionic-overrides', type: Boolean, defaultValue: false},
    {name: 'sys-color-prefix', type: String, defaultValue: 'mat-sys'},
    {name: 'custom-color-prefix', type: String, defaultValue: 'mat-custom'},
    {name: 'ref-color-prefix', type: String, defaultValue: 'mat-ref-palette'},
];
const options = commandLineArgs(optionDefinitions);

const outDir = options['output'];
const colorSource = options['color'];
const withIonicOverrides = options['with-ionic-overrides'];

const sysColorPrefix = options['sys-color-prefix'];
const customColorPrefix = options['custom-color-prefix'];
const refColorPrefix = options['ref-color-prefix'];

// Get the theme from a hex color
const theme = themeFromSourceColor(
    argbFromHex(colorSource),
    [
        {name: 'success', blend: true, value: argbFromHex('#00ff00')},
        {name: 'warning', blend: true, value: argbFromHex('#ffff00')},
    ]
);

const paletteTones = [100, 99, 95, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0];
const generatorOpts = {sysColorPrefix, customColorPrefix, refColorPrefix, paletteTones};

const themeCss = generateTheme(theme, generatorOpts);
const utilitiesCss = generateUtilities(theme, generatorOpts);

writeStyleSheet('theme.css', themeCss, `${outDir}/md3/specs`);
writeStyleSheet('utilities.css', utilitiesCss, `${outDir}/md3/specs`);

// Write barrel export for specification files
writeStyleSheet('index.css',
    '@import url("theme.css");\n' +
    '@import url("utilities.css");\n',
    `${outDir}/md3/specs`);

let barrelExport = '@import url("specs/index.css");\n';
if (withIonicOverrides) {
    barrelExport += '@import url("ionic/index.css");\n';
}

// Write barrel export for Ionic MD3
writeStyleSheet('theme.css', barrelExport, `${outDir}/md3`)

if (withIonicOverrides) {
    fs.copy('./src/ionic', `${outDir}/md3/ionic`, {overwrite: true});
    console.log('Ionic overrides created');
}

console.log();
console.log('Add the following line of CSS code to your "global.scss" file:');
console.log('@import "theme/md3/theme.css";');
