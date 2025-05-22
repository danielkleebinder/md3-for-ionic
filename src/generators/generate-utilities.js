export const generateUtilities = (
    theme,
    options
) => {
    const cssUtilities = [];

    const prefix = options.sysColorPrefix ?? 'md-sys';

    cssUtilities.push('');
    cssUtilities.push('/* Elevation steps */');
    cssUtilities.push(`--${prefix}-level0: 0px 0px 0px 0px color-mix(in srgb, var(--${prefix}-shadow), transparent 80%), 0px 0px 0px 0px color-mix(in srgb, var(--${prefix}-shadow), transparent 86%), 0px 0px 0px 0px color-mix(in srgb, var(--${prefix}-shadow), transparent 88%);`);
    cssUtilities.push(`--${prefix}-level1: 0px 3px 1px -2px color-mix(in srgb, var(--${prefix}-shadow), transparent 80%), 0px 2px 2px 0px color-mix(in srgb, var(--${prefix}-shadow), transparent 86%), 0px 1px 5px 0px color-mix(in srgb, var(--${prefix}-shadow), transparent 88%);`);
    cssUtilities.push(`--${prefix}-level2: 0px 2px 4px -1px color-mix(in srgb, var(--${prefix}-shadow), transparent 80%), 0px 4px 5px 0px color-mix(in srgb, var(--${prefix}-shadow), transparent 86%), 0px 1px 10px 0px color-mix(in srgb, var(--${prefix}-shadow), transparent 88%);`);
    cssUtilities.push(`--${prefix}-level3: 0px 5px 5px -3px color-mix(in srgb, var(--${prefix}-shadow), transparent 80%), 0px 8px 10px 1px color-mix(in srgb, var(--${prefix}-shadow), transparent 86%), 0px 3px 14px 2px color-mix(in srgb, var(--${prefix}-shadow), transparent 88%);`);
    cssUtilities.push(`--${prefix}-level4: 0px 5px 5px -3px color-mix(in srgb, var(--${prefix}-shadow), transparent 80%), 0px 8px 10px 1px color-mix(in srgb, var(--${prefix}-shadow), transparent 86%), 0px 3px 14px 2px color-mix(in srgb, var(--${prefix}-shadow), transparent 88%);`);
    cssUtilities.push(`--${prefix}-level5: 0px 8px 10px -6px color-mix(in srgb, var(--${prefix}-shadow), transparent 80%), 0px 16px 24px 2px color-mix(in srgb, var(--${prefix}-shadow), transparent 86%), 0px 6px 30px 5px color-mix(in srgb, var(--${prefix}-shadow), transparent 88%);`);

    cssUtilities.push('');
    cssUtilities.push('/* Corner shapes */');
    cssUtilities.push(`--${prefix}-corner-none: 0;`);
    cssUtilities.push(`--${prefix}-corner-extra-small: 4px;`);
    cssUtilities.push(`--${prefix}-corner-extra-small-top: 4px 4px 0 0;`);
    cssUtilities.push(`--${prefix}-corner-small: 8px;`);
    cssUtilities.push(`--${prefix}-corner-medium: 12px;`);
    cssUtilities.push(`--${prefix}-corner-large: 16px;`);
    cssUtilities.push(`--${prefix}-corner-large-end: 0 16px 16px 0;`);
    cssUtilities.push(`--${prefix}-corner-large-top: 16px 16px 0 0;`);
    cssUtilities.push(`--${prefix}-corner-extra-large: 28px;`);
    cssUtilities.push(`--${prefix}-corner-extra-large-top: 28px 28px 0 0;`);
    cssUtilities.push(`--${prefix}-corner-full: 1024px;`);

    cssUtilities.push('');
    cssUtilities.push('/* Expressive spring functions */');
    cssUtilities.push(`--${prefix}-expressive-fast-spatial: cubic-bezier(0.42, 1.67, 0.21, 0.90);`);
    cssUtilities.push(`--${prefix}-expressive-default-spatial: cubic-bezier(0.38, 1.21, 0.22, 1.00);`);
    cssUtilities.push(`--${prefix}-expressive-slow-spatial: cubic-bezier(0.39, 1.29, 0.35, 0.98);`);
    cssUtilities.push(`--${prefix}-expressive-fast-effects: cubic-bezier(0.31, 0.94, 0.34, 1.00);`);
    cssUtilities.push(`--${prefix}-expressive-default-effects: cubic-bezier(0.34, 0.80, 0.34, 1.00);`);
    cssUtilities.push(`--${prefix}-expressive-slow-effects: cubic-bezier(0.34, 0.88, 0.34, 1.00);`);
    cssUtilities.push('');
    cssUtilities.push(`--${prefix}-standard-fast-spatial: cubic-bezier(0.27, 1.06, 0.18, 1.00);`);
    cssUtilities.push(`--${prefix}-standard-default-spatial: cubic-bezier(0.27, 1.06, 0.18, 1.00);`);
    cssUtilities.push(`--${prefix}-standard-slow-spatial: cubic-bezier(0.27, 1.06, 0.18, 1.00);`);
    cssUtilities.push(`--${prefix}-standard-fast-effects: cubic-bezier(0.31, 0.94, 0.34, 1.00);`);
    cssUtilities.push(`--${prefix}-standard-default-effects: cubic-bezier(0.34, 0.80, 0.34, 1.00);`);
    cssUtilities.push(`--${prefix}-standard-slow-effects: cubic-bezier(0.34, 0.88, 0.34, 1.00);`);
    cssUtilities.push('');
    cssUtilities.push(`--${prefix}-expressive-fast-spring: linear(0.00, 0.0612, 0.244, 0.486, 0.732, 0.945, 1.10, 1.20, 1.23, 1.22, 1.18, 1.13, 1.07, 1.02, 0.980, 0.956, 0.946, 0.947, 0.955, 0.968, 0.982, 0.994, 1.00, 1.01, 1.01, 1.01, 1.01, 1.01, 1.00, 1.00, 0.999, 0.998, 0.997, 0.997, 0.997, 0.998, 0.999, 1.00, 1.00);`);
    cssUtilities.push(`--${prefix}-expressive-default-spring: linear(0.00, 0.0612, 0.244, 0.486, 0.732, 0.945, 1.10, 1.20, 1.23, 1.22, 1.18, 1.13, 1.07, 1.02, 0.980, 0.956, 0.946, 0.947, 0.955, 0.968, 0.982, 0.994, 1.00, 1.01, 1.01, 1.01, 1.01, 1.01, 1.00, 1.00, 0.999, 0.998, 0.997, 0.997, 0.997, 0.998, 0.999, 1.00, 1.00);`);
    cssUtilities.push(`--${prefix}-expressive-slow-spring: linear(0.00, 0.126, 0.320, 0.519, 0.690, 0.822, 0.915, 0.974, 1.01, 1.02, 1.03, 1.03, 1.02, 1.02, 1.01, 1.01, 1.00, 1.00, 1.00, 1.00);`);

    cssUtilities.push('');
    cssUtilities.push('/* Expressive durations */');
    cssUtilities.push(`--${prefix}-expressive-fast-spatial-duration: 350ms;`);
    cssUtilities.push(`--${prefix}-expressive-default-spatial-duration: 500ms;`);
    cssUtilities.push(`--${prefix}-expressive-slow-spatial-duration: 650ms;`);
    cssUtilities.push(`--${prefix}-expressive-fast-effects-duration: 150ms;`);
    cssUtilities.push(`--${prefix}-expressive-default-effects-duration: 200ms;`);
    cssUtilities.push(`--${prefix}-expressive-slow-effects-duration: 300ms;`);
    cssUtilities.push('');
    cssUtilities.push(`--${prefix}-standard-fast-spatial-duration: 350ms;`);
    cssUtilities.push(`--${prefix}-standard-default-spatial-duration: 500ms;`);
    cssUtilities.push(`--${prefix}-standard-slow-spatial-duration: 750ms;`);
    cssUtilities.push(`--${prefix}-standard-fast-effects-duration: 150ms;`);
    cssUtilities.push(`--${prefix}-standard-default-effects-duration: 200ms;`);
    cssUtilities.push(`--${prefix}-standard-slow-effects-duration: 300ms;`);
    cssUtilities.push('');
    cssUtilities.push(`--${prefix}-expressive-fast-spring-duration: 350ms;`);
    cssUtilities.push(`--${prefix}-expressive-default-spring-duration: 500ms;`);
    cssUtilities.push(`--${prefix}-expressive-slow-spring-duration: 750ms;`);

    cssUtilities.push('');
    cssUtilities.push('/* Easing functions */');
    cssUtilities.push(`--${prefix}-motion-easing-emphasized: cubic-bezier(0.2, 0, 0, 1);`);
    cssUtilities.push(`--${prefix}-motion-easing-emphasized-accelerate: cubic-bezier(0.3, 0, 0.8, 0.15);`);
    cssUtilities.push(`--${prefix}-motion-easing-emphasized-decelerate: cubic-bezier(0.05, 0.7, 0.1, 1);`);
    cssUtilities.push(`--${prefix}-motion-easing-standard: var(--${prefix}-motion-easing-emphasized);`);
    cssUtilities.push(`--${prefix}-motion-easing-standard-accelerate: cubic-bezier(0.3, 0, 1, 1);`);
    cssUtilities.push(`--${prefix}-motion-easing-standard-decelerate: cubic-bezier(0, 0, 0, 1);`);
    cssUtilities.push(`--${prefix}-motion-easing-legacy: cubic-bezier(0.4, 0, 0.2, 1);`);
    cssUtilities.push(`--${prefix}-motion-easing-legacy-accelerate: cubic-bezier(0.4, 0, 1, 1);`);
    cssUtilities.push(`--${prefix}-motion-easing-legacy-decelerate: cubic-bezier(0, 0, 0.2, 1);`);
    cssUtilities.push(`--${prefix}-motion-easing-linear: cubic-bezier(0, 0, 1, 1);`);

    cssUtilities.push('');
    cssUtilities.push('/* Durations */');
    cssUtilities.push(`--${prefix}-motion-duration-short-1: 50ms;`);
    cssUtilities.push(`--${prefix}-motion-duration-short-2: 100ms;`);
    cssUtilities.push(`--${prefix}-motion-duration-short-3: 150ms;`);
    cssUtilities.push(`--${prefix}-motion-duration-short-4: 200ms;`);
    cssUtilities.push(`--${prefix}-motion-duration-medium-1: 250ms;`);
    cssUtilities.push(`--${prefix}-motion-duration-medium-2: 300ms;`);
    cssUtilities.push(`--${prefix}-motion-duration-medium-3: 350ms;`);
    cssUtilities.push(`--${prefix}-motion-duration-medium-4: 400ms;`);
    cssUtilities.push(`--${prefix}-motion-duration-long-1: 450ms;`);
    cssUtilities.push(`--${prefix}-motion-duration-long-2: 500ms;`);
    cssUtilities.push(`--${prefix}-motion-duration-long-3: 550ms;`);
    cssUtilities.push(`--${prefix}-motion-duration-long-4: 600ms;`);
    cssUtilities.push(`--${prefix}-motion-duration-extra-long-1: 700ms;`);
    cssUtilities.push(`--${prefix}-motion-duration-extra-long-2: 800ms;`);
    cssUtilities.push(`--${prefix}-motion-duration-extra-long-3: 900ms;`);
    cssUtilities.push(`--${prefix}-motion-duration-extra-long-4: 1000ms;`);

    cssUtilities.push('');
    cssUtilities.push('/* Motion path styles */');
    cssUtilities.push(`--${prefix}-motion-path: linear;`);

    return `:root {\n${cssUtilities.map((curr) => '  ' + curr).join('\n')}\n}\n`;
}
