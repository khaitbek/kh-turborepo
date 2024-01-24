module.exports = {
  root: true,
  extends: ["custom", "plugin:@tanstack/eslint-plugin-query/recommended"],
  rules: {
    "@tanstack/query/exhaustive-deps": "error",
    "@tanstack/query/prefer-query-object-syntax": "error",
  },
  plugins: ["@tanstack/query"],
};
