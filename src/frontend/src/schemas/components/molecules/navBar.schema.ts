import type { DefaultProps } from "../defaultProps.schema";
import type { NavLinkProps } from "../atoms";

export interface NavBarProps extends DefaultProps {
  navLinks: NavLinkProps[];
}
