import React, { Component } from "react";
import './todo-list-item.css'

export default class TodoListItem extends Component {

	render() {
		const { label, onDeleted, onTogleImportant, onTogleDone, done, important } = this.props;
		let classNames = 'todo-list-item';
		if (done) {
			classNames += ' done';
		}
		if (important) {
			classNames += ' important';
		}
		return (
			<span className={classNames}>
				<span className="todo-list-item-label" onClick={onTogleDone} >{label}</span>
				<button type="button" className="btn btn-outline-success btn-sm float-right" onClick={onTogleImportant} >
					<i className="fa fa-exclamation" />
				</button>
				<button type="button" className="btn btn-outline-danger btn-sm float-left bi-basket" onClick={onDeleted} >
					<i className="fa fa-trash-0" />
				</button>
			</span>
		) 
	}
}


