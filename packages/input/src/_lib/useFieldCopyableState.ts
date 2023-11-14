import * as React from "react";

/**
 * Hook to handle copying a value from a readOnly input.
 */
export function useFieldCopyableState({
	isCopyable,
	readOnly,
}: {
	/**
	 * Whether the field is copyable.
	 */
	isCopyable?: boolean;

	/**
	 * Whether the field is read-only.
	 */
	readOnly?: boolean;
}) {
	const [isCopied, setIsCopied] = React.useState<boolean>(false);

	const revertIsCopied = () => {
		setTimeout(() => {
			setIsCopied(false);
		}, 3000);
	};

	const handleCopyValue = (
		value: string | number | readonly string[] | undefined,
	) => {
		return navigator.clipboard.writeText(value as string).then(() => {
			setIsCopied(true);

			return revertIsCopied();
		});
	};

	if (!readOnly || !isCopyable) {
		return {};
	}

	return {
		handleCopyValue,
		isCopied,
	};
}
