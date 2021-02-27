import { Dispatch } from "react";

export type Todo = {
	id: string;
	task: string;
	completed: boolean;
};

export type Context = {
	todos: Todo[];
	dispatchTodo: Dispatch<ActionTodo>;
};

export enum ActionTypes {
	ADD_TODO = "ADD_TODO",
	CHECK_TODO = "CHECK_TODO",
	DELETE_TODO = "DELETE_TODO",
	CLEAR_ALL = "CLEAR_ALL",
}

export type ActionTodo =
	| { type: ActionTypes.ADD_TODO; task: string }
	| { type: ActionTypes.DELETE_TODO; id: string }
	| { type: ActionTypes.CHECK_TODO; id: string }
	| { type: ActionTypes.CLEAR_ALL };
