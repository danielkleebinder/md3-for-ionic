import fs from "fs";
import {blueFromArgb, greenFromArgb, hexFromArgb, redFromArgb} from "@material/material-color-utilities";

export const rgbFromArgb = (argb) => [
    redFromArgb(argb),
    greenFromArgb(argb),
    blueFromArgb(argb)
].join(' ');

export const generateCssVariable = (name, argb, hex = true, rgb = true) => {
    const result = [];
    if (hex) result.push(`${name}: ${hexFromArgb(argb)};`);
    if (rgb) result.push(`${name}-rgb: ${rgbFromArgb(argb)};`);
    return result;
}

export const generateTypescale = (
    name,
    fontFamilyName = 'Roboto',
    fontFamilyStyle = 'Regular',
    fontWeight = '400',
    fontSize = '1rem',
    lineHeight = '1.25rem',
    letterSpacing = '0'
) => [
    `${name}-font-family-name: ${fontFamilyName};`,
    `${name}-font-family-style: ${fontFamilyStyle};`,
    `${name}-font-weight: ${fontWeight};`,
    `${name}-font-size: ${fontSize};`,
    `${name}-line-height: ${lineHeight};`,
    `${name}-letter-spacing: ${letterSpacing};`,
    `${name}: normal ${fontWeight} ${fontSize}/${lineHeight} ${fontFamilyName};`
];

export const generateTypescaleCssClass = (
    className,
    typescalePrefix,
) => `.${className} {\n` + [
    `font-family: var(${typescalePrefix}-font-family-name);`,
    `font-style: var(${typescalePrefix}-font-family-style);`,
    `font-weight: var(${typescalePrefix}-font-weight);`,
    `font-size: var(${typescalePrefix}-font-size);`,
    `line-height: var(${typescalePrefix}-line-height);`,
    `letter-spacing: var(${typescalePrefix}-letter-spacing);`
].map((curr) => '  ' + curr).join('\n') + '\n}\n';

export const writeStyleSheet = (fileName, fileContent, outDir = './out') => {
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, {recursive: true});
    const fullName = `${outDir}/${fileName}`;
    try {
        fs.writeFileSync(fullName, fileContent);
    } catch (err) {
        console.error(`Could not write ${fullName} to file:`);
        console.error(err);
        return;
    }
    console.log(`Style sheet "${fullName}" created`);
}
