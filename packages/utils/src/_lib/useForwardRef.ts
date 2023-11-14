import * as React from "react";
import type { ForwardedRef } from "react";

export const useForwardRef = <T>(
	ref: ForwardedRef<T> | undefined,
	// biome-ignore lint/suspicious/noExplicitAny: has to be this way
	initialValue: any = null,
) => {
	const targetRef = React.useRef<T>(initialValue);

	React.useEffect(() => {
		if (!ref) {
			return;
		}

		if (typeof ref === "function") {
			ref(targetRef.current);
		} else {
			ref.current = targetRef.current;
		}
	}, [ref, targetRef]);

	return targetRef;
};
