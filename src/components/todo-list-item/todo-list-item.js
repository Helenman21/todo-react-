import React, { Component } from "react";
import './todo-list-item.css'

export default class TodoListItem extends Component {
	state = {
		done: false,
		important: false
	};
	onClickLabel = () => {
		this.setState(({ done }) => {
			return {
				done: !done
			}
		}

		)
	};
	onMarckImportant = () => {
		this.setState(({ important }) => {
			return {
				important: !important
			}
		}
		)
	}
	render() {
		const { done, important } = this.state;
		let classNames = 'todo-list-item';
		if (done) {
			classNames += ' done';
		}
		if (important) {
			classNames += ' important';
		}
		const { label, onDeleted } = this.props;

		return (
			<span className={classNames}>
				<span className="todo-list-item-label" onClick={this.onClickLabel} >{label}</span>
				<button type="button" className="btn btn-outline-success btn-sm float-right" onClick={this.onMarckImportant} >
					<i className="fa fa-exclamation" />
				</button>
				<button type="button" className="btn btn-outline-danger btn-sm float-left bi-basket" onClick={onDeleted} >
					<i className="fa fa-trash-0" />
				</button>
			</span>
		)
	}
}


