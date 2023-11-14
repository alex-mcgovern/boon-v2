import { Placement } from "@floating-ui/react";

export type TooltipOptions = {
	/**
	 * Whether the tooltip should be enabled.
	 */
	enabled?: boolean;

	/**
	 * Whether the tooltip should be open by default.
	 */
	initialOpen?: boolean;

	/**
	 * Callback for when the tooltip open state changes. Use with `open`.
	 */
	onOpenChange?: (open: boolean) => void;

	/**
	 * Control the open state of the tooltip from outside the component. Use with `onOpenChange`.
	 */
	open?: boolean;

	/**
	 * The placement of the tooltip relative to the trigger.
	 */
	placement?: Placement;
};
