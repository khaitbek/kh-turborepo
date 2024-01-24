module.exports = {
  root: true,
  extends: [
    "custom",
    "plugin:prettier/recommended"
  ],
  rules: {
    "prettier/prettier": "error",
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off"
  },
  plugins: [
    "prettier"
  ]
};
