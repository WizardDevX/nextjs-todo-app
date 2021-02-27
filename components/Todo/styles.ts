import styled from "styled-components";
import { Box, Button } from "../shared/styles";

export const TodoInputWrapper = styled(Box)`
	gap: 1rem;
	border-radius: 10px;
	background-color: ${({ theme }) => theme.colors.blue[100]};
`;

export const InputTodo = styled.input`
	width: calc(100% - 1.5rem - 30px);
	padding: 1rem 0;
	font-size: 0.8rem;
	font-weight: 400;
	color: ${({ theme }) => theme.colors.gray[100]};
	border: none;
	background: transparent;
	caret-color: ${({ theme }) => theme.colors.blue[50]};

	&::placeholder {
		color: ${({ theme }) => theme.colors.gray[700]};
		opacity: 1;
	}
`;

export const CheckButton = styled(Button)<{ completed?: boolean }>`
	width: 30px;
	height: 30px;
	border: ${({ completed, theme }) =>
		completed ? "none" : `1px solid ${theme.colors.gray[900]}`};
	border-radius: 50%;
	background: ${({ completed, theme }) =>
		completed ? theme.colors.blue.gradient : "transparent"};
	transition: all 0.3s ease;

	& > img {
		transition: all 0.3s ease;
		opacity: ${({ completed }) => (completed ? "1" : "0")};
	}

	&:hover {
		border: ${({ theme }) => `1px solid ${theme.colors.blue.gradient}`};
	}
`;

export const TodoListWrapper = styled.ul`
	max-height: 400px;
	list-style: none;
	background-color: ${({ theme }) => theme.colors.blue[100]};
	border-radius: 10px 10px 0 0;
	overflow-y: auto;

	& > ${Box}:not(:last-child) {
		border-bottom: 1px solid ${({ theme }) => theme.colors.gray[800]};
	}

	& > li {
		height: 60px;
	}
`;
