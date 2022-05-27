import React from 'react';
import './app-header.css'
const AppHeader = ( {toDo, done} ) => {
	return (
		<div className="app-header d-flex">
			<h1> Мой список задач</h1>
			<h2>{ toDo } еще сделать, {done} done</h2>
		</div>
	)
};
export default AppHeader;