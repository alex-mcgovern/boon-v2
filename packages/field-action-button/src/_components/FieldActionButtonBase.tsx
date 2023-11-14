import clsx from "clsx";
import * as React from "react";
import styles from "./FieldActionButtonBase.module.css";

export const FieldActionButtonBase = React.forwardRef<
	HTMLButtonElement,
	{
		/**
		 * Custom CSS class to apply to the button.
		 */
		className: string | undefined;

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
		onClick: React.MouseEventHandler<HTMLButtonElement>;

		/**
		 * The slot to render on the button.
		 */
		slot: React.ReactNode;
	}
>(({ className, name, onClick, slot, ...rest }, ref) => {
	return (
		<button
			className={clsx(styles.fieldActionButtonBase, className)}
			name={name}
			onClick={onClick}
			ref={ref}
			type="button"
			{...rest}
		>
			{slot}
		</button>
	);
});
