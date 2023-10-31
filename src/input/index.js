// @ts-check

// @ts-ignore
import { jsx } from "react/jsx-runtime";

/**
 * A customizable input component that can render a left and/or right slot beside its children.
 *
 * @param {Object} props
 * @property {React.ReactNode} [props.slotLeft] - React node to render left of the input's children
 * @property {React.ReactNode} [props.slotRight] - React node to render right of the input's children
 * @property {'red' | 'green' | 'default' | 'amber' | 'blue' | 'grey'} [theme] - The color theme to apply to the input
 */
export function Input(props) {
	const { theme, ...rest } = props;

	const cn = [theme ? `theme__${theme}` : ""].filter(Boolean).join(" ");

	return jsx("input", {
		className: cn,
		...rest,
	});
}
