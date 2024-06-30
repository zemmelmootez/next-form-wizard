const { register } = require("tsconfig-paths");

register({
  baseUrl: "./src",
  paths: {
    "@components/*": ["./components/*"],
    "@hooks/*": ["./hooks/*"],
  },
});
