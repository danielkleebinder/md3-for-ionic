import {hexFromArgb} from "@material/material-color-utilities";
import {generateSchemeProperties, rgbFromArgb} from "./utils.js";

/**
 * Apply a theme to an element
 *
 * @param theme Theme object
 * @param options Options
 */
export const generateTheme = (theme, options) => {
    const result = [];

    const sysColorPrefix = options.sysColorPrefix ?? 'mat-sys';
    result.push(`/* Material Design 3 color schemes */`);
    result.push(`--${sysColorPrefix}-source: ${hexFromArgb(theme.source)};`);
    result.push('');
    generateSchemeProperties(
        theme.schemes.light.toJSON(),
        theme.schemes.dark.toJSON(),
        (token, lightHex, darkHex, lightRgb, darkRgb) => {
            result.push(`--${sysColorPrefix}-${token}: light-dark(${lightHex}, ${darkHex});`);
            result.push(`--${sysColorPrefix}-${token}-rgb: light-dark(${lightRgb}, ${darkRgb});`);
        }
    );
    result.push(`--${sysColorPrefix}-surface-container-lowest: light-dark(${hexFromArgb(theme.palettes.neutral.tone(100))}, ${hexFromArgb(theme.palettes.neutral.tone(4))});`);
    result.push(`--${sysColorPrefix}-surface-container-lowest-rgb: light-dark(${rgbFromArgb(theme.palettes.neutral.tone(100))}, ${rgbFromArgb(theme.palettes.neutral.tone(4))});`);
    result.push(`--${sysColorPrefix}-surface-container-low: light-dark(${hexFromArgb(theme.palettes.neutral.tone(96))}, ${hexFromArgb(theme.palettes.neutral.tone(10))});`);
    result.push(`--${sysColorPrefix}-surface-container-low-rgb: light-dark(${rgbFromArgb(theme.palettes.neutral.tone(96))}, ${rgbFromArgb(theme.palettes.neutral.tone(10))});`);
    result.push(`--${sysColorPrefix}-surface-container: light-dark(${hexFromArgb(theme.palettes.neutral.tone(94))}, ${hexFromArgb(theme.palettes.neutral.tone(12))});`);
    result.push(`--${sysColorPrefix}-surface-container-rgb: light-dark(${rgbFromArgb(theme.palettes.neutral.tone(94))}, ${rgbFromArgb(theme.palettes.neutral.tone(12))});`);
    result.push(`--${sysColorPrefix}-surface-container-high: light-dark(${hexFromArgb(theme.palettes.neutral.tone(92))}, ${hexFromArgb(theme.palettes.neutral.tone(17))});`);
    result.push(`--${sysColorPrefix}-surface-container-high-rgb: light-dark(${rgbFromArgb(theme.palettes.neutral.tone(92))}, ${rgbFromArgb(theme.palettes.neutral.tone(17))});`);
    result.push(`--${sysColorPrefix}-surface-container-highest: light-dark(${hexFromArgb(theme.palettes.neutral.tone(90))}, ${hexFromArgb(theme.palettes.neutral.tone(22))});`);
    result.push(`--${sysColorPrefix}-surface-container-highest-rgb: light-dark(${rgbFromArgb(theme.palettes.neutral.tone(90))}, ${rgbFromArgb(theme.palettes.neutral.tone(22))});`);

    if (theme.customColors?.length > 0) {
        const customColorPrefix = options.customColorPrefix ?? 'mat-custom';
        theme.customColors.forEach((customColor) => {
            result.push('');
            result.push(`/* Custom color "${customColor.color.name}" */`);
            generateSchemeProperties(
                customColor.light,
                customColor.dark,
                (token, lightHex, darkHex, lightRgb, darkRgb) => {
                    result.push(`--${customColorPrefix}-${customColor.color.name}-${token}: light-dark(${lightHex}, ${darkHex});`);
                    result.push(`--${customColorPrefix}-${customColor.color.name}-${token}-rgb: light-dark(${lightRgb}, ${darkRgb});`);
                }
            );
        });
    }

    if (options?.paletteTones) {
        const refColorPrefix = options.refColorPrefix ?? 'mat-ref-palette';
        result.push('');
        result.push('/* Palette tone references */');
        const tones = options?.paletteTones ?? [];
        for (const [key, palette] of Object.entries(theme.palettes)) {
            const paletteKey = key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
            result.push('');
            for (const tone of tones) {
                const token = `--${refColorPrefix}-${paletteKey}${tone}`;
                const color = hexFromArgb(palette.tone(tone));
                result.push(`${token}: ${color};`);
            }
        }
    }

    return `:root {\n${result.map((curr) => '  ' + curr).join('\n')}\n}\n`;
}
