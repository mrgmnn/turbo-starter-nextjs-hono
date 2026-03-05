import js from "@eslint/js";
import turboPlugin from "eslint-config-turbo/flat";
import tseslint from "typescript-eslint";

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...turboPlugin,
  {
    ignores: ["node_modules/", "dist/", ".next/", ".turbo/"],
  }
);
