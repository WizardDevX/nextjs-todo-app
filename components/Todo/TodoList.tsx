import React, { useContext, useMemo } from "react";
import { List } from "./styles";
import TodoItem from "./TodoItem";
import { TodoContext } from "../../store/store";

type FilterProps = {
	filter: string;
};

const TodoList = ({ filter }: FilterProps) => {
	const { todos } = useContext(TodoContext);
	const filteredTodos = useMemo(() => todos, [todos]);

	if (filter === "FILTER_ALL")
		return (
			<List>
				{filteredTodos &&
					filteredTodos.map(todo => {
						return <TodoItem key={todo.id} {...todo} />;
					})}
			</List>
		);

	if (filter === "SHOW_ACTIVE")
		return (
			<List>
				{filteredTodos &&
					filteredTodos
						.filter(todo => !todo.completed)
						.map(todo => {
							return <TodoItem key={todo.id} {...todo} />;
						})}
			</List>
		);

	if (filter === "SHOW_COMPLETED")
		return (
			<List>
				{filteredTodos &&
					filteredTodos
						.filter(todo => todo.completed)
						.map(todo => {
							return <TodoItem key={todo.id} {...todo} />;
						})}
			</List>
		);

	return <h1>No hay tareas disponibles.</h1>;
};

export default TodoList;
