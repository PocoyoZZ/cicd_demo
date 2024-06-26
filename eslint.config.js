import globals from "globals";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";


export default [
  {languageOptions: { globals: {...globals.browser, ...globals.node} }},
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],
];