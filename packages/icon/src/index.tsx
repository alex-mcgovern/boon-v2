import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import styles from "./icon.module.css";

export function Icon({
	className: userClassName,
	color = "currentColor",
	icon,
	...rest
}: FontAwesomeIconProps & {
	className?: string;
	icon: IconProp;
}) {
	return (
		<FontAwesomeIcon
			className={clsx(styles.icon, userClassName)}
			icon={icon}
			{...rest}
		/>
	);
}
