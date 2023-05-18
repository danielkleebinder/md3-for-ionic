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

    return cssColorsModule.join('\n') + '\n';
};
