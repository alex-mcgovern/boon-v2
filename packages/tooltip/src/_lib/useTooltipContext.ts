import * as React from "react";
import { TooltipContext } from "../_context/TooltipContext";

export const useTooltipContext = () => {
	const context = React.useContext(TooltipContext);

	if (context == null) {
		throw new Error("Tooltip components must be wrapped in <Tooltip />");
	}

	return context;
};
