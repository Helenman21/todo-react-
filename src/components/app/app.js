import React, { Component } from "react";
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import Additem from "../Additem";
import './app.css'
console.log(TodoList)

export default class App extends Component {
	uniqueId = 100;
	state = {
		propertyList: [
			{ label: "Drink Cofee", important: "false", id: 1 },
			{ label: "Learn React", important: "true", id: 2 },
			{ label: "Build React App", important: "false", id: 3 },
		]
	}
	onDeleted = (id) => {
		console.log(id)
		this.setState(({ propertyList }) => {
			const index = propertyList.findIndex((el) => el.id === id);
			const newPropertyList = [...propertyList.slice(0, index), ...propertyList.slice(index + 1)]
			return {
				propertyList: newPropertyList
			}
		})
	}
	addItem = (text) =>{
		text = "learn learn learn"
		const item = [{
			label: text,
			important: false,
			id: this.uniqueId++}]
	
		this.setState(({propertyList}) => {
			const newArray = item.concat(propertyList);
			return {
				propertyList: newArray
			}
		}
		)};
		
	render() {
		return (
			<div className="todo-app">
				<AppHeader toDo={1} done={3} />
				<div className="top-panel d-flex">
					<SearchPanel />
					<ItemStatusFilter />
				</div>
				<TodoList todos={this.state.propertyList} onDeleted={this.onDeleted} />
				<Additem todos={this.state.propertyList} addItem={this.addItem} />
			</div>
		)
	}
}