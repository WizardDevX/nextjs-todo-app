import { createContext, useReducer, FC, useEffect } from "react";
import { todoReducer } from "./reducers";
import { Context } from "../interfaces";
import { generateId } from "../utils/utils";

export const TodoContext = createContext<Partial<Context>>({});

const initStore = {
	id: generateId(),
	task: "Make more Projects",
	completed: false,
};

const TodoProvider: FC = ({ children }) => {
	const [todos, dispatchTodo] = useReducer(todoReducer, [initStore]);

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	return (
		<TodoContext.Provider value={{ todos, dispatchTodo }}>
			{children}
		</TodoContext.Provider>
	);
};

export default TodoProvider;
