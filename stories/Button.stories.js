import { Button } from "../components/button/Button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Components/Button",
	component: Button,
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
export const Danger = {
	args: {
		variant: "danger",
		children: "Button",
	},
};
export const Small = {
	args: {
		size: "small",
		children: "Button",
	},
};
export const Large = {
	args: {
		size: "large",
		children: "Button",
	},
};