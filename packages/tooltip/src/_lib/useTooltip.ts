import {
	arrow,
	autoUpdate,
	flip,
	offset,
	shift,
	useDismiss,
	useFloating,
	useFocus,
	useHover,
	useInteractions,
	useRole,
} from "@floating-ui/react";
import * as React from "react";
import { ARROW_HEIGHT } from "../constants";
import { TooltipOptions } from "../types";

/**
 * Hook for managing the state of a tooltip.
 */
export function useTooltip({
	enabled = true,
	initialOpen = false,
	onOpenChange: setControlledOpen,
	open: controlledOpen,
	placement = "top",
}: TooltipOptions = {}) {
	const [uncontrolledOpen, setUncontrolledOpen] = React.useState(initialOpen);

	const open = controlledOpen ?? uncontrolledOpen;

	const setOpen = setControlledOpen ?? setUncontrolledOpen;

	const arrowRef = React.useRef(null);

	const data = useFloating({
		middleware: [
			offset(5),
			flip({
				crossAxis: placement.includes("-"),
				fallbackAxisSideDirection: "start",
				padding: 5,
			}),
			shift({ padding: 5 }),
			offset(ARROW_HEIGHT),

			arrow({ element: arrowRef }),
		],
		onOpenChange: setOpen,
		open,
		placement,
		whileElementsMounted: autoUpdate,
	});

	const { context } = data;

	const hover = useHover(context, {
		enabled: enabled && controlledOpen == null,
		move: false,
	});

	const focus = useFocus(context, {
		enabled: enabled && controlledOpen == null,
	});

	const dismiss = useDismiss(context);

	const role = useRole(context, { role: "tooltip" });

	const interactions = useInteractions([hover, focus, dismiss, role]);

	return React.useMemo(() => {
		return {
			arrowRef,
			open,
			setOpen,
			...interactions,
			...data,
		};
	}, [open, setOpen, interactions, data, arrowRef]);
}
