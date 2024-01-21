module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    semi: 0,
    '@typescript-eslint/no-unused-vars': 0,
  },
  plugins: ['import'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'prettier/prettier': [
          'error',
          {
            arrowParens: 'always', //avoid
            bracketSpacing: true, // false
            singleQuote: true,
            trailingComma: 'es5',
            endOfLine: 'auto',
            semi: true, // true
          },
        ],
        'import/order': [
          'error',
          {
            groups: ['external', 'builtin', 'internal', 'parent', 'sibling'],
            pathGroups: [
              {
                pattern: 'react+(|-native)',
                group: 'external',
                position: 'before',
              },
              {
                pattern: './',
                group: 'internal',
                position: 'before',
              },
              {
                pattern: '@+(components|screens)',
                group: 'internal',
                position: 'before',
              },
            ],
            pathGroupsExcludedImportTypes: ['react+(|-native)'],
            alphabetize: {
              order: 'asc',
              caseInsensitive: true,
            },
            'newlines-between': 'always',
          },
        ],
      },
    },
  ],
}
