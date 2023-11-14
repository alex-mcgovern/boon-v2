import {
	FloatingArrow,
	FloatingPortal,
	useMergeRefs,
} from "@floating-ui/react";
import clsx from "clsx";
import * as React from "react";
import { useTooltipContext } from "../_lib/useTooltipContext";
import { ARROW_HEIGHT, ARROW_WIDTH } from "../constants";
import styles from "./TooltipContent.module.css";
/**
 * Content for a tooltip.
 */
export const TooltipContent = React.forwardRef<
	HTMLDivElement,
	React.HTMLProps<HTMLDivElement>
>(({ style, ...props }, propRef) => {
	const context = useTooltipContext();

	const ref = useMergeRefs([context.refs.setFloating, propRef]);

	if (!context.open) {
		return null;
	}

	return (
		<FloatingPortal>
			<div
				ref={ref}
				style={{
					...context.floatingStyles,
					...style,
					zIndex: 1000, // <- This is dumb
				}}
				{...context.getFloatingProps(props)}
			>
				<div className={clsx(styles.tooltipText, "animateFadeIn")}>
					{props.children}

					<FloatingArrow
						context={context.context}
						height={ARROW_HEIGHT}
						ref={context.arrowRef}
						width={ARROW_WIDTH}
					/>
				</div>
			</div>
		</FloatingPortal>
	);
});
