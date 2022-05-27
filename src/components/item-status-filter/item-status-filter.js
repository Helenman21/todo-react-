import React from "react";



const ItemStatusFilter = () => {
	return (
		<div className="btn-group">
			<button type="button" className="btn btn-info">Все</button>
			<button type="button" className="btn btn-secondary">Сделать</button>
			<button type="button" className="btn btn-secondary">Выполнено</button>
		</div>
	)
}
export default ItemStatusFilter;