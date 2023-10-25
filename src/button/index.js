// @ts-check

import * as React from "react";

/**
 * A customizable button component that can render a left and/or right slot beside its children.
 *
 * @param {Object} props
 * @property {React.ReactNode} [props.slotLeft] - React node to render left of the button's children
 * @property {React.ReactNode} [props.slotRight] - React node to render right of the button's children
 * @property {'primary' | 'secondary' | 'ghost'} [props.variant] - The variant of the button
 * @property {'sm' | 'lg' | 'square'} [props.size] - The size of the button
 * @property {'button' | 'submit'} [props.type] - The type of the button
 * @property {'red' | 'green' | 'default' | 'amber' | 'blue' | 'grey'} [theme] - The color theme to apply to the button
 */
export function Button(props) {
	const { children, theme, variant = "primary", size, type, ...rest } = props;

	const cn = [variant, size, theme ? `theme__${theme}` : ""]
		.filter(Boolean)
		.join(" ");

	return (
		<button className={cn} type={type} {...rest}>
			{children}
		</button>
	);
}
