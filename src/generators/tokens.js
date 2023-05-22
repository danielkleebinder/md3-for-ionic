import {hexFromArgb} from "@material/material-color-utilities";
import {generateTypescale, rgbFromArgb} from "./utils.js";

export const generateTokens = (
    theme,
    palettePrefix = '--md-ref-palette',
    tokenPrefix = '--md-sys-color',
    customColorPrefix = '--md-custom-color',
    sourcePrefix = '--md-source',
    prefix = '--md-sys',
    tones = [100, 99, 95, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0],
) => {
    const palette = {
        primary: [],
        secondary: [],
        tertiary: [],
        neutral: [],
        neutralVariant: [],
        error: [],
    };

    const cssTokens = [];

    tones.reverse().forEach((tone) => {
        const primaryColor = theme.palettes.primary.tone(tone);
        palette.primary.push(`${palettePrefix}-primary${tone}: ${hexFromArgb(primaryColor)};`);
        palette.primary.push(`${palettePrefix}-primary${tone}-rgb: ${rgbFromArgb(primaryColor)};`);

        const secondaryColor = theme.palettes.secondary.tone(tone);
        palette.secondary.push(`${palettePrefix}-secondary${tone}: ${hexFromArgb(secondaryColor)};`);
        palette.secondary.push(`${palettePrefix}-secondary${tone}-rgb: ${rgbFromArgb(secondaryColor)};`);

        const tertiaryColor = theme.palettes.tertiary.tone(tone);
        palette.tertiary.push(`${palettePrefix}-tertiary${tone}: ${hexFromArgb(tertiaryColor)};`);
        palette.tertiary.push(`${palettePrefix}-tertiary${tone}-rgb: ${rgbFromArgb(tertiaryColor)};`);

        const neutralColor = theme.palettes.neutral.tone(tone);
        palette.neutral.push(`${palettePrefix}-neutral${tone}: ${hexFromArgb(neutralColor)};`);
        palette.neutral.push(`${palettePrefix}-neutral${tone}-rgb: ${rgbFromArgb(neutralColor)};`);

        const neutralVariantColor = theme.palettes.neutralVariant.tone(tone);
        palette.neutralVariant.push(`${palettePrefix}-neutral-variant${tone}: ${hexFromArgb(neutralVariantColor)};`);
        palette.neutralVariant.push(`${palettePrefix}-neutral-variant${tone}-rgb: ${rgbFromArgb(neutralVariantColor)};`);

        const errorColor = theme.palettes.error.tone(tone);
        palette.error.push(`${palettePrefix}-error${tone}: ${hexFromArgb(errorColor)};`);
        palette.error.push(`${palettePrefix}-error${tone}-rgb: ${rgbFromArgb(errorColor)};`);
    });

    cssTokens.push(`${sourcePrefix}: ${hexFromArgb(theme.source)};`);
    cssTokens.push(`${sourcePrefix}-rgb: ${rgbFromArgb(theme.source)};`);
    theme.customColors.forEach((customColor) => {
        cssTokens.push(`${sourcePrefix}-${customColor.color.name}: ${hexFromArgb(customColor.color.value)};`);
        cssTokens.push(`${sourcePrefix}-${customColor.color.name}-rgb: ${rgbFromArgb(customColor.color.value)};`);
    });

    cssTokens.push('');
    cssTokens.push('/* Primary color palette */');
    cssTokens.push(...palette.primary);

    cssTokens.push('');
    cssTokens.push('/* Secondary color palette */');
    cssTokens.push(...palette.secondary);

    cssTokens.push('');
    cssTokens.push('/* Tertiary color palette */');
    cssTokens.push(...palette.tertiary);

    cssTokens.push('');
    cssTokens.push('/* Neutral color palette */');
    cssTokens.push(...palette.neutral);

    cssTokens.push('');
    cssTokens.push('/* Neutral variant color palette */');
    cssTokens.push(...palette.neutralVariant);

    cssTokens.push('');
    cssTokens.push('/* Error color palette */');
    cssTokens.push(...palette.error);

    cssTokens.push('');
    cssTokens.push('/* Light */');
    cssTokens.push(`${tokenPrefix}-primary-light: ${hexFromArgb(theme.palettes.primary.tone(40))};`);
    cssTokens.push(`${tokenPrefix}-primary-light-rgb: ${rgbFromArgb(theme.palettes.primary.tone(40))};`);
    cssTokens.push(`${tokenPrefix}-primary-container-light: ${hexFromArgb(theme.palettes.primary.tone(90))};`);
    cssTokens.push(`${tokenPrefix}-primary-container-light-rgb: ${rgbFromArgb(theme.palettes.primary.tone(90))};`);
    cssTokens.push(`${tokenPrefix}-on-primary-light: ${hexFromArgb(theme.palettes.primary.tone(100))};`);
    cssTokens.push(`${tokenPrefix}-on-primary-light-rgb: ${rgbFromArgb(theme.palettes.primary.tone(100))};`);
    cssTokens.push(`${tokenPrefix}-on-primary-container-light: ${hexFromArgb(theme.palettes.primary.tone(10))};`);
    cssTokens.push(`${tokenPrefix}-on-primary-container-light-rgb: ${rgbFromArgb(theme.palettes.primary.tone(10))};`);
    cssTokens.push(`${tokenPrefix}-inverse-primary-light: ${hexFromArgb(theme.palettes.primary.tone(80))};`);
    cssTokens.push(`${tokenPrefix}-inverse-primary-light-rgb: ${rgbFromArgb(theme.palettes.primary.tone(80))};`);

    cssTokens.push('');
    cssTokens.push(`${tokenPrefix}-secondary-light: ${hexFromArgb(theme.palettes.secondary.tone(40))};`);
    cssTokens.push(`${tokenPrefix}-secondary-light-rgb: ${rgbFromArgb(theme.palettes.secondary.tone(40))};`);
    cssTokens.push(`${tokenPrefix}-secondary-container-light: ${hexFromArgb(theme.palettes.secondary.tone(90))};`);
    cssTokens.push(`${tokenPrefix}-secondary-container-light-rgb: ${rgbFromArgb(theme.palettes.secondary.tone(90))};`);
    cssTokens.push(`${tokenPrefix}-on-secondary-light: ${hexFromArgb(theme.palettes.secondary.tone(100))};`);
    cssTokens.push(`${tokenPrefix}-on-secondary-light-rgb: ${rgbFromArgb(theme.palettes.secondary.tone(100))};`);
    cssTokens.push(`${tokenPrefix}-on-secondary-container-light: ${hexFromArgb(theme.palettes.secondary.tone(10))};`);
    cssTokens.push(`${tokenPrefix}-on-secondary-container-light-rgb: ${rgbFromArgb(theme.palettes.secondary.tone(10))};`);

    cssTokens.push('');
    cssTokens.push(`${tokenPrefix}-tertiary-light: ${hexFromArgb(theme.palettes.tertiary.tone(40))};`);
    cssTokens.push(`${tokenPrefix}-tertiary-light-rgb: ${rgbFromArgb(theme.palettes.tertiary.tone(40))};`);
    cssTokens.push(`${tokenPrefix}-tertiary-container-light: ${hexFromArgb(theme.palettes.tertiary.tone(90))};`);
    cssTokens.push(`${tokenPrefix}-tertiary-container-light-rgb: ${rgbFromArgb(theme.palettes.tertiary.tone(90))};`);
    cssTokens.push(`${tokenPrefix}-on-tertiary-light: ${hexFromArgb(theme.palettes.tertiary.tone(100))};`);
    cssTokens.push(`${tokenPrefix}-on-tertiary-light-rgb: ${rgbFromArgb(theme.palettes.tertiary.tone(100))};`);
    cssTokens.push(`${tokenPrefix}-on-tertiary-container-light: ${hexFromArgb(theme.palettes.tertiary.tone(10))};`);
    cssTokens.push(`${tokenPrefix}-on-tertiary-container-light-rgb: ${rgbFromArgb(theme.palettes.tertiary.tone(10))};`);

    cssTokens.push('');
    cssTokens.push(`${tokenPrefix}-error-light: ${hexFromArgb(theme.palettes.error.tone(40))};`);
    cssTokens.push(`${tokenPrefix}-error-light-rgb: ${rgbFromArgb(theme.palettes.error.tone(40))};`);
    cssTokens.push(`${tokenPrefix}-error-container-light: ${hexFromArgb(theme.palettes.error.tone(90))};`);
    cssTokens.push(`${tokenPrefix}-error-container-light-rgb: ${rgbFromArgb(theme.palettes.error.tone(90))};`);
    cssTokens.push(`${tokenPrefix}-on-error-light: ${hexFromArgb(theme.palettes.error.tone(100))};`);
    cssTokens.push(`${tokenPrefix}-on-error-light-rgb: ${rgbFromArgb(theme.palettes.error.tone(100))};`);
    cssTokens.push(`${tokenPrefix}-on-error-container-light: ${hexFromArgb(theme.palettes.error.tone(10))};`);
    cssTokens.push(`${tokenPrefix}-on-error-container-light-rgb: ${rgbFromArgb(theme.palettes.error.tone(10))};`);

    cssTokens.push('');
    cssTokens.push(`${tokenPrefix}-background-light: ${hexFromArgb(theme.palettes.neutral.tone(98))};`);
    cssTokens.push(`${tokenPrefix}-background-light-rgb: ${rgbFromArgb(theme.palettes.neutral.tone(98))};`);
    cssTokens.push(`${tokenPrefix}-on-background-light: ${hexFromArgb(theme.palettes.neutral.tone(10))};`);
    cssTokens.push(`${tokenPrefix}-on-background-light-rgb: ${rgbFromArgb(theme.palettes.neutral.tone(10))};`);

    cssTokens.push('');
    cssTokens.push(`${tokenPrefix}-on-surface-light: ${hexFromArgb(theme.palettes.neutral.tone(10))};`);
    cssTokens.push(`${tokenPrefix}-on-surface-light-rgb: ${rgbFromArgb(theme.palettes.neutral.tone(10))};`);
    cssTokens.push(`${tokenPrefix}-surface-light: ${hexFromArgb(theme.palettes.neutral.tone(98))};`);
    cssTokens.push(`${tokenPrefix}-surface-light-rgb: ${rgbFromArgb(theme.palettes.neutral.tone(98))};`);
    cssTokens.push(`${tokenPrefix}-surface-dim-light: ${hexFromArgb(theme.palettes.neutral.tone(87))};`);
    cssTokens.push(`${tokenPrefix}-surface-dim-light-rgb: ${rgbFromArgb(theme.palettes.neutral.tone(87))};`);
    cssTokens.push(`${tokenPrefix}-surface-bright-light: ${hexFromArgb(theme.palettes.neutral.tone(98))};`);
    cssTokens.push(`${tokenPrefix}-surface-bright-light-rgb: ${rgbFromArgb(theme.palettes.neutral.tone(98))};`);

    cssTokens.push('');
    cssTokens.push(`${tokenPrefix}-surface-container-lowest-light: ${hexFromArgb(theme.palettes.neutral.tone(100))};`);
    cssTokens.push(`${tokenPrefix}-surface-container-lowest-light-rgb: ${rgbFromArgb(theme.palettes.neutral.tone(100))};`);
    cssTokens.push(`${tokenPrefix}-surface-container-low-light: ${hexFromArgb(theme.palettes.neutral.tone(96))};`);
    cssTokens.push(`${tokenPrefix}-surface-container-low-light-rgb: ${rgbFromArgb(theme.palettes.neutral.tone(96))};`);
    cssTokens.push(`${tokenPrefix}-surface-container-light: ${hexFromArgb(theme.palettes.neutral.tone(94))};`);
    cssTokens.push(`${tokenPrefix}-surface-container-light-rgb: ${rgbFromArgb(theme.palettes.neutral.tone(94))};`);
    cssTokens.push(`${tokenPrefix}-surface-container-high-light: ${hexFromArgb(theme.palettes.neutral.tone(92))};`);
    cssTokens.push(`${tokenPrefix}-surface-container-high-light-rgb: ${rgbFromArgb(theme.palettes.neutral.tone(92))};`);
    cssTokens.push(`${tokenPrefix}-surface-container-highest-light: ${hexFromArgb(theme.palettes.neutral.tone(90))};`);
    cssTokens.push(`${tokenPrefix}-surface-container-highest-light-rgb: ${rgbFromArgb(theme.palettes.neutral.tone(90))};`);

    cssTokens.push('');
    cssTokens.push(`${tokenPrefix}-on-surface-variant-light: ${hexFromArgb(theme.palettes.neutral.tone(30))};`);
    cssTokens.push(`${tokenPrefix}-on-surface-variant-light-rgb: ${rgbFromArgb(theme.palettes.neutral.tone(30))};`);
    cssTokens.push(`${tokenPrefix}-surface-variant-light: ${hexFromArgb(theme.palettes.neutral.tone(90))};`);
    cssTokens.push(`${tokenPrefix}-surface-variant-light-rgb: ${rgbFromArgb(theme.palettes.neutral.tone(90))};`);

    cssTokens.push('');
    cssTokens.push(`${tokenPrefix}-outline-light: ${hexFromArgb(theme.palettes.neutralVariant.tone(50))};`);
    cssTokens.push(`${tokenPrefix}-outline-light-rgb: ${rgbFromArgb(theme.palettes.neutralVariant.tone(50))};`);
    cssTokens.push(`${tokenPrefix}-outline-variant-light: ${hexFromArgb(theme.palettes.neutralVariant.tone(80))};`);
    cssTokens.push(`${tokenPrefix}-outline-variant-light-rgb: ${rgbFromArgb(theme.palettes.neutralVariant.tone(80))};`);

    cssTokens.push('');
    cssTokens.push(`${tokenPrefix}-inverse-on-surface-light: ${hexFromArgb(theme.palettes.neutral.tone(95))};`);
    cssTokens.push(`${tokenPrefix}-inverse-on-surface-light-rgb: ${rgbFromArgb(theme.palettes.neutral.tone(95))};`);
    cssTokens.push(`${tokenPrefix}-inverse-surface-light: ${hexFromArgb(theme.palettes.neutral.tone(20))};`);
    cssTokens.push(`${tokenPrefix}-inverse-surface-light-rgb: ${rgbFromArgb(theme.palettes.neutral.tone(20))};`);

    cssTokens.push('');
    cssTokens.push(`${tokenPrefix}-surface-tint-light: ${hexFromArgb(theme.palettes.primary.tone(40))};`);
    cssTokens.push(`${tokenPrefix}-surface-tint-light-rgb: ${rgbFromArgb(theme.palettes.primary.tone(40))};`);
    cssTokens.push(`${tokenPrefix}-shadow-light: ${hexFromArgb(theme.palettes.neutral.tone(0))};`);
    cssTokens.push(`${tokenPrefix}-shadow-light-rgb: ${rgbFromArgb(theme.palettes.neutral.tone(0))};`);
    cssTokens.push(`${tokenPrefix}-scrim-light: ${hexFromArgb(theme.palettes.neutral.tone(0))};`);
    cssTokens.push(`${tokenPrefix}-scrim-light-rgb: ${rgbFromArgb(theme.palettes.neutral.tone(0))};`);

    theme.customColors.forEach((customColor) => {
        cssTokens.push('');
        cssTokens.push(`/* Custom color "${customColor.color.name}" light */`);
        cssTokens.push(`${customColorPrefix}-${customColor.color.name}-light: ${hexFromArgb(customColor.light.color)};`);
        cssTokens.push(`${customColorPrefix}-${customColor.color.name}-light-rgb: ${rgbFromArgb(customColor.light.color)};`);
        cssTokens.push(`${customColorPrefix}-on-${customColor.color.name}-light: ${hexFromArgb(customColor.light.onColor)};`);
        cssTokens.push(`${customColorPrefix}-on-${customColor.color.name}-light-rgb: ${rgbFromArgb(customColor.light.onColor)};`);
        cssTokens.push(`${customColorPrefix}-${customColor.color.name}-container-light: ${hexFromArgb(customColor.light.colorContainer)};`);
        cssTokens.push(`${customColorPrefix}-${customColor.color.name}-container-light-rgb: ${rgbFromArgb(customColor.light.colorContainer)};`);
        cssTokens.push(`${customColorPrefix}-on-${customColor.color.name}-container-light: ${hexFromArgb(customColor.light.onColorContainer)};`);
        cssTokens.push(`${customColorPrefix}-on-${customColor.color.name}-container-light-rgb: ${rgbFromArgb(customColor.light.onColorContainer)};`);
    });

    cssTokens.push('');
    cssTokens.push('/* Dark */');
    cssTokens.push(`${tokenPrefix}-primary-dark: ${hexFromArgb(theme.palettes.primary.tone(80))};`);
    cssTokens.push(`${tokenPrefix}-primary-dark-rgb: ${rgbFromArgb(theme.palettes.primary.tone(80))};`);
    cssTokens.push(`${tokenPrefix}-primary-container-dark: ${hexFromArgb(theme.palettes.primary.tone(30))};`);
    cssTokens.push(`${tokenPrefix}-primary-container-dark-rgb: ${rgbFromArgb(theme.palettes.primary.tone(30))};`);
    cssTokens.push(`${tokenPrefix}-on-primary-dark: ${hexFromArgb(theme.palettes.primary.tone(20))};`);
    cssTokens.push(`${tokenPrefix}-on-primary-dark-rgb: ${rgbFromArgb(theme.palettes.primary.tone(20))};`);
    cssTokens.push(`${tokenPrefix}-on-primary-container-dark: ${hexFromArgb(theme.palettes.primary.tone(90))};`);
    cssTokens.push(`${tokenPrefix}-on-primary-container-dark-rgb: ${rgbFromArgb(theme.palettes.primary.tone(90))};`);
    cssTokens.push(`${tokenPrefix}-inverse-primary-dark: ${hexFromArgb(theme.palettes.primary.tone(40))};`);
    cssTokens.push(`${tokenPrefix}-inverse-primary-dark-rgb: ${rgbFromArgb(theme.palettes.primary.tone(40))};`);

    cssTokens.push('');
    cssTokens.push(`${tokenPrefix}-secondary-dark: ${hexFromArgb(theme.palettes.secondary.tone(80))};`);
    cssTokens.push(`${tokenPrefix}-secondary-dark-rgb: ${rgbFromArgb(theme.palettes.secondary.tone(80))};`);
    cssTokens.push(`${tokenPrefix}-secondary-container-dark: ${hexFromArgb(theme.palettes.secondary.tone(30))};`);
    cssTokens.push(`${tokenPrefix}-secondary-container-dark-rgb: ${rgbFromArgb(theme.palettes.secondary.tone(30))};`);
    cssTokens.push(`${tokenPrefix}-on-secondary-dark: ${hexFromArgb(theme.palettes.secondary.tone(20))};`);
    cssTokens.push(`${tokenPrefix}-on-secondary-dark-rgb: ${rgbFromArgb(theme.palettes.secondary.tone(20))};`);
    cssTokens.push(`${tokenPrefix}-on-secondary-container-dark: ${hexFromArgb(theme.palettes.secondary.tone(90))};`);
    cssTokens.push(`${tokenPrefix}-on-secondary-container-dark-rgb: ${rgbFromArgb(theme.palettes.secondary.tone(90))};`);

    cssTokens.push('');
    cssTokens.push(`${tokenPrefix}-tertiary-dark: ${hexFromArgb(theme.palettes.tertiary.tone(80))};`);
    cssTokens.push(`${tokenPrefix}-tertiary-dark-rgb: ${rgbFromArgb(theme.palettes.tertiary.tone(80))};`);
    cssTokens.push(`${tokenPrefix}-tertiary-container-dark: ${hexFromArgb(theme.palettes.tertiary.tone(30))};`);
    cssTokens.push(`${tokenPrefix}-tertiary-container-dark-rgb: ${rgbFromArgb(theme.palettes.tertiary.tone(30))};`);
    cssTokens.push(`${tokenPrefix}-on-tertiary-dark: ${hexFromArgb(theme.palettes.tertiary.tone(20))};`);
    cssTokens.push(`${tokenPrefix}-on-tertiary-dark-rgb: ${rgbFromArgb(theme.palettes.tertiary.tone(20))};`);
    cssTokens.push(`${tokenPrefix}-on-tertiary-container-dark: ${hexFromArgb(theme.palettes.tertiary.tone(90))};`);
    cssTokens.push(`${tokenPrefix}-on-tertiary-container-dark-rgb: ${rgbFromArgb(theme.palettes.tertiary.tone(90))};`);

    cssTokens.push('');
    cssTokens.push(`${tokenPrefix}-error-dark: ${hexFromArgb(theme.palettes.error.tone(80))};`);
    cssTokens.push(`${tokenPrefix}-error-dark-rgb: ${rgbFromArgb(theme.palettes.error.tone(80))};`);
    cssTokens.push(`${tokenPrefix}-error-container-dark: ${hexFromArgb(theme.palettes.error.tone(30))};`);
    cssTokens.push(`${tokenPrefix}-error-container-dark-rgb: ${rgbFromArgb(theme.palettes.error.tone(30))};`);
    cssTokens.push(`${tokenPrefix}-on-error-dark: ${hexFromArgb(theme.palettes.error.tone(20))};`);
    cssTokens.push(`${tokenPrefix}-on-error-dark-rgb: ${rgbFromArgb(theme.palettes.error.tone(20))};`);
    cssTokens.push(`${tokenPrefix}-on-error-container-dark: ${hexFromArgb(theme.palettes.error.tone(90))};`);
    cssTokens.push(`${tokenPrefix}-on-error-container-dark-rgb: ${rgbFromArgb(theme.palettes.error.tone(90))};`);

    cssTokens.push('');
    cssTokens.push(`${tokenPrefix}-background-dark: ${hexFromArgb(theme.palettes.neutral.tone(6))};`);
    cssTokens.push(`${tokenPrefix}-background-dark-rgb: ${rgbFromArgb(theme.palettes.neutral.tone(6))};`);
    cssTokens.push(`${tokenPrefix}-on-background-dark: ${hexFromArgb(theme.palettes.neutral.tone(90))};`);
    cssTokens.push(`${tokenPrefix}-on-background-dark-rgb: ${rgbFromArgb(theme.palettes.neutral.tone(90))};`);

    cssTokens.push('');
    cssTokens.push(`${tokenPrefix}-on-surface-dark: ${hexFromArgb(theme.palettes.neutral.tone(90))};`);
    cssTokens.push(`${tokenPrefix}-on-surface-dark-rgb: ${rgbFromArgb(theme.palettes.neutral.tone(90))};`);
    cssTokens.push(`${tokenPrefix}-surface-dark: ${hexFromArgb(theme.palettes.neutral.tone(6))};`);
    cssTokens.push(`${tokenPrefix}-surface-dark-rgb: ${rgbFromArgb(theme.palettes.neutral.tone(6))};`);
    cssTokens.push(`${tokenPrefix}-surface-dim-dark: ${hexFromArgb(theme.palettes.neutral.tone(6))};`);
    cssTokens.push(`${tokenPrefix}-surface-dim-dark-rgb: ${rgbFromArgb(theme.palettes.neutral.tone(6))};`);
    cssTokens.push(`${tokenPrefix}-surface-bright-dark: ${hexFromArgb(theme.palettes.neutral.tone(24))};`);
    cssTokens.push(`${tokenPrefix}-surface-bright-dark-rgb: ${rgbFromArgb(theme.palettes.neutral.tone(24))};`);

    cssTokens.push('');
    cssTokens.push(`${tokenPrefix}-surface-container-lowest-dark: ${hexFromArgb(theme.palettes.neutral.tone(4))};`);
    cssTokens.push(`${tokenPrefix}-surface-container-lowest-dark-rgb: ${rgbFromArgb(theme.palettes.neutral.tone(4))};`);
    cssTokens.push(`${tokenPrefix}-surface-container-low-dark: ${hexFromArgb(theme.palettes.neutral.tone(10))};`);
    cssTokens.push(`${tokenPrefix}-surface-container-low-dark-rgb: ${rgbFromArgb(theme.palettes.neutral.tone(10))};`);
    cssTokens.push(`${tokenPrefix}-surface-container-dark: ${hexFromArgb(theme.palettes.neutral.tone(12))};`);
    cssTokens.push(`${tokenPrefix}-surface-container-dark-rgb: ${rgbFromArgb(theme.palettes.neutral.tone(12))};`);
    cssTokens.push(`${tokenPrefix}-surface-container-high-dark: ${hexFromArgb(theme.palettes.neutral.tone(17))};`);
    cssTokens.push(`${tokenPrefix}-surface-container-high-dark-rgb: ${rgbFromArgb(theme.palettes.neutral.tone(17))};`);
    cssTokens.push(`${tokenPrefix}-surface-container-highest-dark: ${hexFromArgb(theme.palettes.neutral.tone(22))};`);
    cssTokens.push(`${tokenPrefix}-surface-container-highest-dark-rgb: ${rgbFromArgb(theme.palettes.neutral.tone(22))};`);

    cssTokens.push('');
    cssTokens.push(`${tokenPrefix}-on-surface-variant-dark: ${hexFromArgb(theme.palettes.neutral.tone(80))};`);
    cssTokens.push(`${tokenPrefix}-on-surface-variant-dark-rgb: ${rgbFromArgb(theme.palettes.neutral.tone(80))};`);
    cssTokens.push(`${tokenPrefix}-surface-variant-dark: ${hexFromArgb(theme.palettes.neutral.tone(30))};`);
    cssTokens.push(`${tokenPrefix}-surface-variant-dark-rgb: ${rgbFromArgb(theme.palettes.neutral.tone(30))};`);

    cssTokens.push('');
    cssTokens.push(`${tokenPrefix}-outline-dark: ${hexFromArgb(theme.palettes.neutralVariant.tone(60))};`);
    cssTokens.push(`${tokenPrefix}-outline-dark-rgb: ${rgbFromArgb(theme.palettes.neutralVariant.tone(60))};`);
    cssTokens.push(`${tokenPrefix}-outline-variant-dark: ${hexFromArgb(theme.palettes.neutralVariant.tone(30))};`);
    cssTokens.push(`${tokenPrefix}-outline-variant-dark-rgb: ${rgbFromArgb(theme.palettes.neutralVariant.tone(30))};`);

    cssTokens.push('');
    cssTokens.push(`${tokenPrefix}-inverse-on-surface-dark: ${hexFromArgb(theme.palettes.neutral.tone(20))};`);
    cssTokens.push(`${tokenPrefix}-inverse-on-surface-dark-rgb: ${rgbFromArgb(theme.palettes.neutral.tone(20))};`);
    cssTokens.push(`${tokenPrefix}-inverse-surface-dark: ${hexFromArgb(theme.palettes.neutral.tone(90))};`);
    cssTokens.push(`${tokenPrefix}-inverse-surface-dark-rgb: ${rgbFromArgb(theme.palettes.neutral.tone(90))};`);

    cssTokens.push('');
    cssTokens.push(`${tokenPrefix}-surface-tint-dark: ${hexFromArgb(theme.palettes.primary.tone(80))};`);
    cssTokens.push(`${tokenPrefix}-surface-tint-dark-rgb: ${rgbFromArgb(theme.palettes.primary.tone(80))};`);
    cssTokens.push(`${tokenPrefix}-shadow-dark: ${hexFromArgb(theme.palettes.neutral.tone(0))};`);
    cssTokens.push(`${tokenPrefix}-shadow-dark-rgb: ${rgbFromArgb(theme.palettes.neutral.tone(0))};`);
    cssTokens.push(`${tokenPrefix}-scrim-dark: ${hexFromArgb(theme.palettes.neutral.tone(0))};`);
    cssTokens.push(`${tokenPrefix}-scrim-dark-rgb: ${rgbFromArgb(theme.palettes.neutral.tone(0))};`);

    theme.customColors.forEach((customColor) => {
        cssTokens.push('');
        cssTokens.push(`/* Custom color "${customColor.color.name}" dark */`);
        cssTokens.push(`${customColorPrefix}-${customColor.color.name}-dark: ${hexFromArgb(customColor.dark.color)};`);
        cssTokens.push(`${customColorPrefix}-${customColor.color.name}-dark-rgb: ${rgbFromArgb(customColor.dark.color)};`);
        cssTokens.push(`${customColorPrefix}-on-${customColor.color.name}-dark: ${hexFromArgb(customColor.dark.onColor)};`);
        cssTokens.push(`${customColorPrefix}-on-${customColor.color.name}-dark-rgb: ${rgbFromArgb(customColor.dark.onColor)};`);
        cssTokens.push(`${customColorPrefix}-${customColor.color.name}-container-dark: ${hexFromArgb(customColor.dark.colorContainer)};`);
        cssTokens.push(`${customColorPrefix}-${customColor.color.name}-container-dark-rgb: ${rgbFromArgb(customColor.dark.colorContainer)};`);
        cssTokens.push(`${customColorPrefix}-on-${customColor.color.name}-container-dark: ${hexFromArgb(customColor.dark.onColorContainer)};`);
        cssTokens.push(`${customColorPrefix}-on-${customColor.color.name}-container-dark-rgb: ${rgbFromArgb(customColor.dark.onColorContainer)};`);
    });

    cssTokens.push('');
    cssTokens.push('/* Display - Large */');
    cssTokens.push(...generateTypescale(`${prefix}-typescale-display-large`, 'Roboto', 'Regular', '400', '3.5625rem', '4rem', '-0.015625rem'));

    cssTokens.push('');
    cssTokens.push('/* Display - Medium */');
    cssTokens.push(...generateTypescale(`${prefix}-typescale-display-medium`, 'Roboto', 'Regular', '400', '2.8125rem', '3.25rem'));

    cssTokens.push('');
    cssTokens.push('/* Display - Small */');
    cssTokens.push(...generateTypescale(`${prefix}-typescale-display-small`, 'Roboto', 'Regular', '400', '2.25rem', '2.75rem'));

    cssTokens.push('');
    cssTokens.push('/* Headline - Large */');
    cssTokens.push(...generateTypescale(`${prefix}-typescale-headline-large`, 'Roboto', 'Regular', '400', '2rem', '2.5rem'));

    cssTokens.push('');
    cssTokens.push('/* Headline - Medium */');
    cssTokens.push(...generateTypescale(`${prefix}-typescale-headline-medium`, 'Roboto', 'Regular', '400', '1.75rem', '2.25rem'));

    cssTokens.push('');
    cssTokens.push('/* Headline - Small */');
    cssTokens.push(...generateTypescale(`${prefix}-typescale-headline-small`, 'Roboto', 'Regular', '400', '1.5rem', '2rem'));

    cssTokens.push('');
    cssTokens.push('/* Body - Large */');
    cssTokens.push(...generateTypescale(`${prefix}-typescale-body-large`, 'Roboto', 'Regular', '400', '1rem', '1.5rem', '0.03125rem'));

    cssTokens.push('');
    cssTokens.push('/* Body - Medium */');
    cssTokens.push(...generateTypescale(`${prefix}-typescale-body-medium`, 'Roboto', 'Regular', '400', '0.875rem', '1.25rem', '0.015625rem'));

    cssTokens.push('');
    cssTokens.push('/* Body - Small */');
    cssTokens.push(...generateTypescale(`${prefix}-typescale-body-small`, 'Roboto', 'Regular', '400', '0.75rem', '1rem', '0.025rem'));

    cssTokens.push('');
    cssTokens.push('/* Label - Large */');
    cssTokens.push(...generateTypescale(`${prefix}-typescale-label-large`, 'Roboto', 'Medium', '500', '0.875rem', '1.25rem', '0.00625rem'));

    cssTokens.push('');
    cssTokens.push('/* Label - Medium */');
    cssTokens.push(...generateTypescale(`${prefix}-typescale-label-medium`, 'Roboto', 'Medium', '500', '0.75rem', '1rem', '0.03125rem'));

    cssTokens.push('');
    cssTokens.push('/* Label - Small */');
    cssTokens.push(...generateTypescale(`${prefix}-typescale-label-small`, 'Roboto', 'Medium', '500', '0.6875rem', '1rem', '0.03125rem'));

    cssTokens.push('');
    cssTokens.push('/* Title - Large */');
    cssTokens.push(...generateTypescale(`${prefix}-typescale-title-large`, 'Roboto', 'Regular', '400', '1.375rem', '1.75rem'));

    cssTokens.push('');
    cssTokens.push('/* Title - Medium */');
    cssTokens.push(...generateTypescale(`${prefix}-typescale-title-medium`, 'Roboto', 'Medium', '500', '1rem', '1.5rem', '0.009375rem'));

    cssTokens.push('');
    cssTokens.push('/* Title - Small */');
    cssTokens.push(...generateTypescale(`${prefix}-typescale-title-small`, 'Roboto', 'Medium', '500', '0.875rem', '1.25rem', '0.00625rem'));

    return `:root {\n${cssTokens.map((curr) => '  ' + curr).join('\n')}\n}\n`;
}
