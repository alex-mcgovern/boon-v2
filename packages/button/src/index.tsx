import { WithTheme } from "@boondoggle.design/types";
import clsx from "clsx";
import * as React from "react";
import styles from "./button.module.css";

type ElementProps =
	| (React.ButtonHTMLAttributes<HTMLButtonElement> & { as: "button" })
	| (React.AnchorHTMLAttributes<HTMLAnchorElement> & {
			as: "a";
			type?: "button" | "submit" | "reset";
	  });

export const Button = React.forwardRef<
	HTMLButtonElement | HTMLAnchorElement,
	ElementProps & {
		alignment?: "left" | "center";
		children: React.ReactNode;
		variant?: "primary" | "secondary" | "ghost" | "navigational" | "link";
		size?: "sm" | "md" | "lg" | "sq";
	} & WithTheme
>(
	(
		{
			as = "button",
			variant = "primary",
			size = "md",
			alignment,
			className,
			children,
			type,
			theme,
			...rest
		},
		ref,
	) => {
		const cn = clsx(className, styles.boonButton, {
			[styles.secondary]: variant === "secondary",
			[styles.ghost]: variant === "ghost",
			[styles.sm]: size === "sm",
			[styles.md]: size === "md",
			[styles.lg]: size === "lg",
			[styles.sq]: size === "sq",
			[styles.left]: alignment === "left",
			[styles.center]: alignment === "center",
			[`theme__${theme}`]: !!theme,
		});

		if (as === "a") {
			return (
				<a
					ref={ref as React.ForwardedRef<HTMLAnchorElement>}
					className={cn}
					{...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
				>
					{children}
				</a>
			);
		}

		return (
			<button
				ref={ref as React.ForwardedRef<HTMLButtonElement>}
				type={type ?? "button"}
				className={cn}
				{...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
			>
				{children}
			</button>
		);
	},
);
