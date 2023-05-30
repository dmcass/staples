module.exports = {
    plugins: ['jest', '@typescript-eslint'],
    rules: {
        '@typescript-eslint/unbound-method': 'off',
        'jest/unbound-method': 'error',
    },
};
