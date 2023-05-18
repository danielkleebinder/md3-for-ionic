import {generateTypescaleCssClass} from "./utils.js";

export const generateTypographyModule = (
    theme,
    classPrefix = 'md',
    prefix = '--md-sys'
) => {
    const cssTypographyModule = [];

    cssTypographyModule.push(
        generateTypescaleCssClass(`${classPrefix}-display-large`, `${prefix}-typescale-display-large`),
        generateTypescaleCssClass(`${classPrefix}-display-medium`, `${prefix}-typescale-display-medium`),
        generateTypescaleCssClass(`${classPrefix}-display-small`, `${prefix}-typescale-display-small`),
    );

    cssTypographyModule.push('');
    cssTypographyModule.push(
        generateTypescaleCssClass(`${classPrefix}-headline-large`, `${prefix}-typescale-headline-large`),
        generateTypescaleCssClass(`${classPrefix}-headline-medium`, `${prefix}-typescale-headline-medium`),
        generateTypescaleCssClass(`${classPrefix}-headline-small`, `${prefix}-typescale-headline-small`),
    );

    cssTypographyModule.push('');
    cssTypographyModule.push(
        generateTypescaleCssClass(`${classPrefix}-body-large`, `${prefix}-typescale-body-large`),
        generateTypescaleCssClass(`${classPrefix}-body-medium`, `${prefix}-typescale-body-medium`),
        generateTypescaleCssClass(`${classPrefix}-body-small`, `${prefix}-typescale-body-small`),
    );

    cssTypographyModule.push('');
    cssTypographyModule.push(
        generateTypescaleCssClass(`${classPrefix}-label-large`, `${prefix}-typescale-label-large`),
        generateTypescaleCssClass(`${classPrefix}-label-medium`, `${prefix}-typescale-label-medium`),
        generateTypescaleCssClass(`${classPrefix}-label-small`, `${prefix}-typescale-label-small`),
    );

    cssTypographyModule.push('');
    cssTypographyModule.push(
        generateTypescaleCssClass(`${classPrefix}-title-large`, `${prefix}-typescale-title-large`),
        generateTypescaleCssClass(`${classPrefix}-title-medium`, `${prefix}-typescale-title-medium`),
        generateTypescaleCssClass(`${classPrefix}-title-small`, `${prefix}-typescale-title-small`),
    );

    return cssTypographyModule.join('\n') + '\n';
}
