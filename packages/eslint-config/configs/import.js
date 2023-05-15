module.exports = {
    plugins: ['import'],
    rules: {
        'no-duplicate-imports': 'off',

        'import/export': 'error',
        'import/no-deprecated': 'error',
        'import/no-empty-named-blocks': 'error',
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: true,
                optionalDependencies: true,
                peerDependencies: true,
            },
        ],
        'import/no-mutable-exports': 'error',
        'import/no-named-as-default-member': 'error',
        'import/no-named-as-default': 'error',
        'import/no-unused-modules': 'off',

        'import/no-amd': 'error',
        'import/no-commonjs': 'off',
        'import/no-import-module-exports': 'error',
        'import/no-nodejs-modules': 'off',
        'import/unambiguous': 'off',

        'import/default': 'error',
        'import/named': 'error',
        'import/namespace': 'error',
        'import/no-absolute-path': 'error',
        'import/no-cycle': 'error',
        'import/no-dynamic-require': 'error',
        'import/no-internal-modules': 'off',
        'import/no-relative-packages': 'error',
        'import/no-relative-parent-imports': 'off',
        'import/no-restricted-paths': [
            'error',
            {
                zones: [
                    {
                        target: './src',
                        from: ['**/{__tests__,__mocks__,test}/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
                    },
                ],
            },
        ],
        'import/no-self-import': 'error',
        'import/no-unresolved': ['error', { commonjs: true }],
        'import/no-useless-path-segments': ['error', { noUselessIndex: true }],
        'import/no-webpack-loader-syntax': 'error',

        'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
        'import/dynamic-import-chunkname': 'off',
        'import/exports-last': 'error',
        'import/extensions': [
            'error',
            'never',
            {
                ignorePackages: true,
                pattern: {
                    graphql: 'always',
                    json: 'always',
                    svg: 'always',
                },
            },
        ],
        'import/first': 'error',
        'import/group-exports': 'off',
        'import/max-dependencies': 'off',
        'import/newline-after-import': 'error',
        'import/no-anonymous-default-export': 'off',
        'import/no-default-export': 'error',
        'import/no-duplicates': 'error',
        'import/no-named-default': 'off',
        'import/no-named-export': 'off',
        'import/no-namespace': 'error',
        'import/no-unassigned-import': 'error',
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
