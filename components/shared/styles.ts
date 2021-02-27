import styled from "styled-components";
import {
	LayoutProps,
	FlexboxProps,
	SpaceProps,
	ColorProps,
	TypographyProps,
	BordersProps,
} from "styled-system";
import {
	layout,
	flexbox,
	space,
	color,
	typography,
	border,
} from "styled-system";
import { TodoListWrapper } from "../Todo/styles";

export const Title = styled.h1`
	font-size: 2.5rem;
	font-weight: 700;
	color: #fff;
	text-transform: uppercase;
	letter-spacing: 0.25rem;
`;

export const Container = styled.div`
	position: relative;
	width: 90%;
	max-width: 500px;
	margin: 3rem auto auto;
	background: transparent;
	z-index: 1;
`;

export const BackgroundImage = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 250px;
	background-image: ${({ theme }) => `url(${theme.background.mobile})`};
	background-size: cover;

	@media screen and (min-width: 640px) {
		background-image: ${({ theme }) => `url(${theme.background.desktop})`};
	}
`;

export const Box = styled.div<
	LayoutProps & FlexboxProps & SpaceProps & ColorProps & BordersProps
>`
	display: flex;
	gap: 0.5rem;
	${layout}
	${flexbox}
	${space}
	${color}
	${border}
`;

export const Text = styled.span<
	{ completed?: boolean } & ColorProps & TypographyProps
>`
	text-decoration-line: ${({ completed }) =>
		completed ? "line-through" : "none"};
	color: ${({ completed, theme }) =>
		completed ? theme.colors.gray[700] : theme.colors.gray.hover};
	transition: all 0.3s ease;

	&:hover {
		color: ${({ completed, theme }) =>
			completed ? theme.colors.gray[700] : theme.colors.gray.hover};
	}

	${color}
	${typography}
`;

export const Button = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 40px;
	height: 40px;
	background: transparent;
	border: none;
	cursor: pointer;
	transition: all 0.3s ease;

	@media screen and (min-width: 640px) {
		${TodoListWrapper} li & {
			opacity: 0;
			pointer-events: none;
		}

		${TodoListWrapper} li:hover & {
			opacity: 1;
			pointer-events: all;
		}
	}
`;

export const FilterButton = styled.button<
	{ active?: boolean } & ColorProps & TypographyProps
>`
	color: ${({ active, theme }) =>
		active ? theme.colors.blue[50] : theme.colors.gray[700]};

	&:hover {
		color: ${({ active, theme }) =>
			active ? theme.colors.blue[50] : theme.colors.gray.hover};
	}

	${color}
	${typography}
`;
