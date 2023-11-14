import { Meta, StoryObj } from "@storybook/react";
import { faShapes } from "@fortawesome/pro-solid-svg-icons/faShapes";

import { FieldActionButton } from "@boondoggle.design/field-action-button";
import { Icon } from "@boondoggle.design/icon";
import "@boondoggle.design/tooltip/css";
import "@boondoggle.design/field-action-button/css";
import "@boondoggle.design/icon/css";

const meta = {
	args: {
		slot: <Icon icon={faShapes} />,
		name: "field_action_button",
	},
	component: FieldActionButton,
	title: "Components/FieldActionButton",
} satisfies Meta<typeof FieldActionButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};

export const WithTooltip: Story = {
	args: {
		strTooltip: "My tooltip",
	},
};
