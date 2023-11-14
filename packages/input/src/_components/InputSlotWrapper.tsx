import {
	WithSize,
	WithSlots,
	WithStateDisabled,
} from "@boondoggle.design/types";
import clsx from "clsx";
import * as React from "react";
import styles from "./InputSlotWrapper.module.css";

/**
 * Renders a wrapper around the input and its slots.
 */
export const InputSlotWrapper = React.forwardRef<
	HTMLDivElement,
	WithSlots &
		WithSize &
		WithStateDisabled & {
			/**
			 * The children to render inside the wrapper.
			 */
			children: React.ReactNode;

			/**
			 * Any additional CSS classes to apply to the wrapper.
			 */
			className: string | undefined;

			/**
			 * Method to focus the input element.
			 */
			focus: () => void;

			/**
			 * Whether the input should have a border.
			 */
			hasBorder: boolean | undefined;

			/**
			 * Whether the input is invalid.
			 */
			invalid: boolean | undefined;

			/**
			 * Method to call the input elements onClick handler.
			 */
			onClick: React.MouseEventHandler<HTMLInputElement> | undefined;
		}
>(
	(
		{
			children,
			className,
			disabled,
			focus,
			hasBorder,
			invalid,
			onClick,
			size,
			slotLeft,
			slotRight,
		},
		ref,
	) => {
		const handleClick = React.useCallback(
			(e: React.MouseEvent<HTMLElement>) => {
				focus();
				onClick?.(e as React.MouseEvent<HTMLInputElement>);
				e.stopPropagation();
			},
			[focus, onClick],
		);

		return (
			// biome-ignore lint/a11y/useKeyWithClickEvents: This is a click event that is not a button.
			<div
				aria-disabled={disabled}
				className={clsx(
					styles.slotWrapper,

					className,
					size,
					{
						[styles.sm]: size === "sm",
						[styles.md]: size === "md",
						[styles.lg]: size === "lg",
						[styles.hasSlotLeft]: !!slotLeft,
						[styles.hasSlotRight]: !!slotRight,
						// [styles.hasBorder]: hasBorder,
						a11yError: invalid,
					},
				)}
				onClick={handleClick}
				ref={ref}
			>
				{slotLeft}
				{children}
				{slotRight}
			</div>
		);
	},
);
