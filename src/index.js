import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';
console.log(TodoList)
const App = () => {
	const propertyList = [
		{label: "Drink Cofee", important: "false", id: 1},
		{label: "Learn React", important: "true", id: 2},
		{label: "Build React App", important: "false", id: 3},
	]

	return (
		<div>
			<AppHeader />
			<SearchPanel />
			<TodoList todos = {propertyList} />
		</div>
	)
}
const el = <App />
//ReactDOM.render(el, document.getElementById('root'))
const container = document.getElementById('root');
ReactDOM.render(el, container);