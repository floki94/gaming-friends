import React, { Component } from 'react'
import CardList from './CardList'
import SearchBox from './SearchBox'
import Scroll from './Scroll'
import './App.css'


class App extends Component {
    constructor() {
        super()
        this.state = {
            gamers: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({gamers: users}));
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const { gamers, searchfield } = this.state;
        const filteredGamers = gamers.filter(gamer => {
            return gamer.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return !gamers.length ?
            <h1>loading</h1> :
            (
                <div className='tc'>
                    <h1 className='f1'>gaming friends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList gamers={filteredGamers} />
                    </Scroll>
                </div>
            );

        }

}

export default App;