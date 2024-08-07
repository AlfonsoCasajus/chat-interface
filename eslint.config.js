import pluginVue from "eslint-plugin-vue";
export default [
	...pluginVue.configs["flat/recommended"],
	{
		extends: ["prettier"],
		rules: {}
	}
];
