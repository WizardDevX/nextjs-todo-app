import Layout from "../components/shared/Layout";
import TodoList from "../components/Todo/TodoList";
import {
	Container,
	Box,
	Title,
	FilterButton,
	Button,
	BackgroundImage,
} from "../components/shared/styles";

import {
	TodoInputWrapper,
	InputTodo,
	CheckButton,
} from "../components/Todo/styles";

import { useState, useContext } from "react";
import { ActionTypes } from "../interfaces";
import { TodoContext } from "../store/store";

const IndexPage = () => {
	const [input, setInput] = useState<string>("");
	const [select, setSelect] = useState<string>("FILTER_ALL");

	const { dispatchTodo } = useContext(TodoContext);

	function changeInput(e: React.ChangeEvent<HTMLInputElement>) {
		e.preventDefault();
		setInput(e.target.value);
	}

	function changeSelect(e: React.MouseEvent<HTMLButtonElement>) {
		e.preventDefault();
		setSelect(e.target.value);
	}

	function addTodo() {
		if (input === "") return;
		dispatchTodo!({
			type: ActionTypes.ADD_TODO,
			task: input,
		});
		setInput("");
	}

	return (
		<>
			<BackgroundImage />
			<Layout title="Todo App">
				<Container>
					<Box
						alignItems="center"
						justifyContent="space-between"
						mb={5}>
						<Title>Todo</Title>
						<Button>
							<img src="icon-sun.svg" alt="Sun icon" />
						</Button>
					</Box>
					<TodoInputWrapper
						alignItems="center"
						justifyContent="start"
						mb={3}
						px={3}>
						<CheckButton onClick={addTodo}>
							<img src="icon-check.svg" alt="Check icon" />
						</CheckButton>
						<InputTodo
							placeholder="Create a new todo..."
							value={input}
							onChange={changeInput}
						/>
					</TodoInputWrapper>
					<TodoList select={select} changeSelect={changeSelect} />
					<Box
						display={["flex", "none", null, null]}
						bg="blue.100"
						borderRadius="10px"
						alignItems="center"
						justifyContent="center"
						my={3}
						py={2}
						px={3}>
						<FilterButton
							active={select === "FILTER_ALL"}
							onClick={changeSelect}
							fontWeight="700"
							fontSize={3}
							value="FILTER_ALL">
							All
						</FilterButton>
						<FilterButton
							active={select === "SHOW_ACTIVE"}
							onClick={changeSelect}
							fontWeight="700"
							fontSize={3}
							value="SHOW_ACTIVE">
							Active
						</FilterButton>
						<FilterButton
							active={select === "SHOW_COMPLETED"}
							onClick={changeSelect}
							fontWeight="700"
							fontSize={3}
							value="SHOW_COMPLETED">
							Completed
						</FilterButton>
					</Box>
				</Container>
			</Layout>
		</>
	);
};

export default IndexPage;
