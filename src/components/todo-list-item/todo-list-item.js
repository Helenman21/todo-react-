import React, { Component} from "react";
import './todo-list-item.css'

export default class TodoListItem extends Component {
	render() {
	const { label, important = false } = this.props;
	const style = {
		color: important ? 'steeblue' : 'black',
		fontWeaght: important ? 'bold' : 'normal'
	};
	return (
	<span className="todo-list-item">
	<span className="todo-list-item-label" style={style}>{label}</span>
	<button type="button" className="btn btn-outline-success btn-sm float-right">
		<i className="fa fa-exclamation" />
	</button>
	<button type="button" className="btn btn-outline-danger btn-sm float-left">
		<i className="fa fa-trash-0" />
	</button>
	</span>
	)
	}
}


