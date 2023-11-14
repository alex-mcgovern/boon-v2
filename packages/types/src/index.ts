/** -----------------------------------------------------------------------------
 * THEME
 * ------------------------------------------------------------------------------- */
export type Theme = "blue" | "green" | "red" | "default" | "amber";

export type WithTheme = {
	/**
	 * Allows setting a color to indicate semantic meaning associated with an action. Redefines color variables via CSS custom properties.
	 */
	theme?: Theme;
};

/** -----------------------------------------------------------------------------
 * FIELD PROPS
 * ------------------------------------------------------------------------------- */

export type WithDescription = {
	/**
	 * Description shown under the field (when there is no error message).
	 */
	description?: React.ReactNode;
};

/** -----------------------------------------------------------------------------
 * COPY FUNCTIONALITY
 * ------------------------------------------------------------------------------- */

type BaseIsCopyable = {
	/**
	 * Whether the input is copyable or not.
	 */
	isCopyable?: boolean;

	/**
	 * Whether the input is read-only or not.
	 */
	readOnly?: boolean;

	/**
	 * The tooltip text to display when the button is hovered after copying.
	 */
	strCopied?: string;

	/**
	 * The tooltip text to display when the button is hovered before copying.
	 */
	strCopy?: string;
};

type IsCopyable = BaseIsCopyable & {
	isCopyable: true;
	readOnly: true;
	strCopied: string;
	strCopy: string;
};

type IsNotCopyable = BaseIsCopyable & {
	isCopyable?: never;
	readOnly?: boolean;
	strCopied?: never;
	strCopy?: never;
};

export type WithOptionalIsCopyable = IsCopyable | IsNotCopyable;

export const getOptionalIsCopyableProps = ({
	isCopyable,
	readOnly,
	strCopied,
	strCopy,
}: BaseIsCopyable): WithOptionalIsCopyable => {
	return readOnly && isCopyable && strCopy && strCopied
		? { isCopyable, readOnly, strCopied, strCopy }
		: {
				isCopyable: undefined,
				readOnly,
				strCopied: undefined,
				strCopy: undefined,
		  };
};

/** -----------------------------------------------------------------------------
 * TOGGLE VISIBILITY FUNCTIONALITY
 * ------------------------------------------------------------------------------- */

type BaseIsVisibilityToggleable = {
	/**
	 * Whether the input field value visibility can be toggled or not.
	 */
	isVisibilityToggleable?: boolean;

	/**
	 * Whether the input field value is visible or not.
	 */
	isVisible?: boolean;

	/**
	 * The tooltip text to display when the button is hovered when value is hidden.
	 */
	strHide?: string;

	/**
	 * The tooltip text to display when the button is hovered when value is visible.
	 */
	strShow?: string;
};

type WithIsVisibilityToggleable = BaseIsVisibilityToggleable & {
	isVisibilityToggleable: true;
	isVisible?: boolean;
	strHide: string;
	strShow: string;
};

type WithoutIsVisibilityToggleable = BaseIsVisibilityToggleable & {
	isVisibilityToggleable?: never;
	isVisible?: never;
	strHide?: never;
	strShow?: never;
};

export type WithOptionalIsVisibilityToggleable =
	| WithIsVisibilityToggleable
	| WithoutIsVisibilityToggleable;

/**
 * Validates that the correct required props are present to label
 * an element and forwards them to a component.
 */
export const getOptionalIsVisibilityToggleableProps = ({
	isVisibilityToggleable,
	isVisible,
	strHide,
	strShow,
}: BaseIsVisibilityToggleable): WithOptionalIsVisibilityToggleable => {
	return isVisibilityToggleable && strShow && strHide
		? { isVisibilityToggleable, isVisible, strHide, strShow }
		: {};
};

/** -----------------------------------------------------------------------------
 * SIZE
 * ------------------------------------------------------------------------------- */

export type Size = "sm" | "md" | "lg";

export type WithSize = {
	/**
	 * Consistent size option shared across multiple components.
	 */
	size?: Size;
};

/** -----------------------------------------------------------------------------
 * SLOTS
 * ------------------------------------------------------------------------------- */

export type WithSlots = {
	/**
	 * React node(s) rendered on the left-hand side.
	 */
	slotLeft?: React.ReactNode;

	/**
	 * React node(s) rendered on the right-hand side.
	 */
	slotRight?: React.ReactNode;
};

/** -----------------------------------------------------------------------------
 * ELEMENT STATE
 * ------------------------------------------------------------------------------- */

export type WithStateDisabled = {
	/**
	 * Whether the component is disabled.
	 */
	disabled?: boolean;
};

export type WithStateInvalid = {
	/**
	 * Message shown when field fails validation.
	 */
	errorMessage?: React.ReactNode;

	/**
	 * Whether the value of the field fails validation.
	 */
	invalid?: boolean;
};

/** -----------------------------------------------------------------------------
 * PLACEHOLDER
 * ------------------------------------------------------------------------------- */

export type WithOptionalPlaceholder = {
	/**
	 * Placeholder shown on empty field.
	 */
	placeholder?: string;
};

/** -----------------------------------------------------------------------------
 * READONLY
 * ------------------------------------------------------------------------------- */

export type WithReadOnly = {
	/**
	 * Whether the input is read-only or not.
	 */
	readOnly?: boolean;
};

/** -----------------------------------------------------------------------------
 * LABEL
 * ------------------------------------------------------------------------------- */

type BaseWithLabel = {
	/**
	 * Whether the label is visible or not.
	 */
	isLabelVisible?: boolean;

	/**
	 * Text for HTML label element
	 */
	label?: string;

	/**
	 * Props for FieldLabel component
	 */
	// labelProps?: Omit<FieldLabelProps, "label"> | undefined;

	/**
	 * Optional tooltip for label
	 */
	labelTooltip?: string;

	/**
	 * HTML element id
	 */
	name: string;
};

type WithLabel = BaseWithLabel & {
	isLabelVisible?: boolean;

	label: string;

	// labelProps?: Omit<FieldLabelProps, "label"> | undefined;

	labelTooltip?: string;

	name: string;
};

type WithoutLabel = BaseWithLabel & {
	isLabelVisible?: never;

	label?: never;

	labelProps?: never;

	labelTooltip?: never;

	name: string;
};

/* eslint-enable jsdoc/require-jsdoc */

export type WithOptionalLabel = WithLabel | WithoutLabel;

/**
 * Validates that the correct required props are present to label
 * an element and forwards them to a component.
 */
export const getOptionalLabelProps = ({
	isLabelVisible,
	label,
	// labelProps,
	labelTooltip,
	name,
}: BaseWithLabel): WithOptionalLabel => {
	return typeof label !== "undefined" && typeof name !== "undefined"
		? {
				isLabelVisible,
				label,
				// labelProps,
				labelTooltip,
				name,
		  }
		: { name };
};
