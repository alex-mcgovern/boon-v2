import { Button } from "../packages/button/src/index";

export default {
	title: "Components/Button",
	component: Button,
	args: {
		children: "Button",
	},
	parameters: {
		// layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		backgroundColor: { control: "color" },
	},
};

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
export const ThemeAmber = {
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
		size: "sq",
		children: "⌘",
	},
};

/** -----------------------------------------------------------------------------
 * SIZE
 * ------------------------------------------------------------------------------- */

export const Disabled = {
	args: {
		disabled: true,
		children: "Button",
	},
};
