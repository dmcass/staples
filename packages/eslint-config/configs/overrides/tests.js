const suggestions = require('../base/suggestions');

const noRestrictedSyntaxRules = suggestions.rules['no-restricted-syntax'];

module.exports = {
    plugins: ['n'],
    rules: {
        'no-empty-function': 'off',
        'no-restricted-syntax': noRestrictedSyntaxRules.slice(0, -1),
        'n/global-require': 'off',
    },
};
