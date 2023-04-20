module.exports = {
    env: {
        es2022: true,
        node: true,
    },
    extends: ['./problems', './suggestions', './formatting'].map(require.resolve),
    parserOptions: {
        ecmaFeatures: {
            globalReturn: false,
            impliedStrict: true,
            jsx: true,
        },
        sourceType: 'module',
    },
    rules: {},
};
