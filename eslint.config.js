// eslint.config.js

module.exports = [
  {
    files: ['*.js', '*.jsx', '*.ts', '*.tsx'],  // Apply to these file types
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',  // Use the latest ECMAScript version
        sourceType: 'module',   // Use ECMAScript modules
      },
    },
    rules: {
      'semi': ['error', 'always'],  // Ensure semicolons at the end of statements
      'quotes': ['error', 'single'], // Enforce single quotes for strings
      // Add more ESLint rules as needed
    },
  },
];
