import type { DefaultProps } from "../defaultProps.schema";
import type { NavBarProps } from "./navBar.schema";

export interface NavBarTextProps extends DefaultProps {
	title: string;
	navbarList: NavBarProps[];
}
