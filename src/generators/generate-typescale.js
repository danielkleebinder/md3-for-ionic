const generateTypescaleTokens = (
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

export const generateTypescale = (
    theme,
    options
) => {
    const cssTokens = [];

    const prefix = options.sysColorPrefix ?? 'mat-sys';

    cssTokens.push('');
    cssTokens.push('/* Display - Large */');
    cssTokens.push(...generateTypescaleTokens(`--${prefix}-display-large`, 'Roboto', 'Regular', '400', '3.5625rem', '4rem', '-0.015625rem'));

    cssTokens.push('');
    cssTokens.push('/* Display - Medium */');
    cssTokens.push(...generateTypescaleTokens(`--${prefix}-display-medium`, 'Roboto', 'Regular', '400', '2.8125rem', '3.25rem'));

    cssTokens.push('');
    cssTokens.push('/* Display - Small */');
    cssTokens.push(...generateTypescaleTokens(`--${prefix}-display-small`, 'Roboto', 'Regular', '400', '2.25rem', '2.75rem'));

    cssTokens.push('');
    cssTokens.push('/* Headline - Large */');
    cssTokens.push(...generateTypescaleTokens(`--${prefix}-headline-large`, 'Roboto', 'Regular', '400', '2rem', '2.5rem'));

    cssTokens.push('');
    cssTokens.push('/* Headline - Medium */');
    cssTokens.push(...generateTypescaleTokens(`--${prefix}-headline-medium`, 'Roboto', 'Regular', '400', '1.75rem', '2.25rem'));

    cssTokens.push('');
    cssTokens.push('/* Headline - Small */');
    cssTokens.push(...generateTypescaleTokens(`--${prefix}-headline-small`, 'Roboto', 'Regular', '400', '1.5rem', '2rem'));

    cssTokens.push('');
    cssTokens.push('/* Body - Large */');
    cssTokens.push(...generateTypescaleTokens(`--${prefix}-body-large`, 'Roboto', 'Regular', '400', '1rem', '1.5rem', '0.03125rem'));

    cssTokens.push('');
    cssTokens.push('/* Body - Medium */');
    cssTokens.push(...generateTypescaleTokens(`--${prefix}-body-medium`, 'Roboto', 'Regular', '400', '0.875rem', '1.25rem', '0.015625rem'));

    cssTokens.push('');
    cssTokens.push('/* Body - Small */');
    cssTokens.push(...generateTypescaleTokens(`--${prefix}-body-small`, 'Roboto', 'Regular', '400', '0.75rem', '1rem', '0.025rem'));

    cssTokens.push('');
    cssTokens.push('/* Label - Large */');
    cssTokens.push(...generateTypescaleTokens(`--${prefix}-label-large`, 'Roboto', 'Medium', '500', '0.875rem', '1.25rem', '0.00625rem'));

    cssTokens.push('');
    cssTokens.push('/* Label - Medium */');
    cssTokens.push(...generateTypescaleTokens(`--${prefix}-label-medium`, 'Roboto', 'Medium', '500', '0.75rem', '1rem', '0.03125rem'));

    cssTokens.push('');
    cssTokens.push('/* Label - Small */');
    cssTokens.push(...generateTypescaleTokens(`--${prefix}-label-small`, 'Roboto', 'Medium', '500', '0.6875rem', '1rem', '0.03125rem'));

    cssTokens.push('');
    cssTokens.push('/* Title - Large */');
    cssTokens.push(...generateTypescaleTokens(`--${prefix}-title-large`, 'Roboto', 'Regular', '400', '1.375rem', '1.75rem'));

    cssTokens.push('');
    cssTokens.push('/* Title - Medium */');
    cssTokens.push(...generateTypescaleTokens(`--${prefix}-title-medium`, 'Roboto', 'Medium', '500', '1rem', '1.5rem', '0.009375rem'));

    cssTokens.push('');
    cssTokens.push('/* Title - Small */');
    cssTokens.push(...generateTypescaleTokens(`--${prefix}-title-small`, 'Roboto', 'Medium', '500', '0.875rem', '1.25rem', '0.00625rem'));

    return `:root {\n${cssTokens.map((curr) => '  ' + curr).join('\n')}\n}\n`;
}
