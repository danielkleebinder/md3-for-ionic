import fs from "fs";
import {hexFromArgb, rgbaFromArgb} from "@material/material-color-utilities";

export const rgbFromArgb = (argb) => {
    const rgba = rgbaFromArgb(argb);
    return `rgb(${rgba.r}, ${rgba.g}, ${rgba.b})`;
}

export const generateSchemeProperties = (lightScheme, darkScheme, callback) => {
    for (const [key] of Object.entries(lightScheme)) {
        const token = key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
        const lightHex = hexFromArgb(lightScheme[key]);
        const darkHex = hexFromArgb(darkScheme[key]);
        const lightRgb = rgbFromArgb(lightScheme[key]);
        const darkRgb = rgbFromArgb(darkScheme[key]);
        callback(token, lightHex, darkHex, lightRgb, darkRgb);
    }
};

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
    console.log(`Stylesheet "${fullName}" created`);
}
