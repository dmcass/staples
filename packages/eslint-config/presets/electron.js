module.exports = {
    overrides: [
        {
            extends: [
                'staples',
                'staples/configs/import',
                'staples/configs/unicorn',
                'staples/configs/promise',
                'staples/configs/eslint-comments',
                'staples/configs/regexp',
                'staples/configs/node',
                'staples/configs/electron',
                'prettier',
            ],
            files: ['*.js'],
        },
        {
            extends: [
                'staples',
                'staples/configs/import',
                'staples/configs/unicorn',
                'staples/configs/promise',
                'staples/configs/eslint-comments',
                'staples/configs/regexp',
                'staples/configs/node',
                'staples/configs/electron',
                'staples/configs/rnx-kit',
                'staples/configs/typescript',
                'prettier',
            ],
            files: ['*.ts'],
        },
    ],
};
