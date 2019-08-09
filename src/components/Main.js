import React, {Component} from 'react';
import Profile from './Profile'
import DataViewContainer from './DataViewContainer'
import nba from 'nba';
import SearchBar from "./SearchBar";
import {DEFAULT_PLAYER_INFO} from "../constants";

class Main extends Component {
    state = {
        playerInfo: DEFAULT_PLAYER_INFO,
    };

    componentDidMount() {
        this.loadPlayerInfo(this.state.playerInfo.fullName);
    };

    handleSelectPlayer = (playerName)=>{
        this.loadPlayerInfo(playerName);
    };

    loadPlayerInfo=(playerName) => {
        nba.stats.playerInfo({ PlayerID: nba.findPlayer(playerName).playerId})
            .then((info)=> {
                const playerInfo = Object.assign(info.commonPlayerInfo[0], info.playerHeadlineStats[0]);
                this.setState({playerInfo});
            })
            .catch((e) => console.log(e))
    };

    render() {
        return (
            <div className="main">
                <SearchBar handleSelectPlayer={this.handleSelectPlayer}/>
                <div className="player">
                    <Profile playerInfo={this.state.playerInfo}/>
                    {/*<ShotChart playerId={this.state.playerId}/>*/}
                    <DataViewContainer playerId={this.state.playerInfo.playerId}/>
                </div>
            </div>
        );
    }
}

export default Main;