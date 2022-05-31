import React, { Component } from "react";
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import './app.css'
console.log(TodoList)

export default class App extends Component  {
	state = { propertyList: [
		{ label: "Drink Cofee", important: "false", id: 1 },
		{ label: "Learn React", important: "true", id: 2 },
		{ label: "Build React App", important: "false", id: 3 },
	]}
	onDeleted = (id) => {
		console.log(id)
		this.setState(({ propertyList }) => {
			const index = propertyList.findIndex((el) => el.id === id) ;
			const newPropertyList = [...this.state.propertyList.slice(0, index), ...this.state.propertyList.slice(index + 1)]
		return {
			propertyList:newPropertyList
		}
		})
	}
render(){
	return (
		<div className="todo-app">
			<AppHeader toDo={1} done={3} />
			<div className="top-panel d-flex">
				<SearchPanel />
				<ItemStatusFilter />
			</div>
			<TodoList todos={this.state.propertyList} onDeleted={this.onDeleted} />
		</div>
	)}
}