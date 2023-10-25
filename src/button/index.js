import { jsx } from "react/jsx-runtime";

/**
 * @typedef {import('react').ButtonHTMLAttributes<HTMLButtonElement>} ButtonProps
 * @property {React.ReactNode} [slotLeft] - React node to render left of the button's children
 * @property {React.ReactNode} [slotRight] - React node to render right of the button's children
 * @property {'primary' | 'secondary' | 'tertiary'} [variant] - The variant of the button
 * @property {'small' | 'medium' | 'large'} [size] - The size of the button
 * @property {'button' | 'submit'} [type] - The type of the button
 */

/**
 * A customizable button component that can render a left and/or right slot beside its children.
 *
 * @param {ButtonProps} props
 */
export function Button(props) {
	const {
		slotLeft,
		slotRight,
		children,
		variant = "primary",
		size,
		type,
		...rest
	} = props;

	return jsx("button", {
		type,
		children,
		// className: "boon btn",
		...rest,
	});
}
