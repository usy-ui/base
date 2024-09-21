import path from "path";

import alias from "@rollup/plugin-alias";
import commonjs from "@rollup/plugin-commonjs";
import image from "@rollup/plugin-image";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import url from "@rollup/plugin-url";
import svgr from "@svgr/rollup";
import dts from "rollup-plugin-dts";
import filesize from "rollup-plugin-filesize";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { preserveDirectives } from "rollup-plugin-preserve-directives";

const packageJson = require("./package.json");

/** @type {import('rollup').RollupOptions} */
export default [
  {
    input: "index.ts",
    output: {
      dir: packageJson.module,
      format: "esm",
      sourcemap: false,
      preserveModules: true,
    },
    plugins: [
      typescript({
        tsconfig: "./tsconfig.json",
      }),
      alias({
        entries: [
          { find: "@src", replacement: path.resolve(__dirname, "src") },
        ],
      }),
      resolve(),
      commonjs({
        defaultIsModuleExports: false,
      }),
      url(),
      image(),
      svgr(),
      peerDepsExternal(),
      preserveDirectives(),
      terser(),
      filesize(),
    ],
    external: ["react", "react-dom"],
  },
  {
    input: "dist/types/index.d.ts", // collect all *.d.ts and export to root
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts.default()],
    external: [/\.(sass|scss|css)$/],
  },
];
