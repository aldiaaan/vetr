module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "prettier"],
  rules: {
    "react/prop-types": 0,
    "react/jsx-max-depth": [2, { max: 12 }],
    "react/jsx-filename-extension": [
      2,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    "prettier/prettier": [
      2,
      {
        printWidth: 120,
        arrowParens: "avoid",
        bracketSameLine: true,
        bracketSpacing: false,
        singleQuote: true,
        trailingComma: "all",
        endOfLine: "auto",
      },
    ],
  },
};
