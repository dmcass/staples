module.exports = {
    plugins: ['react-native'],
    rules: {
        'no-color-literals': 'error',
        'no-inline-styles': 'error',

        // Causes eslint to crash in VSCode
        // https://github.com/Intellicode/eslint-plugin-react-native/issues/270
        'no-raw-text': 'off',

        'no-single-element-style-arrays': 'error',
        'no-unused-styles': 'error',
        'sort-styles': ['error', 'asc', { ignoreStyleProperties: true }],
        'split-platform-components': 'error',
    },
};
