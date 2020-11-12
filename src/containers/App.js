import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

import { setSearchField } from '../actions';

const mapStateToProps = state => {
    return {
        searchField: state.searchField
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
}

class App extends Component {
    constructor() {
        super()
        this.state = {
            gamers: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ gamers: users }));
    }

    render() {
        const { gamers } = this.state;
        const { searchField, onSearchChange } = this.props;
        const filteredGamers = gamers.filter(gamer => {
            return gamer.name.toLowerCase().includes(searchField.toLowerCase())
        })
        return !gamers.length ?
            <h1>loading</h1> :
            (
                <div className='tc'>
                    <h1 className='f1'>gaming friends</h1>
                    <SearchBox searchChange={onSearchChange} />
                    <Scroll>
                        <CardList gamers={filteredGamers} />
                    </Scroll>
                </div>
            );

    }

}

export default connect(mapStateToProps, mapDispatchToProps)(App);