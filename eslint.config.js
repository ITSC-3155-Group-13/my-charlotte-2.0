import js from "@eslint/js";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
	globalIgnores([
		"dist",
		"**/dist/**",
		"**/build/**",
		"node_modules",
		"**/components/ui/**", // ignore shadcn; things in this folder shouldn't be edited manually
	]),

	// Rules for all sub-repositories
	{
		files: ["**/*.{ts,tsx}"],
		extends: [js.configs.recommended, tseslint.configs.recommended],
		rules: {
			"@typescript-eslint/no-unused-vars": [
				"error",
				{
					argsIgnorePattern: "^_",
					varsIgnorePattern: "^_",
					caughtErrorsIgnorePattern: "^_",
					ignoreRestSiblings: true,
				},
			],
		},
		languageOptions: {
			ecmaVersion: "latest",
			globals: { ...globals.browser, ...globals.node },
		},
	},

	// React / Vite-specific rules
	{
		files: ["app/**/*.{ts,tsx}"],
		extends: [reactHooks.configs.flat.recommended, reactRefresh.configs.vite],
		rules: {
			"react-refresh/only-export-components": "off",
		},
	},
]);
