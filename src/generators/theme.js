export const generateTheme = (
    theme,
    themeType = 'light',
    colorPrefix = '--md-sys-color',
    customColorPrefix = '--md-custom-color',
) => {
    const cssThemes = [];

    // Only light and dark themes are supported, fall back to light theme if anything else is provided as parameter
    if (themeType !== 'dark') themeType = 'light';

    cssThemes.push(`${colorPrefix}-primary: var(${colorPrefix}-primary-${themeType});`);
    cssThemes.push(`${colorPrefix}-primary-rgb: var(${colorPrefix}-primary-${themeType}-rgb);`);
    cssThemes.push(`${colorPrefix}-on-primary: var(${colorPrefix}-on-primary-${themeType});`);
    cssThemes.push(`${colorPrefix}-on-primary-rgb: var(${colorPrefix}-on-primary-${themeType}-rgb);`);
    cssThemes.push(`${colorPrefix}-primary-container: var(${colorPrefix}-primary-container-${themeType});`);
    cssThemes.push(`${colorPrefix}-primary-container-rgb: var(${colorPrefix}-primary-container-${themeType}-rgb);`);
    cssThemes.push(`${colorPrefix}-on-primary-container: var(${colorPrefix}-on-primary-container-${themeType});`);
    cssThemes.push(`${colorPrefix}-on-primary-container-rgb: var(${colorPrefix}-on-primary-container-${themeType}-rgb);`);

    cssThemes.push('');
    cssThemes.push(`${colorPrefix}-secondary: var(${colorPrefix}-secondary-${themeType});`);
    cssThemes.push(`${colorPrefix}-secondary-rgb: var(${colorPrefix}-secondary-${themeType}-rgb);`);
    cssThemes.push(`${colorPrefix}-on-secondary: var(${colorPrefix}-on-secondary-${themeType});`);
    cssThemes.push(`${colorPrefix}-on-secondary-rgb: var(${colorPrefix}-on-secondary-${themeType}-rgb);`);
    cssThemes.push(`${colorPrefix}-secondary-container: var(${colorPrefix}-secondary-container-${themeType});`);
    cssThemes.push(`${colorPrefix}-secondary-container-rgb: var(${colorPrefix}-secondary-container-${themeType}-rgb);`);
    cssThemes.push(`${colorPrefix}-on-secondary-container: var(${colorPrefix}-on-secondary-container-${themeType});`);
    cssThemes.push(`${colorPrefix}-on-secondary-container-rgb: var(${colorPrefix}-on-secondary-container-${themeType}-rgb);`);

    cssThemes.push('');
    cssThemes.push(`${colorPrefix}-tertiary: var(${colorPrefix}-tertiary-${themeType});`);
    cssThemes.push(`${colorPrefix}-tertiary-rgb: var(${colorPrefix}-tertiary-${themeType}-rgb);`);
    cssThemes.push(`${colorPrefix}-on-tertiary: var(${colorPrefix}-on-tertiary-${themeType});`);
    cssThemes.push(`${colorPrefix}-on-tertiary-rgb: var(${colorPrefix}-on-tertiary-${themeType}-rgb);`);
    cssThemes.push(`${colorPrefix}-tertiary-container: var(${colorPrefix}-tertiary-container-${themeType});`);
    cssThemes.push(`${colorPrefix}-tertiary-container-rgb: var(${colorPrefix}-tertiary-container-${themeType}-rgb);`);
    cssThemes.push(`${colorPrefix}-on-tertiary-container: var(${colorPrefix}-on-tertiary-container-${themeType});`);
    cssThemes.push(`${colorPrefix}-on-tertiary-container-rgb: var(${colorPrefix}-on-tertiary-container-${themeType}-rgb);`);

    cssThemes.push('');
    cssThemes.push(`${colorPrefix}-error: var(${colorPrefix}-error-${themeType});`);
    cssThemes.push(`${colorPrefix}-error-rgb: var(${colorPrefix}-error-${themeType}-rgb);`);
    cssThemes.push(`${colorPrefix}-on-error: var(${colorPrefix}-on-error-${themeType});`);
    cssThemes.push(`${colorPrefix}-on-error-rgb: var(${colorPrefix}-on-error-${themeType}-rgb);`);
    cssThemes.push(`${colorPrefix}-error-container: var(${colorPrefix}-error-container-${themeType});`);
    cssThemes.push(`${colorPrefix}-error-container-rgb: var(${colorPrefix}-error-container-${themeType}-rgb);`);
    cssThemes.push(`${colorPrefix}-on-error-container: var(${colorPrefix}-on-error-container-${themeType});`);
    cssThemes.push(`${colorPrefix}-on-error-container-rgb: var(${colorPrefix}-on-error-container-${themeType}-rgb);`);

    cssThemes.push('');
    cssThemes.push(`${colorPrefix}-background: var(${colorPrefix}-background-${themeType});`);
    cssThemes.push(`${colorPrefix}-background-rgb: var(${colorPrefix}-background-${themeType}-rgb);`);
    cssThemes.push(`${colorPrefix}-on-background: var(${colorPrefix}-on-background-${themeType});`);
    cssThemes.push(`${colorPrefix}-on-background-rgb: var(${colorPrefix}-on-background-${themeType}-rgb);`);

    cssThemes.push('');
    cssThemes.push(`${colorPrefix}-on-surface: var(${colorPrefix}-on-surface-${themeType});`);
    cssThemes.push(`${colorPrefix}-on-surface-rgb: var(${colorPrefix}-on-surface-${themeType}-rgb);`);
    cssThemes.push(`${colorPrefix}-surface: var(${colorPrefix}-surface-${themeType});`);
    cssThemes.push(`${colorPrefix}-surface-rgb: var(${colorPrefix}-surface-${themeType}-rgb);`);
    cssThemes.push(`${colorPrefix}-surface-dim: var(${colorPrefix}-surface-dim-${themeType});`);
    cssThemes.push(`${colorPrefix}-surface-dim-rgb: var(${colorPrefix}-surface-dim-${themeType}-rgb);`);
    cssThemes.push(`${colorPrefix}-surface-bright: var(${colorPrefix}-surface-bright-${themeType});`);
    cssThemes.push(`${colorPrefix}-surface-bright-rgb: var(${colorPrefix}-surface-bright-${themeType}-rgb);`);

    cssThemes.push('');
    cssThemes.push(`${colorPrefix}-surface-container-lowest: var(${colorPrefix}-surface-container-lowest-${themeType});`);
    cssThemes.push(`${colorPrefix}-surface-container-lowest-rgb: var(${colorPrefix}-surface-container-lowest-${themeType}-rgb);`);
    cssThemes.push(`${colorPrefix}-surface-container-low: var(${colorPrefix}-surface-container-low-${themeType});`);
    cssThemes.push(`${colorPrefix}-surface-container-low-rgb: var(${colorPrefix}-surface-container-low-${themeType}-rgb);`);
    cssThemes.push(`${colorPrefix}-surface-container: var(${colorPrefix}-surface-container-${themeType});`);
    cssThemes.push(`${colorPrefix}-surface-container-rgb: var(${colorPrefix}-surface-container-${themeType}-rgb);`);
    cssThemes.push(`${colorPrefix}-surface-container-high: var(${colorPrefix}-surface-container-high-${themeType});`);
    cssThemes.push(`${colorPrefix}-surface-container-high-rgb: var(${colorPrefix}-surface-container-high-${themeType}-rgb);`);
    cssThemes.push(`${colorPrefix}-surface-container-highest: var(${colorPrefix}-surface-container-highest-${themeType});`);
    cssThemes.push(`${colorPrefix}-surface-container-highest-rgb: var(${colorPrefix}-surface-container-highest-${themeType}-rgb);`);

    cssThemes.push('');
    cssThemes.push(`${colorPrefix}-on-surface-variant: var(${colorPrefix}-on-surface-variant-${themeType});`);
    cssThemes.push(`${colorPrefix}-on-surface-variant-rgb: var(${colorPrefix}-on-surface-variant-${themeType}-rgb);`);
    cssThemes.push(`${colorPrefix}-surface-variant: var(${colorPrefix}-surface-variant-${themeType});`);
    cssThemes.push(`${colorPrefix}-surface-variant-rgb: var(${colorPrefix}-surface-variant-${themeType}-rgb);`);

    cssThemes.push('');
    cssThemes.push(`${colorPrefix}-outline: var(${colorPrefix}-outline-${themeType});`);
    cssThemes.push(`${colorPrefix}-outline-rgb: var(${colorPrefix}-outline-${themeType}-rgb);`);
    cssThemes.push(`${colorPrefix}-outline-variant: var(${colorPrefix}-outline-variant-${themeType});`);
    cssThemes.push(`${colorPrefix}-outline-variant-rgb: var(${colorPrefix}-outline-variant-${themeType}-rgb);`);

    cssThemes.push('');
    cssThemes.push(`${colorPrefix}-inverse-on-surface: var(${colorPrefix}-inverse-on-surface-${themeType});`);
    cssThemes.push(`${colorPrefix}-inverse-on-surface-rgb: var(${colorPrefix}-inverse-on-surface-${themeType}-rgb);`);
    cssThemes.push(`${colorPrefix}-inverse-surface: var(${colorPrefix}-inverse-surface-${themeType});`);
    cssThemes.push(`${colorPrefix}-inverse-surface-rgb: var(${colorPrefix}-inverse-surface-${themeType}-rgb);`);
    cssThemes.push(`${colorPrefix}-inverse-primary: var(${colorPrefix}-inverse-primary-${themeType});`);
    cssThemes.push(`${colorPrefix}-inverse-primary-rgb: var(${colorPrefix}-inverse-primary-${themeType}-rgb);`);

    cssThemes.push('');
    cssThemes.push(`${colorPrefix}-shadow: var(${colorPrefix}-shadow-${themeType});`);
    cssThemes.push(`${colorPrefix}-shadow-rgb: var(${colorPrefix}-shadow-${themeType}-rgb);`);
    cssThemes.push(`${colorPrefix}-surface-tint: var(${colorPrefix}-surface-tint-${themeType});`);
    cssThemes.push(`${colorPrefix}-surface-tint-rgb: var(${colorPrefix}-surface-tint-${themeType}-rgb);`);
    cssThemes.push(`${colorPrefix}-scrim: var(${colorPrefix}-scrim-${themeType});`);
    cssThemes.push(`${colorPrefix}-scrim-rgb: var(${colorPrefix}-scrim-${themeType}-rgb);`);

    theme.customColors.forEach((customColor) => {
        cssThemes.push('');
        cssThemes.push(`${customColorPrefix}-${customColor.color.name}: var(${customColorPrefix}-${customColor.color.name}-${themeType});`);
        cssThemes.push(`${customColorPrefix}-${customColor.color.name}-rgb: var(${customColorPrefix}-${customColor.color.name}-${themeType}-rgb);`);
        cssThemes.push(`${customColorPrefix}-on-${customColor.color.name}: var(${customColorPrefix}-on-${customColor.color.name}-${themeType});`);
        cssThemes.push(`${customColorPrefix}-on-${customColor.color.name}-rgb: var(${customColorPrefix}-on-${customColor.color.name}-${themeType}-rgb);`);
        cssThemes.push(`${customColorPrefix}-${customColor.color.name}-container: var(${customColorPrefix}-${customColor.color.name}-container-${themeType});`);
        cssThemes.push(`${customColorPrefix}-${customColor.color.name}-container-rgb: var(${customColorPrefix}-${customColor.color.name}-container-${themeType}-rgb);`);
        cssThemes.push(`${customColorPrefix}-on-${customColor.color.name}-container: var(${customColorPrefix}-on-${customColor.color.name}-container-${themeType});`);
        cssThemes.push(`${customColorPrefix}-on-${customColor.color.name}-container-rgb: var(${customColorPrefix}-on-${customColor.color.name}-container-${themeType}-rgb);`);
    });

    let bodyCss = 'body';
    if (themeType === 'dark') bodyCss = 'body.dark';
    return `${bodyCss} {\n${cssThemes.map((curr) => '  ' + curr).join('\n')}\n}\n`;
};
