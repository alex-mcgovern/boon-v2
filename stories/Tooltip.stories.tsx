import { faInfoCircle } from "@fortawesome/pro-solid-svg-icons";

import {
	Tooltip as StoryComp,
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "../packages/tooltip/src";
import { Button } from "../packages/button/src";
import { Icon } from "../packages/icon/src";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
	args: {},
	component: StoryComp,
	title: "Components/Tooltip",
} satisfies Meta<typeof StoryComp>;

export default meta;

type Story = StoryObj<typeof meta>;

// @ts-expect-error todo: fix this
export const Default: Story = {
	render: () => {
		return (
			<Tooltip placement="right">
				<TooltipTrigger asChild>
					<button type="button">
						<Icon icon={faInfoCircle} />
					</button>
				</TooltipTrigger>
				<TooltipContent>My tooltip</TooltipContent>
			</Tooltip>
		);
	},
};

// @ts-expect-error todo: fix this
export const DisabledTrigger: Story = {
	render: () => {
		return (
			<Tooltip placement="right">
				<TooltipTrigger asChild>
					<button aria-disabled type="button">
						<Icon icon={faInfoCircle} />
					</button>
				</TooltipTrigger>
				<TooltipContent>My tooltip</TooltipContent>
			</Tooltip>
		);
	},
};

// @ts-expect-error todo: fix this
export const DisabledButtonTrigger: Story = {
	render: () => {
		return (
			<Tooltip placement="right">
				<TooltipTrigger asChild>
					<Button as="button" aria-disabled name="blah" type="button">
						Hello there
					</Button>
				</TooltipTrigger>
				<TooltipContent>My tooltip</TooltipContent>
			</Tooltip>
		);
	},
};
