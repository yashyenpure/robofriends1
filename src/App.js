import React ,{Component} from 'react';
import CardList from './CardList';
import Searchbox from './Searchbox';
import {robots } from './Robots.js';
import ErrorBoundary from './ErrorBoundary';
import Scroll from './Scroll.js'
import './App.css';

class  App extends  Component  {
	constructor() {
		super()
		this.state = {
			robots : [],
			searchfield: ''
		}
	}
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
		.then(user => this.setState({robots: user}))

	}


	onSearchChange = (event) => {
		this.setState({ searchfield : event.target.value})
		

		
	}




	render() {
		const filterrobots = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})
		if (this.state.robots.length === 0) {
			return (
				<h1>Loading</h1>
				)
		}
		else{
			return(
		<div className = 'tc'>
		<h1 className = 'f1'>RoboFriends</h1>
		<Searchbox searchChange = {this.onSearchChange} />
		<Scroll>
			<ErrorBoundary> 
				<CardList robots = {filterrobots}/>
			</ErrorBoundary>	
		</Scroll>	
		</div>

		)
		}
		

	}
	
}

export default App;