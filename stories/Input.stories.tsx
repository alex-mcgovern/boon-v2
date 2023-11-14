import { faShapes } from "@fortawesome/pro-solid-svg-icons/faShapes";
import { Input } from "../packages/input/src/_components/Input";
import { Icon } from "../packages/icon/src";
import { Button } from "../packages/button/src";

export default {
	title: "Components/Input",
	component: Input,
	args: {
		// children: "Input",
	},
	parameters: {
		// layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		backgroundColor: { control: "color" },
	},
};

export const Default = {};

/** -----------------------------------------------------------------------------
 * SLOTS
 * ------------------------------------------------------------------------------- */

export const With1SlotRight = {
	args: {
		slotRight: <Icon icon={faShapes} />,
	},
};
export const With2SlotRight = {
	args: {
		slotRight: (
			<>
				<Icon icon={faShapes} />
				<Icon icon={faShapes} />
			</>
		),
	},
};

export const With1SlotLeft = {
	args: {
		slotLeft: <Icon icon={faShapes} />,
	},
};
export const With2SlotLeft = {
	args: {
		slotLeft: (
			<>
				<Icon icon={faShapes} />
				<Icon icon={faShapes} />
			</>
		),
	},
};

/** -----------------------------------------------------------------------------
 * ADDONS
 * ------------------------------------------------------------------------------- */

export const With1StaticAddonRight = {
	args: {
		addonRight: (
			<div>
				<Icon icon={faShapes} />
			</div>
		),
	},
};
export const With1InteractiveAddonRight = {
	args: {
		addonRight: <Button variant="primary">Reset</Button>,
	},
};

export const With2AddonRight = {
	args: {
		addonRight: (
			<>
				<Icon icon={faShapes} />
				<Icon icon={faShapes} />
			</>
		),
	},
};
export const With1TextAddonLeft = {
	args: {
		addonLeft: "USD",
	},
};
export const With1StaticAddonLeft = {
	args: {
		addonLeft: (
			<div>
				<Icon icon={faShapes} />
			</div>
		),
	},
};
export const With1InteractiveAddonLeft = {
	args: {
		addonLeft: <Button variant="primary">Reset</Button>,
	},
};
export const With2AddonLeft = {
	args: {
		addonLeft: (
			<>
				<Icon icon={faShapes} />
				<Icon icon={faShapes} />
			</>
		),
	},
};
