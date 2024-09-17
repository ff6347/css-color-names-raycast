module.exports = {
  printWidth: 80,
  singleQuote: false,
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  useTabs: true,
  printWidth: 80,
  overrides: [
    {
      files: ["*.yml", "*.yaml"],
      options: {
        useTabs: false,
      },
    },
  ],
};
