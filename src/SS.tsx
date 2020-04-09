import styled from 'styled-components';
import * as ss from 'styled-system';

interface BoxProps
	extends ss.SpaceProps,
		ss.LayoutProps,
		ss.TypographyProps,
		ss.ColorProps,
		ss.BorderProps {}

export const Box = styled.div<BoxProps>`
	${ss.space}
	${ss.layout}
	${ss.typography}
	${ss.color}
	${ss.border}
`;

interface FlexProps
	extends ss.SpaceProps,
		ss.LayoutProps,
		ss.TypographyProps,
		ss.ColorProps,
		ss.FlexboxProps,
		ss.BorderProps {}

export const Flex = styled.div<FlexProps>`
	display: flex;
	${ss.space}
	${ss.layout}
	${ss.typography}
	${ss.color}
	${ss.flexbox}
	${ss.border}
`;

interface GridProps
	extends ss.SpaceProps,
		ss.LayoutProps,
		ss.TypographyProps,
		ss.ColorProps,
		ss.GridProps,
		ss.FlexboxProps,
		ss.BorderProps {}

export const Grid = styled.div<GridProps>`
	display: grid;
	${ss.space}
	${ss.layout}
	${ss.typography}
	${ss.color}
	${ss.flexbox}
	${ss.grid}
	${ss.border}
`;

interface TextProps
	extends ss.SpaceProps,
		ss.LayoutProps,
		ss.TypographyProps,
		ss.ColorProps {}

export const Text = styled.span<TextProps>`	
	${ss.space}
	${ss.layout}
	${ss.typography}
	${ss.color}
`;

interface TableProps
	extends ss.SpaceProps,
		ss.LayoutProps,
		ss.TypographyProps,
		ss.ColorProps,
		ss.BorderProps {}

export const Table = styled.table<TableProps>`
	border-collapse: collapse;
	${ss.space}
	${ss.layout}
	${ss.typography}
	${ss.color}
	${ss.border}
`;

interface ThProps
	extends ss.SpaceProps,
		ss.LayoutProps,
		ss.TypographyProps,
		ss.ColorProps,
		ss.BorderProps {}

export const Th = styled.th<ThProps>`
	${ss.space}
	${ss.layout}
	${ss.typography}
	${ss.color}
	${ss.border}
`;

interface TdProps
	extends ss.SpaceProps,
		ss.LayoutProps,
		ss.TypographyProps,
		ss.ColorProps,
		ss.BorderProps {}

export const Td = styled.td<ThProps>`
	${ss.space}
	${ss.layout}
	${ss.typography}
	${ss.color}
	${ss.border}
`;
