/* eslint-disable @typescript-eslint/no-require-imports */
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [
    require("postcss-nested"),
    require("postcss-combine-duplicated-selectors")({
      removeDuplicatedProperties: true,
      removeDuplicatedValues: true,
    }),
    require("autoprefixer"),
    require("cssnano")({
      preset: "default",
    }),
  ],
};

module.exports = config;
