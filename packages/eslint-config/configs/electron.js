module.exports = {
    env: {
        node: true,
        browser: true,
    },
    extends: ['staples/configs/node'],
    rules: {
        'n/no-unpublished-import': [
            'error',
            {
                allowModules: ['electron'],
            },
        ],
    },
};
