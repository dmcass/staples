module.exports = {
    env: {
        es2022: true,
        node: true,
    },
    extends: ['./problems', './suggestions', './formatting'].map((path) => require.resolve(path)),
    parserOptions: {
        ecmaFeatures: {
            globalReturn: false,
            impliedStrict: true,
            jsx: true,
        },
        sourceType: 'module',
        ecmaVersion: 2022,
    },
    rules: {},
};
