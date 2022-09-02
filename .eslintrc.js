module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  env: {
    browser: true,
    jest: true,
  },
  plugins: ["@typescript-eslint", "import"],
  extends: [
    "airbnb",
    "react-app",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
  ],
  rules: {
    "no-console": "off",  //["error", { allow: ["info", "warn", "error"] }],
    "no-plusplus": 0,
    "class-methods-use-this": 0,
    "react/jsx-filename-extension": 0,
    "react/jsx-indent": 0,
    "react/jsx-one-expression-per-line": 0,
    "react/jsx-wrap-multilines": 0,
    "react/no-danger": "error",
    "react/prefer-stateless-function": 0,
    "react/require-default-props": 0,
    "import/order": "error",
    "import/prefer-default-export": 0,
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "import/extensions": 0,
    "@typescript-eslint/camelcase": 0,
    "@typescript-eslint/indent": 0,
    "@typescript-eslint/member-delimiter-style": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/explicit-member-accessibility": ["error", { accessibility: "no-public" }],
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-empty-function": 0,
    "jsx-a11y/label-has-for": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    "no-underscore-dangle": 0,
    "react/no-unescaped-entities": ["error", { forbid: [">", "}"] }],
    "no-param-reassign": 0
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "react/prop-types": 0,
      },
    },
  ],
  settings: {
    "import/resolver": {
      typescript: {},
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    },
  },
};
