import { Input } from "../src/input";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Components/Input",
	component: Input,
	args: {},
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
		layout: "centered",
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
	tags: ["autodocs"],
};

/** -----------------------------------------------------------------------------
 * COLOR OVERLAY
 * ------------------------------------------------------------------------------- */

export const ThemeRed = {
	args: {
		theme: "red",
	},
};
export const ThemeBlue = {
	args: {
		theme: "blue",
	},
};
export const ThemeGreen = {
	args: {
		theme: "green",
	},
};
export const ThemeGrey = {
	args: {
		theme: "grey",
	},
};
export const ThemeAmber = {
	args: {
		theme: "amber",
	},
};

export const Placeholder = {
	args: {
		placeholder: "Placeholder",
	},
};

export const ReadOnly = {
	args: {
		readOnly: true,
	},
};

export const Disabled = {
	args: {
		disabled: true,
	},
};
