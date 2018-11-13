import React, { Component } from 'react';
import SearchBox from './SearchBox';
import CardList from './CardList';
import Scroll from './Scroll';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
    //console.log('constructor');
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({robots: users}))
    //console.users => {}('componentDidMount');
  }

onSearchChange = (event) => {
  this.setState({searchfield: event.target.value})
}

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    //console.log('render');
    if(this.state.robots.length === 0){
      return <h1>Loading</h1>
    }else{
      return (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList robots={filteredRobots}/>
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
