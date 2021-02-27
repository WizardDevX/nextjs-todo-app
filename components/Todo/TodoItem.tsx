import React, { useContext } from "react";
import { Box, Text, Button } from "../shared/styles";
import { CheckButton } from "./styles";
import { Todo, ActionTypes } from "../../interfaces";
import { TodoContext } from "../../store/store";

const TodoItem = (todo: Todo) => {
	const { dispatchTodo } = useContext(TodoContext);

	return (
		<Box
			as="li"
			alignItems="center"
			justifyContent="space-between"
			py={1}
			px={3}>
			<Box alignItems="center" justifyContent="center">
				<CheckButton
					completed={todo.completed}
					onClick={() => {
						dispatchTodo!({
							type: ActionTypes.CHECK_TODO,
							id: todo.id,
						});
					}}>
					<img src="icon-check.svg" alt="Check icon" />
				</CheckButton>
				<Text
					as="button"
					completed={todo.completed}
					fontWeight="400"
					fontSize={2}
					onClick={() => {
						dispatchTodo!({
							type: ActionTypes.CHECK_TODO,
							id: todo.id,
						});
					}}>
					{todo.task}
				</Text>
			</Box>
			{!todo.completed && (
				<Button
					onClick={() => {
						if (confirm("Are you sure?"))
							dispatchTodo!({
								type: ActionTypes.DELETE_TODO,
								id: todo.id,
							});
					}}>
					<img src="icon-cross.svg" alt="Cross icon" />
				</Button>
			)}
		</Box>
	);
};

export default TodoItem;
