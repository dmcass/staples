const importPlugin = require('eslint-plugin-import');

const { settings: importSettings } = importPlugin.configs.typescript;

module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'import'],
    rules: {
        '@typescript-eslint/adjacent-overload-signatures': 'error',
        '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
        '@typescript-eslint/await-thenable': 'error',
        '@typescript-eslint/ban-ts-comment': 'error',
        '@typescript-eslint/ban-tslint-comment': 'error',
        '@typescript-eslint/ban-types': 'error',
        '@typescript-eslint/class-literal-property-style': ['error', 'fields'],
        '@typescript-eslint/consistent-generic-constructors': 'error',
        '@typescript-eslint/consistent-indexed-object-style': 'error',
        '@typescript-eslint/consistent-type-assertions': [
            'error',
            { assertionStyle: 'as', objectLiteralTypeAssertions: 'allow-as-parameter' },
        ],
        '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
        '@typescript-eslint/consistent-type-exports': 'error',
        '@typescript-eslint/consistent-type-imports': 'error',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-member-accessibility': ['error', { accessibility: 'no-public' }],
        '@typescript-eslint/explicit-module-boundary-types': 'error',
        '@typescript-eslint/member-ordering': [
            'error',
            {
                default: {
                    memberTypes: [
                        // Index signature
                        'signature',
                        'call-signature',

                        // Fields
                        '#private-static-field',
                        'private-static-field',
                        'protected-static-field',
                        'public-static-field',

                        'private-decorated-field',
                        'protected-decorated-field',
                        'public-decorated-field',

                        'protected-abstract-field',
                        'public-abstract-field',

                        '#private-instance-field',
                        'private-instance-field',
                        'protected-instance-field',
                        'public-instance-field',

                        // Static initialization
                        'static-initialization',

                        // Constructors
                        'constructor',

                        // Statics
                        '#private-static-get',
                        'private-static-get',
                        'protected-static-get',
                        'public-static-get',

                        '#private-static-set',
                        'private-static-set',
                        'protected-static-set',
                        'public-static-set',

                        '#private-static-method',
                        'private-static-method',
                        'protected-static-method',
                        'public-static-method',

                        // Abstracts
                        'protected-abstract-get',
                        'public-abstract-get',

                        'protected-abstract-set',
                        'public-abstract-set',

                        'protected-abstract-method',
                        'public-abstract-method',

                        // Getters
                        'private-decorated-get',
                        'protected-decorated-get',
                        'public-decorated-get',

                        '#private-instance-get',
                        'private-instance-get',
                        'protected-instance-get',
                        'public-instance-get',

                        // Setters
                        'private-decorated-set',
                        'protected-decorated-set',
                        'public-decorated-set',

                        '#private-instance-set',
                        'private-instance-set',
                        'protected-instance-set',
                        'public-instance-set',

                        // Methods
                        'private-decorated-method',
                        'protected-decorated-method',
                        'public-decorated-method',

                        '#private-instance-method',
                        'private-instance-method',
                        'protected-instance-method',
                        'public-instance-method',
                    ],
                    optionalityOrder: 'required-first',
                    order: 'as-written',
                },
            },
        ],
        '@typescript-eslint/method-signature-style': ['error', 'method'],
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: ['interface', 'class', 'typeParameter', 'typeLike'],
                format: ['PascalCase'],
                leadingUnderscore: 'forbid',
                trailingUnderscore: 'forbid',
            },
            {
                selector: 'function',
                format: ['camelCase', 'PascalCase'],
                leadingUnderscore: 'forbid',
                trailingUnderscore: 'forbid',
            },
            {
                selector: 'variable',
                format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
                leadingUnderscore: 'forbid',
                trailingUnderscore: 'forbid',
            },
            {
                selector: 'parameter',
                format: ['camelCase', 'PascalCase'],
                leadingUnderscore: 'forbid',
                trailingUnderscore: 'forbid',
            },
            {
                selector: 'memberLike',
                modifiers: ['private'],
                format: ['camelCase'],
                leadingUnderscore: 'forbid',
                trailingUnderscore: 'forbid',
            },
        ],
        '@typescript-eslint/no-base-to-string': 'error',
        '@typescript-eslint/no-confusing-non-null-assertion': 'error',
        '@typescript-eslint/no-confusing-void-expression': ['error', { ignoreArrowShorthand: true }],
        '@typescript-eslint/no-duplicate-enum-values': 'error',
        '@typescript-eslint/no-duplicate-type-constituents': 'error',
        '@typescript-eslint/no-dynamic-delete': 'error',
        '@typescript-eslint/no-empty-interface': 'error',
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/no-extra-non-null-assertion': 'error',
        '@typescript-eslint/no-extraneous-class': 'error',
        '@typescript-eslint/no-floating-promises': 'error',
        '@typescript-eslint/no-for-in-array': 'error',
        '@typescript-eslint/no-implicit-any-catch': 'off',
        '@typescript-eslint/no-import-type-side-effects': 'error',
        '@typescript-eslint/no-inferrable-types': 'error',
        '@typescript-eslint/no-invalid-void-type': 'error',
        '@typescript-eslint/no-meaningless-void-operator': 'error',
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/no-misused-promises': 'error',
        '@typescript-eslint/no-mixed-enums': 'error',
        '@typescript-eslint/no-namespace': 'error',
        '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
        '@typescript-eslint/no-non-null-assertion': 'error',
        '@typescript-eslint/no-redundant-type-constituents': 'error',
        '@typescript-eslint/no-require-imports': 'off',
        '@typescript-eslint/no-this-alias': 'error',
        '@typescript-eslint/no-type-alias': 'off',
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
        '@typescript-eslint/no-unnecessary-condition': 'error',
        '@typescript-eslint/no-unnecessary-qualifier': 'error',
        '@typescript-eslint/no-unnecessary-type-arguments': 'error',
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',
        '@typescript-eslint/no-unnecessary-type-constraint': 'error',
        '@typescript-eslint/no-unsafe-argument': 'error',
        '@typescript-eslint/no-unsafe-assignment': 'error',
        '@typescript-eslint/no-unsafe-call': 'error',
        '@typescript-eslint/no-unsafe-declaration-merging': 'error',
        '@typescript-eslint/no-unsafe-enum-comparison': 'error',
        '@typescript-eslint/no-unsafe-member-access': 'error',
        '@typescript-eslint/no-unsafe-return': 'error',
        '@typescript-eslint/no-useless-empty-export': 'error',
        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/non-nullable-type-assertion-style': 'error',
        '@typescript-eslint/parameter-properties': 'error',
        '@typescript-eslint/prefer-as-const': 'error',
        '@typescript-eslint/prefer-enum-initializers': 'off',
        '@typescript-eslint/prefer-for-of': 'error',
        '@typescript-eslint/prefer-function-type': 'error',
        '@typescript-eslint/prefer-includes': 'error',
        '@typescript-eslint/prefer-literal-enum-member': 'error',
        '@typescript-eslint/prefer-namespace-keyword': 'error',
        '@typescript-eslint/prefer-nullish-coalescing': 'error',
        '@typescript-eslint/prefer-optional-chain': 'error',
        '@typescript-eslint/prefer-readonly-parameter-types': 'off',
        '@typescript-eslint/prefer-readonly': 'off',
        '@typescript-eslint/prefer-reduce-type-parameter': 'error',
        '@typescript-eslint/prefer-regexp-exec': 'error',
        '@typescript-eslint/prefer-return-this-type': 'error',
        '@typescript-eslint/prefer-string-starts-ends-with': 'error',
        '@typescript-eslint/prefer-ts-expect-error': 'error',
        '@typescript-eslint/promise-function-async': 'off',
        '@typescript-eslint/require-array-sort-compare': 'error',
        '@typescript-eslint/restrict-plus-operands': 'error',
        '@typescript-eslint/restrict-template-expressions': 'error',
        '@typescript-eslint/sort-type-constituents': 'error',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/switch-exhaustiveness-check': 'error',
        '@typescript-eslint/triple-slash-reference': 'error',
        '@typescript-eslint/typedef': 'off',
        '@typescript-eslint/unbound-method': 'error',
        '@typescript-eslint/unified-signatures': 'error',

        // Extension Rules
        'default-param-last': 'off',
        '@typescript-eslint/default-param-last': 'error',
        'dot-notation': 'off',
        '@typescript-eslint/dot-notation': 'error',
        'init-declarations': 'off',
        '@typescript-eslint/init-declarations': 'off',
        'no-array-constructor': 'off',
        '@typescript-eslint/no-array-constructor': 'error',
        'no-dupe-class-members': 'off',
        '@typescript-eslint/no-dupe-class-members': 'error',
        'no-duplicate-imports': 'off',
        '@typescript-eslint/no-duplicate-imports': 'error',
        'no-empty-function': 'off',
        '@typescript-eslint/no-empty-function': 'error',
        'no-extra-semi': 'off',
        '@typescript-eslint/no-extra-semi': 'off',
        'no-implied-eval': 'off',
        '@typescript-eslint/no-implied-eval': 'error',
        'no-invalid-this': 'off',
        '@typescript-eslint/no-invalid-this': 'off',
        'no-loop-func': 'off',
        '@typescript-eslint/no-loop-func': 'error',
        'no-loss-of-precision': 'off',
        '@typescript-eslint/no-loss-of-precision': 'error',
        'no-magic-numbers': 'off',
        '@typescript-eslint/no-magic-numbers': 'off',
        'no-redeclare': 'off',
        '@typescript-eslint/no-redeclare': 'error',
        'no-restricted-imports': 'off',
        '@typescript-eslint/no-restricted-imports': 'off',
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': 'error',
        'no-throw-literal': 'off',
        '@typescript-eslint/no-throw-literal': 'error',
        'no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': [
            'error',
            {
                allowShortCircuit: false,
                allowTernary: false,
                allowTaggedTemplates: false,
                enforceForJSX: true,
            },
        ],
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error', { functions: true, classes: true, variables: true }],
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'error',
        'require-await': 'off',
        '@typescript-eslint/require-await': 'off',
        'no-return-await': 'off',
        '@typescript-eslint/return-await': 'error',

        'import/named': 'off',
    },
    settings: {
        ...importSettings,
        'import/resolver': {
            ...importSettings['import/resolver'],
            typescript: {
                alwaysTryTypes: true,
            },
        },
    },
};
