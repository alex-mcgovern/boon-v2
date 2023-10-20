// import PropTypes from 'prop-types';
// import styles from './Button.module.css';

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
		...rest
	} = props;

	// const cn = [
	// 	styles.btn,
	// 	variant && styles[variant],
	// 	size && styles[size],
	// ].join(" ");

	// const slotLeftClasses = [
	//     styles.slotLeft,
	//     variant && styles[`${variant}SlotLeft`],
	//     size && styles[`${size}SlotLeft`],
	// ].join(' ');

	// const slotRightClasses = [
	//     styles.slotRight,
	//     variant && styles[`${variant}SlotRight`],
	//     size && styles[`${size}SlotRight`],
	// ].join(' ');

	return <button type="button">{children}</button>;
}

// Button.propTypes = {
//     slotLeft: PropTypes.node,
//     slotRight: PropTypes.node,
//     variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
//     size: PropTypes.oneOf(['small', 'medium', 'large']),
//     ...Button.propTypes,
// };
