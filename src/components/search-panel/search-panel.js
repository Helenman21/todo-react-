import React, { Component } from 'react';
import './search-panel.css'

export default class SearchPanel extends Component {
	state = {
		term: ''
	}
	onGhangeSearch = (e) => {
		const term = e.target.value;
		this.setState({ term });
		this.props.onGhangeSearch(term);
	}
	render(){
		return <input className="search-input form-control" 
				  placeholder="search" 
				  value={ this.state.term } 
				  onChange={ this.onGhangeSearch } />
};}


