// @ts-check

// @ts-expect-error
import { jsx } from "react/jsx-runtime";

export function Button(props) {
	const { children, theme, variant = "primary", size, type, ...rest } = props;

	const cn = [variant, size, theme ? `theme__${theme}` : ""]
		.filter(Boolean)
		.join(" ");

	return jsx("button", {
		type,
		children,
		className: cn,
		...rest,
	});
}
