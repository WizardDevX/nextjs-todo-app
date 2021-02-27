import React, { useContext, useMemo } from "react";
import { Box, Text, FilterButton } from "../shared/styles";
import { TodoListWrapper } from "./styles";
import TodoItem from "./TodoItem";
import { ActionTypes } from "../../interfaces";
import { TodoContext } from "../../store/store";

type FilterProps = {
	select: string;
	changeSelect: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const TodoList = ({ select, changeSelect }: FilterProps) => {
	const { todos, dispatchTodo } = useContext(TodoContext);
	const filteredTodos = useMemo(() => {
		if (todos == null) return null;

		if (select === "FILTER_ALL") return todos;
		else if (select === "SHOW_ACTIVE") {
			return todos.filter((todo) => !todo.completed);
		} else if (select === "SHOW_COMPLETED") {
			return todos.filter((todo) => todo.completed);
		}
	}, [, select, todos]);

	return (
		<>
			<TodoListWrapper>
				{filteredTodos &&
					filteredTodos.map((todo) => {
						return <TodoItem key={todo.id} {...todo} />;
					})}
			</TodoListWrapper>
			<Box
				bg="blue.100"
				borderBottomLeftRadius="10px"
				borderBottomRightRadius="10px"
				borderTop="1px solid"
				borderTopColor="gray.800"
				alignItems="center"
				justifyContent="space-between"
				py={2}
				px={3}>
				<Text color="gray.700" fontWeight="400" fontSize={2}>
					{Number(filteredTodos?.length)} items left
				</Text>
				<Box
					bg="blue.100"
					alignItems="center"
					justifyContent="center"
					display={["none", "flex", "flex", null]}>
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

				<Text
					onClick={() => {
						if (confirm("Are you sure?"))
							dispatchTodo!({
								type: ActionTypes.CLEAR_ALL,
							});
					}}
					as="button"
					color="gray.700"
					fontWeight="400"
					fontSize={2}>
					Clear Completed
				</Text>
			</Box>
		</>
	);
};

export default TodoList;
