module.exports = {
    plugins: ['import'],
    rules: {
        'import/exports-last': 'error',
        'import/namespace': 'error',
        'import/no-deprecated': 'error',
        'import/no-extraneous-dependencies': 'off',
        'import/no-restricted-paths': ['error', { zones: [{ target: './src', from: './test' }] }],
        'import/order': [
            'error',
            {
                'alphabetize': { order: 'asc', caseInsensitive: true },
                'groups': ['builtin', 'external', 'internal', ['parent', 'sibling', 'index'], 'unknown'],
                'newlines-between': 'always',
                'pathGroups': [{ pattern: '~/**', group: 'internal' }],
                'pathGroupsExcludedImportTypes': ['builtin'],
            },
        ],
        'import/prefer-default-export': 'off',
    },
};
