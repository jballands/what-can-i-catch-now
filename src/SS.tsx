import styled from "styled-components";
import * as ss from "styled-system";

interface BoxProps
  extends ss.SpaceProps,
    ss.LayoutProps,
    ss.TypographyProps,
    ss.ColorProps {}

export const Box = styled.div<BoxProps>`
	${ss.space}
	${ss.layout}
	${ss.typography}
	${ss.color}
`;
