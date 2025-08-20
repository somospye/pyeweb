import type { NavLinkProps } from "../atoms";
import type { DefaultProps } from "../defaultProps.schema";

export interface severalButtonsProps extends DefaultProps {
  buttons: NavLinkProps[];
}
