import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@boondoggle.design/tooltip";
import * as React from "react";
import { FieldActionButtonBase } from "./FieldActionButtonBase";
/**
 * A configurable button for use within a field.
 */
export const FieldActionButton = React.forwardRef<
	HTMLButtonElement,
	{
		/**
		 * Custom CSS class to apply to the button.
		 */
		className?: string;

		/**
		 * Whether the button is disabled.
		 */
		disabled?: boolean;

		/**
		 * The name of the button.
		 */
		name: string;

		/**
		 * The function to call when the button is clicked.
		 */
		onClick?: React.MouseEventHandler<HTMLButtonElement>;

		/**
		 * The slot to render on the button.
		 */
		slot: React.ReactNode;

		/**
		 * The tooltip text to display when the button is hovered.
		 */
		strTooltip?: string;
	}
>(({ className, disabled, name, onClick, slot, strTooltip, ...rest }, ref) => {
	const handleClick = React.useCallback(
		(e: React.MouseEvent<HTMLButtonElement>) => {
			onClick?.(e);

			// Prevent the click event from bubbling up to the parent element.
			e.stopPropagation();
		},
		[onClick],
	);

	if (!strTooltip) {
		return (
			<FieldActionButtonBase
				className={className}
				disabled={disabled}
				name={name}
				onClick={handleClick}
				ref={ref}
				slot={slot}
				{...rest}
			/>
		);
	}

	return (
		<Tooltip placement="top">
			<TooltipTrigger asChild>
				<FieldActionButtonBase
					className={className}
					disabled={disabled}
					name={name}
					onClick={handleClick}
					ref={ref}
					slot={slot}
					{...rest}
				/>
			</TooltipTrigger>
			<TooltipContent>{strTooltip}</TooltipContent>
		</Tooltip>
	);
});
