import { Button } from "../src/button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Components/Button",
	component: Button,
	args: {
		children: "Button",
	},
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
		layout: "centered",
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
	tags: ["autodocs"],
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: "color" },
	},
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
	args: {
		variant: "primary",
		children: "Button",
	},
};
export const Secondary = {
	args: {
		variant: "secondary",
		children: "Button",
	},
};
export const Ghost = {
	args: {
		variant: "ghost",
		children: "Button",
	},
};

/** -----------------------------------------------------------------------------
 * COLOR OVERLAY
 * ------------------------------------------------------------------------------- */

export const ColorOverlayRed = {
	args: {
		theme: "red",
	},
};
export const ColorOverlayBlue = {
	args: {
		theme: "blue",
	},
};
export const ColorOverlayGreen = {
	args: {
		theme: "green",
	},
};
export const ColorOverlayGrey = {
	args: {
		theme: "grey",
	},
};
export const ColorOverlayAmber = {
	args: {
		theme: "amber",
	},
};

/** -----------------------------------------------------------------------------
 * SIZE
 * ------------------------------------------------------------------------------- */

export const Small = {
	args: {
		size: "sm",
		children: "Button",
	},
};
export const Large = {
	args: {
		size: "lg",
		children: "Button",
	},
};
export const Square = {
	args: {
		size: "square",
		children: "⌘",
	},
};
