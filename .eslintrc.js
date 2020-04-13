module.exports = {
  root: true,
  env: {
    node: true,
    browser: true
  },
  extends: [
    "plugin:vue/recommended",
    "eslint:recommended",
    "prettier/vue",
    "plugin:prettier/recommended"
  ],
  rules: {
    "vue/component-name-in-template-casing": ["error", "PascalCase"],
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "arrow-parens": 0,
    "generator-star-spacing": 0,
    "prettier/prettier": ["error", { singleQuote: true }],
    quotes: ["error", "single"],
    semi: ["error", "always"],
    indent: ["error", 2],
    "no-multi-spaces": ["error"]
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
