import clsx from "clsx";
import * as React from "react";
import type { Theme } from "../../../types/types";
import styles from "./button.module.css";

export function Button({
	variant,
	size,
	children,
	theme,
	type = "button",
	alignment = "center",
}: {
	alignment?: "left" | "center";
	type: "button" | "submit" | "reset";
	children: React.ReactNode;
	variant: "primary" | "secondary" | "ghost" | "navigational" | "link";
	theme: Theme;
	size: "sm" | "md" | "lg" | "sq";
}) {
	const cn = clsx(styles.boonButton, {
		[styles.secondary]: variant === "secondary",
		[styles.ghost]: variant === "ghost",
		[styles.sm]: size === "sm",
		[styles.lg]: size === "lg",
		[styles.sq]: size === "sq",
		[styles.left]: alignment === "left",
		[styles.center]: alignment === "center",
	});

	return (
		<button type={type} className={cn}>
			{children}
		</button>
	);
}
