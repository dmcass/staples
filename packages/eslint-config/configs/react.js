module.exports = {
    plugins: ['react'],
    rules: {
        'class-methods-use-this': [
            'error',
            {
                exceptMethods: [
                    'render',
                    'getInitialState',
                    'getDefaultProps',
                    'getChildContext',
                    'componentDidMount',
                    'shouldComponentUpdate',
                    'componentDidUpdate',
                    'componentWillUnmount',
                    'componentDidCatch',
                    'getSnapshotBeforeUpdate',
                ],
            },
        ],
        'no-underscore-dangle': [
            'error',
            {
                allow: ['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'],
                allowFunctionParams: false,
                allowInArrayDestructuring: false,
                allowInObjectDestructuring: false,
                enforceInClassFields: true,
                enforceInMethodNames: true,
            },
        ],

        'react/boolean-prop-naming': 'off',
        'react/button-has-type': [
            'error',
            {
                button: true,
                submit: true,
                reset: false,
            },
        ],
        'react/default-props-match-prop-types': ['error', { allowRequiredDefaults: false }],
        'react/destructuring-assignment': ['error', 'always'],
        'react/display-name': ['error', { checkContextObjects: false, ignoreTranspilerName: false }],
        'react/forbid-component-props': 'off',
        'react/forbid-dom-props': 'off',
        'react/forbid-elements': 'off',
        'react/forbid-foreign-prop-types': ['error', { allowInPropTypes: true }],
        'react/forbid-prop-types': [
            'error',
            {
                forbid: ['any', 'array', 'object'],
                checkContextTypes: true,
                checkChildContextTypes: true,
            },
        ],
        'react/function-component-definition': [
            'error',
            {
                namedComponents: ['function-declaration', 'function-expression'],
                unnamedComponents: 'function-expression',
            },
        ],
        'react/hook-use-state': ['error', { allowDestructuredState: true }],
        'react/iframe-missing-sandbox': 'error',
        'react/jsx-boolean-value': ['error', 'never'],
        'react/jsx-child-element-spacing': 'off',
        'react/jsx-closing-bracket-location': 'off',
        'react/jsx-closing-tag-location': 'off',
        'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
        'react/jsx-curly-newline': 'off',
        'react/jsx-curly-spacing': 'off',
        'react/jsx-equals-spacing': 'off',
        'react/jsx-filename-extension': ['error', { allow: 'as-needed', extensions: ['.jsx', '.tsx'] }],
        'react/jsx-first-prop-new-line': 'off',
        'react/jsx-fragments': ['error', 'syntax'],
        'react/jsx-handler-names': 'error',
        'react/jsx-indent-props': 'off',
        'react/jsx-indent': 'off',
        'react/jsx-key': [
            'error',
            {
                checkFragmentShorthand: true,
                checkKeyMustBeforeSpread: false,
                warnOnDuplicates: true,
            },
        ],
        'react/jsx-max-depth': 'off',
        'react/jsx-max-props-per-line': 'off',
        'react/jsx-newline': 'off',
        'react/jsx-no-bind': [
            'error',
            {
                ignoreRefs: false,
                allowArrowFunctions: false,
                allowFunctions: false,
                allowBind: false,
                ignoreDOMComponents: false,
            },
        ],
        'react/jsx-no-comment-textnodes': 'error',
        'react/jsx-no-constructed-context-values': 'error',
        'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],
        'react/jsx-no-leaked-render': ['error', { validStrategies: ['coerce', 'ternary'] }],
        'react/jsx-no-literals': 'off',
        'react/jsx-no-script-url': [
            'error',
            [
                {
                    name: 'Link',
                    props: ['to'],
                },
            ],
        ],
        'react/jsx-no-target-blank': ['error', { enforceDynamicLinks: 'always' }],
        'react/jsx-no-undef': 'error',
        'react/jsx-no-useless-fragment': 'error',
        'react/jsx-one-expression-per-line': 'off',
        'react/jsx-pascal-case': ['error', { allowAllCaps: true }],
        'react/jsx-props-no-multi-spaces': 'off',
        'react/jsx-props-no-spreading': [
            'error',
            {
                html: 'enforce',
                custom: 'enforce',
                explicitSpread: 'ignore',
            },
        ],
        'react/jsx-sort-props': [
            'error',
            {
                callbacksLast: false,
                ignoreCase: true,
                reservedFirst: true,
                shorthandLast: true,
            },
        ],
        'react/jsx-tag-spacing': 'off',
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'react/jsx-wrap-multilines': 'off',
        'react/no-access-state-in-setstate': 'error',
        'react/no-adjacent-inline-elements': 'off',
        'react/no-array-index-key': 'error',
        'react/no-arrow-function-lifecycle': 'error',
        'react/no-children-prop': 'error',
        'react/no-danger-with-children': 'error',
        'react/no-danger': 'error',
        'react/no-deprecated': 'error',
        'react/no-did-mount-set-state': 'error',
        'react/no-did-update-set-state': 'error',
        'react/no-direct-mutation-state': 'error',
        'react/no-find-dom-node': 'error',
        'react/no-invalid-html-attribute': 'error',
        'react/no-is-mounted': 'error',
        'react/no-multi-comp': 'off',
        'react/no-namespace': 'error',
        'react/no-object-type-as-default-prop': 'error',
        'react/no-redundant-should-component-update': 'error',
        'react/no-render-return-value': 'error',
        'react/no-set-state': 'off',
        'react/no-string-refs': 'error',
        'react/no-this-in-sfc': 'error',
        'react/no-typos': 'error',
        'react/no-unescaped-entities': 'error',
        'react/no-unknown-property': 'error',
        'react/no-unsafe': 'error',
        'react/no-unstable-nested-components': 'error',
        'react/no-unused-class-component-methods': 'error',
        'react/no-unused-prop-types': ['error', { skipShapeProps: true }],
        'react/no-unused-state': 'error',
        'react/no-will-update-set-state': 'error',
        'react/prefer-es6-class': ['error', 'always'],
        'react/prefer-exact-props': 'error',
        'react/prefer-read-only-props': 'error',
        'react/prefer-stateless-function': ['error', { ignorePureComponents: true }],
        'react/prop-types': ['error', { skipUndeclared: false }],
        'react/react-in-jsx-scope': 'error',
        'react/require-default-props': [
            'error',
            {
                functions: 'defaultArguments',
                forbidDefaultForRequired: true,
            },
        ],
        'react/require-optimization': 'off',
        'react/require-render-return': 'error',
        'react/self-closing-comp': 'error',
        'react/sort-comp': [
            'error',
            {
                order: [
                    'static-reserved',
                    'static-variables',
                    'instance-variables',
                    'setup',
                    'static-methods',
                    'getters',
                    'setters',
                    'instance-methods',
                    'lifecycle',
                    '/^handle.+$/',
                    '/^on.+$/',
                    '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
                    'everything-else',
                    'rendering',
                ],
                groups: {
                    'static-reserved': ['displayName', 'propTypes', 'defaultProps'],
                    'setup': ['state', 'constructor'],
                    'lifecycle': [
                        'getDerivedStateFromProps',
                        'componentDidMount',
                        'shouldComponentUpdate',
                        'getSnapshotBeforeUpdate',
                        'componentDidUpdate',
                        'componentDidCatch',
                        'componentWillUnmount',
                    ],
                    'rendering': ['/^render.+$/', 'render'],
                },
            },
        ],
        'react/sort-default-props': [
            'error',
            {
                ignoreCase: true,
            },
        ],
        'react/sort-prop-types': [
            'error',
            {
                callbacksLast: true,
                ignoreCase: true,
                requiredFirst: true,
                sortShapeProp: true,
            },
        ],
        'react/state-in-constructor': ['error', 'never'],
        'react/static-property-placement': ['error', 'static public field'],
        'react/style-prop-object': 'error',
        'react/void-dom-elements-no-children': 'error',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};