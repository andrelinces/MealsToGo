export default [
  {
    files: ["src/**/*.{js,jsx,ts,tsx}"], // Specify files to lint
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest", // Use the latest ECMAScript version
        sourceType: "module",
      },
    },
    rules: {
      "no-console": "warn", // Example rule
    },
  },
];