import React, {Component} from "react";
import './additem.css'

export default class Additem extends Component {
	render() {
		const { addItem } = this.props;
		return(
			<div className="item-add-form">
			<button className="btn btn-outline-secondary" onClick={addItem} >Add</button>
			</div>
		)
	}
}