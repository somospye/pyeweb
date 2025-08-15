import type { DefaultProps } from "../defaultProps.schema";

interface NavLinkInfo extends DefaultProps {
	title: string;
	route: string;
}

export interface NavBarProps extends DefaultProps {
	navLinks: NavLinkInfo[];
}
