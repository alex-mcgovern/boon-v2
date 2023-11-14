"use client";
import { extractAtomsFromProps } from "@dessert-box/core";
import clsx from "clsx";
import * as React from "react";
import type {
	ChangeEvent,
	ComponentPropsWithoutRef,
	ForwardedRef,
} from "react";

import { FieldActionButtonClear } from "../field_action_button_clear";
import { FieldActionButtonCopy } from "../field_action_button_copy";
import { FieldActionButtonVisibility } from "../field_action_button_visibility";
import { FieldWrapper } from "../field_wrapper";
import {
	InputAddonWrapper,
	WithOptionalInputAddons,
} from "./_components/InputAddonWrapper";
import { InputSlotWrapper } from "./_components/InputSlotWrapper";
import { clearButtonStyle, inputStyles } from "./styles.css";
import { useFieldCopyableState } from "./_lib/useFieldCopyableState";
import { useFieldVisibilityState } from "./_lib/useFieldVisibilityState";
import {
	type WithDescription,
	type WithOptionalIsCopyable,
	type WithOptionalIsVisibilityToggleable,
	type WithOptionalLabel,
	type WithOptionalPlaceholder,
	type WithReadOnly,
	type WithSize,
	type WithSlots,
	type WithStateInvalid,
	type WithTheme,
	getOptionalLabelProps,
} from "@boondoggle.design/types";
import { useForwardRef } from "@boondoggle.design/utils";

export type InputProps = Partial<
	Pick<
		ComponentPropsWithoutRef<"input">,
		| "defaultValue"
		| "value"
		| "autoFocus"
		| "onChange"
		| "onClick"
		| "onFocus"
		| "onMouseOver"
		| "inputMode"
		| "onMouseLeave"
		| "className"
		| "autoComplete"
		| "type"
		| "onBlur"
		| "disabled"
	>
> &
	WithTheme &
	WithDescription &
	WithName &
	WithOptionalInputAddons &
	WithOptionalIsClearable &
	WithOptionalIsCopyable &
	WithOptionalIsVisibilityToggleable &
	WithOptionalLabel &
	WithOptionalPlaceholder &
	WithReadOnly &
	WithSize &
	WithSlots &
	WithStateInvalid & {
		/**
		 * Whether to hide the Lastpass icon or not.
		 */
		hideLastpass?: boolean;

		/**
		 * The bottom margin applied to the input element.
		 * @default "space_6" (1.5rem / 24px)
		 */
		marginBottom?: UtilCssArgs["marginBottom"];

		/**
		 * Whether to render the input with a border.
		 */
		hasBorder?: boolean;

		/**
		 * A ref to the outer element. (e.g. for positioning an element along with the input)
		 */
		outerRef?: ForwardedRef<HTMLDivElement>;

		selectionRange?: {
			end: number | null;
			start: number | null;
		};
	};

/**
 * A component to render an input.
 * @private Is a base component that should be wrapped with `ForwardRef`.
 */
function InputBase(
	{
		addonLeft,
		addonRight,
		className: userClassName,
		colorOverlay,
		defaultValue,
		description,
		disabled,
		errorMessage,
		hasBorder,
		hideLastpass,
		invalid,
		isClearable,
		isCopyable,
		isLabelVisible,
		isVisibilityToggleable,
		isVisible: initialIsVisible,
		label,
		labelProps,
		labelTooltip,
		name,
		onChange,
		onClick,
		outerRef,
		readOnly,
		selectionRange,
		size = "md",
		slotLeft,
		slotRight: initialSlotRight,
		strClear,
		strCopied,
		strCopy,
		strHide,
		marginBottom = "space_4",
		strShow,
		type,
		value,
		...rest
	}: InputProps,
	ref: React.ForwardedRef<HTMLInputElement>,
) {
	const inputRef = useForwardRef(ref);

	React.useEffect(() => {
		if (selectionRange !== undefined) {
			inputRef?.current?.setSelectionRange(
				selectionRange.start,
				selectionRange.end,
			);
		}
	}, [inputRef, selectionRange]);

	const focus = React.useCallback(() => {
		inputRef.current?.focus();
	}, [inputRef]);

	const { atomProps, otherProps } = React.useMemo(() => {
		return extractAtomsFromProps(rest, utilCss);
	}, [rest]);

	const { handleToggleVisibility, isVisible } = useFieldVisibilityState({
		initialIsVisible,
	});

	const { handleCopyValue, isCopied } = useFieldCopyableState({
		isCopyable,
		readOnly,
	});

	return (
		<FieldWrapper
			colorOverlay={colorOverlay}
			description={description}
			errorMessage={errorMessage}
			hideLastpass={hideLastpass}
			invalid={invalid}
			wrapperProps={{ marginBottom }}
			{...getOptionalLabelProps({
				isLabelVisible,
				label,
				labelProps,
				labelTooltip,
				name,
			})}
		>
			<InputAddonWrapper
				addonLeft={addonLeft}
				addonRight={addonRight}
				size={size}
			>
				<InputSlotWrapper
					className={clsx(utilCss(atomProps), userClassName)}
					disabled={disabled}
					focus={focus}
					hasBorder={hasBorder}
					invalid={invalid}
					onClick={onClick}
					ref={outerRef}
					size={size}
					slotLeft={slotLeft}
					slotRight={
						<>
							{initialSlotRight}
							{isVisibilityToggleable && (
								<FieldActionButtonVisibility
									isVisible={isVisible}
									onClick={handleToggleVisibility}
									strHide={strHide}
									strShow={strShow}
								/>
							)}
							{isCopyable && (
								<FieldActionButtonCopy
									isCopied={isCopied}
									onClick={() => {
										handleCopyValue?.(
											inputRef?.current?.value,
										);
									}}
									strCopied={strCopied}
									strCopy={strCopy}
								/>
							)}
							{isClearable && strClear && !readOnly && (
								<FieldActionButtonClear
									className={clearButtonStyle}
									onClick={() => {
										onChange?.({
											target: { value: "" },
										} as ChangeEvent<HTMLInputElement>);
										if (inputRef.current) {
											inputRef.current.value = "";
										}
									}}
									strClear={strClear}
								/>
							)}
						</>
					}
				>
					<input
						className={inputStyles}
						defaultValue={defaultValue}
						disabled={disabled}
						id={name}
						name={name}
						onChange={onChange}
						readOnly={readOnly}
						ref={inputRef}
						type={
							isVisibilityToggleable && !isVisible
								? "password"
								: type
						}
						value={value}
						{...otherProps}
					/>
				</InputSlotWrapper>
			</InputAddonWrapper>
		</FieldWrapper>
	);
}

export const Input = React.forwardRef(InputBase);
