import React, {Component} from 'react';
import logo from '../assets/image/nba-logoman-word-white.svg'

export default class TopNavBar extends Component {
    render(){
        return (
            <header className={"App-header"}>
                <img src={logo} className="App-logo" alt="logo" />
            </header>
        );
    }
}