import fs from "fs";
import {hexFromArgb} from "@material/material-color-utilities";

export const generateSchemeProperties = (lightScheme, darkScheme, callback) => {
    for (const [key] of Object.entries(lightScheme)) {
        const token = key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
        const lightColor = hexFromArgb(lightScheme[key]);
        const darkColor = hexFromArgb(darkScheme[key]);
        callback(token, lightColor, darkColor);
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
