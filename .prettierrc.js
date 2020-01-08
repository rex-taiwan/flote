module.exports = {
  singleQuote: true,
  tabWidth: 2,
  printWidth: 80,
  trailingComma: 'all',
  overrides: [
    {
      files: ['package.json', '*.scss'],
      options: {
        tabWidth: 2,
      },
    },
    {
      files: ['data.ts'],
      options: {
        printWidth: 999,
      },
    },
  ],
};
