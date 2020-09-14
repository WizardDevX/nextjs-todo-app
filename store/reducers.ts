import { ActionTodo, Todo, ActionTypes } from "../interfaces";
import { generateId } from "../utils/utils";

export const todoReducer = (state: Todo[], action: ActionTodo): Todo[] => {
	switch (action.type) {
		case ActionTypes.ADD_TODO: {
			const newTodo = {
				id: generateId(),
				task: action.task,
				completed: false,
			};

			return [...state, newTodo];
		}
		case ActionTypes.DELETE_TODO: {
			return state.filter(todo => todo.id !== action.id);
		}

		case ActionTypes.CHECK_TODO: {
			return state.map(todo => {
				if (todo.id !== action.id) return todo;

				return { ...todo, completed: !todo.completed };
			});
		}
		default: {
			return state;
		}
	}
};
