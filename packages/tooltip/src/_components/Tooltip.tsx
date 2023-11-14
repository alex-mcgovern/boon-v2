import { TooltipContext } from "../_context/TooltipContext";
import { useTooltip } from "../_lib/useTooltip";
import { TooltipOptions } from "../types";

/**
 * Provider for a tooltip.
 */
export function Tooltip({
	children,
	...options
}: { children: React.ReactNode } & {
	/**
	 * Trigger & content to be rendered within the tooltip provider.
	 */
	children: React.ReactNode;
} & TooltipOptions) {
	// This can accept any props as options, e.g. `placement`,
	// or other positioning options.
	const tooltip = useTooltip(options);

	return (
		<TooltipContext.Provider value={tooltip}>
			{children}
		</TooltipContext.Provider>
	);
}
