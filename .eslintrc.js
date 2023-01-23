
module.exports = {
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect",
    },
    // Allows us to lint absolute imports within codebase
    "import/resolver": {
      "node": {
        "moduleDirectory": ["node_modules", "src/"]
      }
    }
  },
  env: {
    browser: true,
    jest: true
  },
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/jsx-runtime",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:jsx-a11y/recommended",
    "plugin:eslint-comments/recommended",
    "plugin:prettier/recommended",
    "prettier",
  ],
  "plugins": ["react-hooks"],
  "rules": {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "radix": 0,
    "no-restricted-syntax": 0,
    "no-await-in-loop": 0,
    "no-unused-vars": 2,
    "no-console": 0,
    "consistent-return": 0,
    "no-param-reassign": [2, { "props": false }],
    "no-return-assign": [2, "except-parens"],
    "no-use-before-define": 0,
    "import/prefer-default-export": 0,
    "import/no-cycle": 0,
    "react/no-array-index-key": 0,
    "react/forbid-prop-types": 0,
    "react/jsx-no-undef": 0,
    "react/prop-types": [2, { "skipUndeclared": true }],
    "react/jsx-fragments": [2, "element"],
    "react/state-in-constructor": 0,
    "react/jsx-props-no-spreading": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "react/jsx-uses-react": 0,
    "react/react-in-jsx-scope": 0
  },
}