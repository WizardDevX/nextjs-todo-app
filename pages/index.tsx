import Layout from "../components/Layout";
import TodoList from "../components/Todo/TodoList";
import {
	Container,
	Topbar,
	InputTodo,
	CompleteButton,
	Select,
} from "../components/Todo/styles";

import { FaPlus } from "react-icons/fa";
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

	function changeSelect(e: React.ChangeEvent<HTMLSelectElement>) {
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
		<Layout title="Todo App">
			<Container>
				<Topbar>
					<InputTodo
						placeholder="Enter your Task"
						value={input}
						onChange={changeInput}
					/>
					<CompleteButton onClick={() => addTodo()}>
						<FaPlus />
					</CompleteButton>
					<Select value={select} onChange={changeSelect}>
						<option value={"FILTER_ALL"}>All</option>
						<option value={"SHOW_COMPLETED"}>Completed</option>
						<option value={"SHOW_ACTIVE"}>Uncompleted</option>
					</Select>
				</Topbar>
				<TodoList filter={select} />
			</Container>
		</Layout>
	);
};

export default IndexPage;
