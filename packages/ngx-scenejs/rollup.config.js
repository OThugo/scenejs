const builder = require("@daybrush/builder");

const defaultOptions = {
  input: "./src/ngx-scenejs/index.ts",
  tsconfig: "tsconfig.build.json",
  sourcemap: true,
};
export default builder([
  {
    ...defaultOptions,
    format: "es",
    output: "./dist/scene.esm.js",
    exports: "named",
  },
  {
    ...defaultOptions,
    format: "cjs",
    output: "./dist/scene.cjs.js",
    exports: "named",
  },
]);
