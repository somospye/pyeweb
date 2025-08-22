import type { DefaultProps } from "../defaultProps.schema";
import type { severalButtonsProps } from "../molecules";

export interface CardLoginProps extends DefaultProps {
	title: string;
	subTitle: string;
	buttonList: severalButtonsProps;
}
