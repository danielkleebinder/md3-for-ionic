export const generateColorsModule = (
    theme,
    classPrefix = 'md',
    colorPrefix = '--md-sys-color',
    customColorPrefix = '--md-custom-color'
) => {
    const cssColorsModule = [];

    cssColorsModule.push(
        `.${classPrefix}-primary { background-color: var(${colorPrefix}-primary); }`,
        `.${classPrefix}-primary-text { color: var(${colorPrefix}-primary); }`,
        `.${classPrefix}-on-primary { background-color: var(${colorPrefix}-on-primary); }`,
        `.${classPrefix}-on-primary-text { color: var(${colorPrefix}-on-primary); }`,
        `.${classPrefix}-primary-container { background-color: var(${colorPrefix}-primary-container); }`,
        `.${classPrefix}-primary-container-text { color: var(${colorPrefix}-primary-container); }`,
        `.${classPrefix}-on-primary-container { background-color: var(${colorPrefix}-on-primary-container); }`,
        `.${classPrefix}-on-primary-container-text { color: var(${colorPrefix}-on-primary-container); }`,
    );

    cssColorsModule.push('');
    cssColorsModule.push(
        `.${classPrefix}-secondary { background-color: var(${colorPrefix}-secondary); }`,
        `.${classPrefix}-secondary-text { color: var(${colorPrefix}-secondary); }`,
        `.${classPrefix}-on-secondary { background-color: var(${colorPrefix}-on-secondary); }`,
        `.${classPrefix}-on-secondary-text { color: var(${colorPrefix}-on-secondary); }`,
        `.${classPrefix}-secondary-container { background-color: var(${colorPrefix}-secondary-container); }`,
        `.${classPrefix}-secondary-container-text { color: var(${colorPrefix}-secondary-container); }`,
        `.${classPrefix}-on-secondary-container { background-color: var(${colorPrefix}-on-secondary-container); }`,
        `.${classPrefix}-on-secondary-container-text { color: var(${colorPrefix}-on-secondary-container); }`,
    );

    cssColorsModule.push('');
    cssColorsModule.push(
        `.${classPrefix}-tertiary { background-color: var(${colorPrefix}-tertiary); }`,
        `.${classPrefix}-tertiary-text { color: var(${colorPrefix}-tertiary); }`,
        `.${classPrefix}-on-tertiary { background-color: var(${colorPrefix}-on-tertiary); }`,
        `.${classPrefix}-on-tertiary-text { color: var(${colorPrefix}-on-tertiary); }`,
        `.${classPrefix}-tertiary-container { background-color: var(${colorPrefix}-tertiary-container); }`,
        `.${classPrefix}-tertiary-container-text { color: var(${colorPrefix}-tertiary-container); }`,
        `.${classPrefix}-on-tertiary-container { background-color: var(${colorPrefix}-on-tertiary-container); }`,
        `.${classPrefix}-on-tertiary-container-text { color: var(${colorPrefix}-on-tertiary-container); }`,
    );

    cssColorsModule.push('');
    cssColorsModule.push(
        `.${classPrefix}-error { background-color: var(${colorPrefix}-error); }`,
        `.${classPrefix}-error-text { color: var(${colorPrefix}-error); }`,
        `.${classPrefix}-on-error { background-color: var(${colorPrefix}-on-error); }`,
        `.${classPrefix}-on-error-text { color: var(${colorPrefix}-on-error); }`,
        `.${classPrefix}-error-container { background-color: var(${colorPrefix}-error-container); }`,
        `.${classPrefix}-error-container-text { color: var(${colorPrefix}-error-container); }`,
        `.${classPrefix}-on-error-container { background-color: var(${colorPrefix}-on-error-container); }`,
        `.${classPrefix}-on-error-container-text { color: var(${colorPrefix}-on-error-container); }`,
    );

    cssColorsModule.push('');
    cssColorsModule.push(
        `.${classPrefix}-outline { background-color: var(${colorPrefix}-outline); }`,
        `.${classPrefix}-outline-text { color: var(${colorPrefix}-outline); }`,
        `.${classPrefix}-outline-variant { background-color: var(${colorPrefix}-outline-variant); }`,
        `.${classPrefix}-outline-variant-text { color: var(${colorPrefix}-outline-variant); }`,
    );

    cssColorsModule.push('');
    cssColorsModule.push(
        `.${classPrefix}-background { background-color: var(${colorPrefix}-background); }`,
        `.${classPrefix}-background-text { color: var(${colorPrefix}-background); }`,
        `.${classPrefix}-on-background { background-color: var(${colorPrefix}-on-background); }`,
        `.${classPrefix}-on-background-text { color: var(${colorPrefix}-on-background); }`,
    );

    cssColorsModule.push('');
    cssColorsModule.push(
        `.${classPrefix}-surface { background-color: var(${colorPrefix}-surface); }`,
        `.${classPrefix}-surface-text { color: var(${colorPrefix}-surface); }`,
        `.${classPrefix}-on-surface { background-color: var(${colorPrefix}-on-surface); }`,
        `.${classPrefix}-on-surface-text { color: var(${colorPrefix}-on-surface); }`,
        `.${classPrefix}-surface-tint { background-color: var(${colorPrefix}-surface-tint); }`,
        `.${classPrefix}-surface-tint-text { color: var(${colorPrefix}-surface-tint); }`,
    );

    cssColorsModule.push('');
    cssColorsModule.push(
        `.${classPrefix}-surface-container-lowest { background-color: var(${colorPrefix}-surface-container-lowest); }`,
        `.${classPrefix}-surface-container-lowest-text { color: var(${colorPrefix}-surface-container-lowest); }`,
        `.${classPrefix}-surface-container-low { background-color: var(${colorPrefix}-surface-container-low); }`,
        `.${classPrefix}-surface-container-low-text { color: var(${colorPrefix}-surface-container-low); }`,
        `.${classPrefix}-surface-container { background-color: var(${colorPrefix}-surface-container); }`,
        `.${classPrefix}-surface-container-text { color: var(${colorPrefix}-surface-container); }`,
        `.${classPrefix}-surface-container-high { background-color: var(${colorPrefix}-surface-container-high); }`,
        `.${classPrefix}-surface-container-high-text { color: var(${colorPrefix}-surface-container-high); }`,
        `.${classPrefix}-surface-container-highest { background-color: var(${colorPrefix}-surface-container-highest); }`,
        `.${classPrefix}-surface-container-highest-text { color: var(${colorPrefix}-surface-container-highest); }`,
    );

    cssColorsModule.push('');
    cssColorsModule.push(
        `.${classPrefix}-inverse-surface { background-color: var(${colorPrefix}-inverse-surface); }`,
        `.${classPrefix}-inverse-surface-text { color: var(${colorPrefix}-inverse-surface); }`,
        `.${classPrefix}-inverse-on-surface { background-color: var(${colorPrefix}-inverse-on-surface); }`,
        `.${classPrefix}-inverse-on-surface-text { color: var(${colorPrefix}-inverse-on-surface); }`,
        `.${classPrefix}-inverse-primary { background-color: var(${colorPrefix}-inverse-primary); }`,
        `.${classPrefix}-inverse-primary-text { color: var(${colorPrefix}-inverse-primary); }`,
    );

    cssColorsModule.push('');
    cssColorsModule.push(
        `.${classPrefix}-shadow { background-color: var(${colorPrefix}-shadow); }`,
        `.${classPrefix}-shadow-text { color: var(${colorPrefix}-shadow); }`,
        `.${classPrefix}-scrim { background-color: var(${colorPrefix}-scrim); }`,
        `.${classPrefix}-scrim-text { color: var(${colorPrefix}-scrim); }`,
    );

    theme.customColors.forEach((customColor) => {
        const customColorName = customColor.color.name;
        cssColorsModule.push('');
        cssColorsModule.push(
            `.${classPrefix}-custom-${customColorName} { background-color: var(${customColorPrefix}-${customColorName}); }`,
            `.${classPrefix}-custom-${customColorName}-text { color: var(${customColorPrefix}-${customColorName}); }`,
            `.${classPrefix}-custom-on-${customColorName} { background-color: var(${customColorPrefix}-on-${customColorName}); }`,
            `.${classPrefix}-custom-on-${customColorName}-text { color: var(${customColorPrefix}-on-${customColorName}); }`,
            `.${classPrefix}-custom-${customColorName}-container { background-color: var(${customColorPrefix}-${customColorName}-container); }`,
            `.${classPrefix}-custom-${customColorName}-container-text { color: var(${customColorPrefix}-${customColorName}-container); }`,
            `.${classPrefix}-custom-on-${customColorName}-container { background-color: var(${customColorPrefix}-on-${customColorName}-container); }`,
            `.${classPrefix}-custom-on-${customColorName}-container-text { color: var(${customColorPrefix}-on-${customColorName}-container); }`,
        );
    });

    return cssColorsModule.join('\n') + '\n';
};
