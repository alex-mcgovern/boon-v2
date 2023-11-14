import { WithSize } from "@boondoggle.design/types";
import clsx from "clsx";
import * as React from "react";
import styles from "./InputAddonTab.module.css";

export function InputAddonTab({
	children,
	side,
	size,
}: WithSize & {
	children: React.ReactNode;
	side: "right" | "left";
}) {
	const cn = clsx(styles.inputAddonTab, styles.hasBorder, {
		[styles.sm]: size === "sm",
		[styles.md]: size === "md",
		[styles.lg]: size === "lg",
		[styles.sideLeft]: side === "left",
		[styles.sideRight]: side === "right",
	});

	if (React.isValidElement<React.HtmlHTMLAttributes<HTMLElement>>(children)) {
		return (
			<div className={cn}>
				{/* {children} */}
				{React.cloneElement(children, {
					// className: clsx(
					// 	children.props.className,
					// 	styles.overrideTabBorder,
					// ),
					style: {
						border: 0,
					},
				})}
			</div>
		);
	}
	return <div className={clsx(cn, styles.hasPadding)}>{children}</div>;
}
