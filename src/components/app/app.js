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
			this.creationPropertyList('Drink coffee'),
			this.creationPropertyList("Learn React"), 
			this.creationPropertyList("Build React App")
		]
	}
	creationPropertyList(label) {
		return {
			label,
			important: false, 
			done: false,
			id: this.uniqueId++
		}
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
		text = "learn learn learn";	
			const newArray = this.creationPropertyList(text);
			this.setState(({propertyList}) => {
			const newArr = [
				...propertyList,
				newArray
			]
			return {
				propertyList: newArr
			}
		}
		)};
	changingProperties(arr, id, property){
		const index = arr.findIndex((el) => el.id === id);
		const oldArr = arr[index];
		const newArr = {...oldArr, [property]: !oldArr[property]}
		return [...arr.slice(0, index), newArr, ...arr.slice(index + 1)];
	}	
	onTogleImportant = (id) => {
		this.setState(({ propertyList }) => {
			return {
				propertyList: this.changingProperties(propertyList, id, 'important')
			}
		})
	};
	onTogleDone = (id) => {
		this.setState(({ propertyList }) => {
			return {
				propertyList: this.changingProperties(propertyList, id, 'done')
			}
		})
	};	
	render() {
		const doneTask = this.state.propertyList.filter((el) => el.done).length;
		const todoTask = this.state.propertyList.length - doneTask;
		return (
			<div className="todo-app">
				<AppHeader toDo={todoTask} done={doneTask} />
				<div className="top-panel d-flex">
					<SearchPanel />
					<ItemStatusFilter />
				</div>
				<TodoList todos={this.state.propertyList} 
							 onDeleted={this.onDeleted}
							 onTogleImportant={this.onTogleImportant}
							 onTogleDone={this.onTogleDone} />
				<Additem todos={this.state.propertyList} addItem={this.addItem} />
			</div>
		)
	}
}