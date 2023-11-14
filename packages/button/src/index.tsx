import clsx from "clsx";
import * as React from "react";
import type { Theme, WithTheme } from "../../utils/src";
import styles from "./button.module.css";

type ElementProps =
	| (React.ButtonHTMLAttributes<HTMLButtonElement> & { as: "button" })
	| (React.AnchorHTMLAttributes<HTMLAnchorElement> & {
			as: "a";
			type: "button" | "submit" | "reset";
	  });

export function Button(
	props: ElementProps & {
		alignment?: "left" | "center";
		children: React.ReactNode;
		variant: "primary" | "secondary" | "ghost" | "navigational" | "link";
		size: "sm" | "md" | "lg" | "sq";
	} & WithTheme,
) {
	const cn = clsx(styles.boonButton, {
		[styles.secondary]: props.variant === "secondary",
		[styles.ghost]: props.variant === "ghost",
		[styles.sm]: props.size === "sm",
		[styles.lg]: props.size === "lg",
		[styles.sq]: props.size === "sq",
		[styles.left]: props.alignment === "left",
		[styles.center]: props.alignment === "center",
		[`theme__${props.theme}`]: !!props.theme,
	});

	if (props.as === "a") {
		return (
			<a className={cn} {...props}>
				{props.children}
			</a>
		);
	}

	return (
		<button type={props.type} className={cn} {...props}>
			{props.children}
		</button>
	);
}
