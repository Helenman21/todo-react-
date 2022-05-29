import React from "react";
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import './app.css'
console.log(TodoList)
const App = () => {
	const propertyList = [
		{label: "Drink Cofee", important: "false", id: 1},
		{label: "Learn React", important: "true", id: 2},
		{label: "Build React App", important: "false", id: 3},
	]
 
	return (
		<div className="todo-app">
			<AppHeader toDo={1} done={3}/>
			<div className="top-panel d-flex">
			<SearchPanel />
			<ItemStatusFilter />
			</div>
			<TodoList todos = {propertyList} onDeleted={ (id) => console.log(id) } />
		</div>
	)
}
export default App;