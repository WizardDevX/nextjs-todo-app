import React, { useContext } from "react";
import { Item, Topbar, CompleteButton, DeleteButton } from "./styles";
import { FaCheck, FaTimes } from "react-icons/fa";
import { Todo, ActionTypes } from "../../interfaces";
import { TodoContext } from "../../store/store";

const TodoItem = (todo: Todo) => {
	const { dispatchTodo } = useContext(TodoContext);

	return (
		<Topbar>
			<Item completed={todo.completed}>{todo.task}</Item>
			<CompleteButton
				onClick={() => {
					dispatchTodo!({
						type: ActionTypes.CHECK_TODO,
						id: todo.id,
					});
				}}>
				<FaCheck />
			</CompleteButton>
			<DeleteButton
				onClick={() => {
					if (confirm("Are you sure?"))
						dispatchTodo!({
							type: ActionTypes.DELETE_TODO,
							id: todo.id,
						});
				}}>
				<FaTimes />
			</DeleteButton>
		</Topbar>
	);
};

export default TodoItem;
