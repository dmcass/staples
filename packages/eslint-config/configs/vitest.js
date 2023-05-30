module.exports = {
    env: {
        'vitest/env': true,
    },
    plugins: ['vitest'],
    rules: {
        'vitest/consistent-test-filename': 'error',
        'vitest/consistent-test-it': 'error',
        'vitest/expect-expect': 'error',
        'vitest/max-expects': ['error', { max: 5 }],
        'vitest/max-nested-describe': ['error', { max: 3 }],
        'vitest/no-alias-methods': 'error',
        'vitest/no-commented-out-tests': 'error',
        'vitest/no-conditional-expect': 'error',
        'vitest/no-conditional-in-test': 'off',
        'vitest/no-conditional-tests': 'error',
        'vitest/no-disabled-tests': 'error',
        'vitest/no-done-callback': 'error',
        'vitest/no-duplicate-hooks': 'error',
        'vitest/no-focused-tests': 'error',
        'vitest/no-hooks': 'off',
        'vitest/no-identical-title': 'error',
        'vitest/no-interpolation-in-snapshots': 'error',
        'vitest/no-large-snapshots': 'error',
        'vitest/no-mocks-import': 'error',
        'vitest/no-restricted-matchers': [
            'error',
            {
                // Disallow external snapshots
                toThrowErrorMatchingSnapshot: 'Use `toThrowErrorMatchingInlineSnapshot() instead',
                toMatchSnapshot: 'Use `toMatchInlineSnapshot()` instead',
            },
        ],
        'vitest/no-restricted-vi-methods': 'off',
        'vitest/no-standalone-expect': 'error',
        'vitest/no-test-prefixes': 'error',
        'vitest/no-test-return-statement': 'error',
        'vitest/prefer-called-with': 'off',
        'vitest/prefer-comparison-matcher': 'error',
        'vitest/prefer-each': 'off',
        'vitest/prefer-equality-matcher': 'error',
        'vitest/prefer-expect-resolves': 'error',
        'vitest/prefer-hooks-in-order': 'error',
        'vitest/prefer-hooks-on-top': 'error',
        'vitest/prefer-lowercase-title': 'error',
        'vitest/prefer-mock-promise-shorthand': 'error',
        'vitest/prefer-snapshot-hint': 'off',
        'vitest/prefer-spy-on': 'error',
        'vitest/prefer-strict-equal': 'error',
        'vitest/prefer-to-be-falsy': 'off',
        'vitest/prefer-to-be-object': 'off',
        'vitest/prefer-to-be-truthy': 'off',
        'vitest/prefer-to-be': 'error',
        'vitest/prefer-to-contain': 'error',
        'vitest/prefer-to-have-length': 'error',
        'vitest/prefer-todo': 'error',
        'vitest/require-hook': 'error',
        'vitest/require-to-throw-message': 'off',
        'vitest/require-top-level-describe': 'error',
        'vitest/valid-describe-callback': 'error',
        'vitest/valid-expect': 'error',
        'vitest/valid-title': 'error',
    },
};
