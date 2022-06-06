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
		], 
		term: '',
		filter: 'все'
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
	search(items, term) {
		const isValid = term.length === 0;
		if(isValid) {
			return items
		}
		return items.filter((item) => {
			return item.label
			.toLowerCase()
			.indexOf(term.toLowerCase()) > -1
		})
	}
	onGhangeSearch = (term) => {
		this.setState({ term })
	}
	onFilterChange = (filter) => {
		this.setState({ filter })
	}
	filter(items, filter) {
		switch(filter)  {
			case 'все':
				return items;
				case 'не выполнено':
					return items.filter((item) => !item.done);
					case 'выполнено':
						return items.filter((item) => item.done);
						default:
							return items;
		}
	}
	render() {
		const { propertyList, term, filter } = this.state;
		const visibleItems = this.filter(this.search(propertyList, term), filter)
		const doneTask = propertyList.filter((el) => el.done).length;
		const todoTask = propertyList.length - doneTask;
		return (
			<div className="todo-app">
				<AppHeader toDo={todoTask} done={doneTask} />
				<div className="top-panel d-flex">
					<SearchPanel onGhangeSearch={ this.onGhangeSearch } />
					<ItemStatusFilter 
						filter={filter} 
						onFilterChange={this.onFilterChange} />
				</div>
				<TodoList className="top-panel "
							 todos={ visibleItems } 
							 onDeleted={this.onDeleted}
							 onTogleImportant={this.onTogleImportant}
							 onTogleDone={this.onTogleDone} />
				<Additem todos={ propertyList } addItem={this.addItem} />
			</div>
		)
	}
}