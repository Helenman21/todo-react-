import React from "react";
import './todo-list-item.css'

const TodoListItem = ({ label, important }) => {
	const style = {
		color: important ? 'steeblue' : 'black',
		fontWeaght: important ? 'bold' : 'normal'
	};
	return (
	<span className="todo-list-item">
	<span className="todo-list-item-label" style={style}>{label}</span>
	<button type="button" className="btn btn-outline-success btn-sm">
		<i className="fa fa-exclamation" />
	</button>
	<button type="button" className="btn btn-outline-danger btn-sm">
		<i className="fa fa-trash-0" />
	</button>
	</span>
	)
};

export default TodoListItem;