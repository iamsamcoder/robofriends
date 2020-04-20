import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ErrorBoundary from '../components/errorboundary';
//import robots from './robots.js';
import './App.css';
import Scroll from '../components/Scroll';

class App extends Component {
    constructor(){
        super();
        this.state = {
            robots: [],
            searchText: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then( users => {this.setState({robots : users})});  
    }

    onSearchChange = (event) => {
        this.setState({searchText : event.target.value});
    }

    render(){
        const {robots, searchText: searchField } = this.state;
        let filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return !robots.length ?
            <h1>Loading</h1> :
           (
                <div className='tc app'>
                    <h1 className='f1 tc'>Robo Friends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots = {filteredRobots}/>
                        </ErrorBoundary>
                    </Scroll>
                </div>
            )        
    }
    
}

export default App;