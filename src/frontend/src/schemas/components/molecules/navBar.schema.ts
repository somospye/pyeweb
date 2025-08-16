import type { NavLinkProps } from "../atoms";
import type { DefaultProps } from "../defaultProps.schema";

export interface NavBarProps extends DefaultProps {
	navLinks: NavLinkProps[];
}
