import { mergeConfig } from "vite";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
	stories: [
		"../stories/**/*.mdx",
		"../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
	],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-onboarding",
		"@storybook/addon-interactions",
	],
	framework: {
		name: "@storybook/react-vite",
	},
	docs: {
		autodocs: "tag",
	},
	async viteFinal(config) {
		// Merge custom configuration into the default config
		return mergeConfig(config, {
			plugins: [vanillaExtractPlugin()],
		});
	},
};
export default config;
