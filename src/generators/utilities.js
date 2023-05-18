export const generateUtilities = (
    theme,
    utilitiesPrefix = '--md-sys',
    tokenPrefix = '--md-sys-color'
) => {
    const cssUtilities = [];

    cssUtilities.push('');
    cssUtilities.push('/* Elevation steps */');
    cssUtilities.push(`--md-sys-elevation-0: 0px 0px 0px 0px rgb(var(${tokenPrefix}-shadow-rgb) / 0.2), 0px 0px 0px 0px rgb(var(${tokenPrefix}-shadow-rgb) / 0.14), 0px 0px 0px 0px rgb(var(${tokenPrefix}-shadow-rgb) / 0.12);`);
    cssUtilities.push(`--md-sys-elevation-1: 0px 3px 1px -2px rgb(var(${tokenPrefix}-shadow-rgb) / 0.2), 0px 2px 2px 0px rgb(var(${tokenPrefix}-shadow-rgb) / 0.14), 0px 1px 5px 0px rgb(var(${tokenPrefix}-shadow-rgb) / 0.12);`);
    cssUtilities.push(`--md-sys-elevation-2: 0px 2px 4px -1px rgb(var(${tokenPrefix}-shadow-rgb) / 0.2), 0px 4px 5px 0px rgb(var(${tokenPrefix}-shadow-rgb) / 0.14), 0px 1px 10px 0px rgb(var(${tokenPrefix}-shadow-rgb) / 0.12);`);
    cssUtilities.push(`--md-sys-elevation-3: 0px 5px 5px -3px rgb(var(${tokenPrefix}-shadow-rgb) / 0.2), 0px 8px 10px 1px rgb(var(${tokenPrefix}-shadow-rgb) / 0.14), 0px 3px 14px 2px rgb(var(${tokenPrefix}-shadow-rgb) / 0.12);`);
    cssUtilities.push(`--md-sys-elevation-4: 0px 5px 5px -3px rgb(var(${tokenPrefix}-shadow-rgb) / 0.2), 0px 8px 10px 1px rgb(var(${tokenPrefix}-shadow-rgb) / 0.14), 0px 3px 14px 2px rgb(var(${tokenPrefix}-shadow-rgb) / 0.12);`);
    cssUtilities.push(`--md-sys-elevation-5: 0px 8px 10px -6px rgb(var(${tokenPrefix}-shadow-rgb) / 0.2), 0px 16px 24px 2px rgb(var(${tokenPrefix}-shadow-rgb) / 0.14), 0px 6px 30px 5px rgb(var(${tokenPrefix}-shadow-rgb) / 0.12);`);

    return `body {\n${cssUtilities.map((curr) => '  ' + curr).join('\n')}\n}\n`;
}
