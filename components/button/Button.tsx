import * as React from "react";
import styles from "./Button.module.css";

/**
 * A customizable button component that can render a left and/or right slot beside its children.
 */
export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement> & {
	slotLeft?: React.ReactNode,
	slotRight?: React.ReactNode,
	variant?: 'primary' | 'secondary',
	size?: 'small' | 'large',
	type?: 'button' | 'submit'
}) {
	const {
		slotLeft,
		slotRight,
		children,
		variant = "primary",
		size,
		type,
		...rest
	} = props;

	const cn = [
		styles.btn,
		variant && styles[variant],
		size && styles[size],
	].join(" ");

	const slotLeftClasses = [
		styles.slot,
		styles.slotLeft,
	].join(" ");

	const slotRightClasses = [
		styles.slot,
		styles.slotRight,
	].join(" ");

	return (
		<button type={type} className={cn} {...rest}>
			{slotLeft && <div className={slotLeftClasses}>{slotLeft}</div>}
			{children}
			{slotRight && <div className={slotRightClasses}>{slotRight}</div>}
		</button>
	);
}

