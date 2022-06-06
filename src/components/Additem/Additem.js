import React, {Component} from "react";
import './additem.css'

export default class Additem extends Component {
	state = {
		label: ''
	}
	
	onLabelChange = (e) => {
		this.setState({
			label: e.target.value
		})
		console.log(this.state.label)
	}
	onSubmit = (e) => {
		e.preventDefault();
		this.props.addItem(this.state.label);
		this.setState({
			label: ''
		})
	}
	render() {
		return(
			<form className="item-add-form d-flex" onSubmit={this.onSubmit}>
				<input type="text"
					className="form-control"
					onChange={this.onLabelChange} 
					placeholder="Что еще нужно сделать"
					value={this.state.label} /> 
			<button className="btn btn-outline-secondary" >Add</button>
			</form>
		)
	}
}