import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
    { files: ["**/*.{js,mjs,cjs,ts}"] },
    {
        files: ["**/*.{js,mjs,cjs,ts}"],
        languageOptions: {
            globals: globals.browser
        }
    },
    {
        files: ["**/*.{js,mjs,cjs,ts}"],
        plugins: { js },
        extends: ["js/recommended"],
        rules: {
            // Indentação: 2 espaços
            "indent": ["error", 4],

            // Ponto e vírgula obrigatório no final das declarações
            "semi": ["error", "always"],

            // Uso de aspas duplas
            "quotes": ["error", "double"],

            // Regras de espaçamento
            "no-trailing-spaces": "error",
            "space-before-blocks": ["error", "always"],
            "space-before-function-paren": ["error", { "anonymous": "always", "named": "never", "asyncArrow": "always" }],
            "space-in-parens": ["error", "never"],
            "space-infix-ops": "error",
            "object-curly-spacing": ["error", "always"],
            "comma-spacing": ["error", { "before": false, "after": true }],
            "key-spacing": ["error", { "beforeColon": false, "afterColon": true }],

            // Final de linha consistente
            "eol-last": ["error", "always"],

            "@typescript-eslint/no-empty-object-type": ["error", { allowInGenericTypeArguments: false }],
        }
    },
    tseslint.configs.recommended,
]);
