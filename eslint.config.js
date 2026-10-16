//  @ts-check

import { tanstackConfig } from "@tanstack/eslint-config";
import tseslint from "typescript-eslint";

export default [
  ...tanstackConfig,
  {
    files: ["**/*.js"],
    ...tseslint.configs.disableTypeChecked,
  },
  {
    rules: {
      "import/order": [
        "error", {
          groups: ["builtin", "external", "internal"],
          pathGroups: [
            {
              pattern: "react",
              group: "external",
              position: "before"
            }
          ],
          pathGroupsExcludedImportTypes: ["react"],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true
          }
        }
      ],
      semi: ["error", "always"],
      "eol-last": ["error", "always"],
      "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 1 }],
      "no-trailing-spaces": "error",
      "no-multi-spaces": "error",
      "no-mixed-spaces-and-tabs": "error",
      quotes: ["error", "double"],
      "@typescript-eslint/no-empty-object-type": "off",
      "react-hooks/exhaustive-deps": "off"
    },
  },
];
