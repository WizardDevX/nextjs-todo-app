import styled from "styled-components";

export const Container = styled.div`
	position: relative;
	width: 40%;
	height: 700px;
	margin: 5em auto;
	border-radius: 20px;
	background-color: transparent;
	padding: 2em;
	border: 1px solid ${({ theme }) => theme.colors.terciary2};
`;

export const Topbar = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
`;

export const InputTodo = styled.input`
	border: 1px solid ${({ theme }) => theme.colors.secondary1};
	width: 60%;
	padding: 1em 2em;
`;

export const List = styled.ul`
	list-style: none;
	margin-top: 4em;
`;

export const Item = styled.li<{ completed: boolean }>`
	border: 1px solid ${({ theme }) => theme.colors.secondary1};
	padding: 0.8em 2em;
	width: 80%;
	background-color: #fff;
	text-decoration-line: ${({ completed }) =>
		completed ? "line-through" : "none"};
	opacity: ${({ completed }) => (completed ? ".5" : "1")};
`;

export const CompleteButton = styled.button`
	background-color: ${({ theme }) => theme.colors.secondary1};
	font-size: 24px;
	color: #fff;
	width: 45px;
	height: 45px;
	border: none;
	cursor: pointer;
`;

export const DeleteButton = styled(CompleteButton)`
	background-color: ${({ theme }) => theme.colors.secondary2};
`;

export const Select = styled.select`
	appearance: none;
	width: 20%;
	height: 48px;
	margin-left: auto;
	border: none;
	padding: 1em;
	transition: all 0.25s ease;
	cursor: pointer;
`;
