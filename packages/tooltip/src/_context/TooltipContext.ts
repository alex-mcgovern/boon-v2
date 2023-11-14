import * as React from "react";
import { useTooltip } from "../_lib/useTooltip";

export type ContextType = ReturnType<typeof useTooltip> | null;

export const TooltipContext = React.createContext<ContextType>(null);
