import { useMergeRefs } from "@floating-ui/react";
import * as React from "react";
import { useTooltipContext } from "../_lib/useTooltipContext";

/**
 * Trigger for a tooltip.
 */
export const TooltipTrigger = React.forwardRef<
	HTMLElement,
	React.HTMLProps<HTMLElement> & { asChild?: boolean }
>(({ asChild = false, children, ...props }, propRef) => {
	const context = useTooltipContext();
	// biome-ignore lint/suspicious/noExplicitAny: required to be this way
	const childrenRef = (children as any).ref;

	const ref = useMergeRefs([context.refs.setReference, propRef, childrenRef]);

	if (asChild && React.isValidElement(children)) {
		return React.cloneElement(
			children,
			context.getReferenceProps({
				ref,
				...props,
				...children.props,
				"data-state": context.open ? "open" : "closed",
			}),
		);
	}

	return (
		<button
			data-state={context.open ? "open" : "closed"}
			ref={ref}
			type="button"
			{...context.getReferenceProps(props)}
		>
			{children}
		</button>
	);
});
