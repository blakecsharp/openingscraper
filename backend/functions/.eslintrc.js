module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: ["eslint:recommended", "google"],
  rules: {
    quotes: ["error", "double"],
    "object-curly-spacing": 0,
    "max-len": 0,
    "quote-props": 0,
  },
};
