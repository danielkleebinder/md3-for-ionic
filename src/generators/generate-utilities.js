export const generateUtilities = (
    theme,
    options
) => {
    const cssUtilities = [];

    const sysColorPrefix = options.sysColorPrefix ?? 'mat-sys';

    cssUtilities.push('');
    cssUtilities.push('/* Elevation steps */');
    cssUtilities.push(`--mat-sys-level0: 0px 0px 0px 0px color-mix(in srgb, var(--${sysColorPrefix}-shadow), transparent 80%), 0px 0px 0px 0px color-mix(in srgb, var(--${sysColorPrefix}-shadow), transparent 86%), 0px 0px 0px 0px color-mix(in srgb, var(--${sysColorPrefix}-shadow), transparent 88%);`);
    cssUtilities.push(`--mat-sys-level1: 0px 3px 1px -2px color-mix(in srgb, var(--${sysColorPrefix}-shadow), transparent 80%), 0px 2px 2px 0px color-mix(in srgb, var(--${sysColorPrefix}-shadow), transparent 86%), 0px 1px 5px 0px color-mix(in srgb, var(--${sysColorPrefix}-shadow), transparent 88%);`);
    cssUtilities.push(`--mat-sys-level2: 0px 2px 4px -1px color-mix(in srgb, var(--${sysColorPrefix}-shadow), transparent 80%), 0px 4px 5px 0px color-mix(in srgb, var(--${sysColorPrefix}-shadow), transparent 86%), 0px 1px 10px 0px color-mix(in srgb, var(--${sysColorPrefix}-shadow), transparent 88%);`);
    cssUtilities.push(`--mat-sys-level3: 0px 5px 5px -3px color-mix(in srgb, var(--${sysColorPrefix}-shadow), transparent 80%), 0px 8px 10px 1px color-mix(in srgb, var(--${sysColorPrefix}-shadow), transparent 86%), 0px 3px 14px 2px color-mix(in srgb, var(--${sysColorPrefix}-shadow), transparent 88%);`);
    cssUtilities.push(`--mat-sys-level4: 0px 5px 5px -3px color-mix(in srgb, var(--${sysColorPrefix}-shadow), transparent 80%), 0px 8px 10px 1px color-mix(in srgb, var(--${sysColorPrefix}-shadow), transparent 86%), 0px 3px 14px 2px color-mix(in srgb, var(--${sysColorPrefix}-shadow), transparent 88%);`);
    cssUtilities.push(`--mat-sys-level5: 0px 8px 10px -6px color-mix(in srgb, var(--${sysColorPrefix}-shadow), transparent 80%), 0px 16px 24px 2px color-mix(in srgb, var(--${sysColorPrefix}-shadow), transparent 86%), 0px 6px 30px 5px color-mix(in srgb, var(--${sysColorPrefix}-shadow), transparent 88%);`);

    cssUtilities.push('');
    cssUtilities.push('/* Corner shapes */');
    cssUtilities.push('--mat-sys-corner-none: 0;');
    cssUtilities.push('--mat-sys-corner-extra-small: 4px;');
    cssUtilities.push('--mat-sys-corner-extra-small-top: 4px 4px 0 0;');
    cssUtilities.push('--mat-sys-corner-small: 8px;');
    cssUtilities.push('--mat-sys-corner-medium: 12px;');
    cssUtilities.push('--mat-sys-corner-large: 16px;');
    cssUtilities.push('--mat-sys-corner-large-end: 0 16px 16px 0;');
    cssUtilities.push('--mat-sys-corner-large-top: 16px 16px 0 0;');
    cssUtilities.push('--mat-sys-corner-extra-large: 28px;');
    cssUtilities.push('--mat-sys-corner-extra-large-top: 28px 28px 0 0;');
    cssUtilities.push('--mat-sys-corner-full: 1024px;');

    return `:root {\n${cssUtilities.map((curr) => '  ' + curr).join('\n')}\n}\n`;
}
