module.exports = {
    plugins: ['react-native'],
    rules: {
        'react-native/no-color-literals': 'error',
        'react-native/no-inline-styles': 'error',

        // Causes eslint to crash in VSCode
        // https://github.com/Intellicode/eslint-plugin-react-native/issues/270
        'react-native/no-raw-text': 'off',

        'react-native/no-single-element-style-arrays': 'error',
        'react-native/no-unused-styles': 'error',
        'react-native/sort-styles': ['error', 'asc', { ignoreStyleProperties: true }],
        'react-native/split-platform-components': 'error',
    },
};
