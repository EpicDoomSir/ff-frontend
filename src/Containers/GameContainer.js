import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GameCard from '../Components/GameCard';
import MathGame from '../Components/MathGame';

class GameContainer extends React.Component {

    state = {
        apiRespone: [],
        game: null,
        timer: null
    }

    /** Immplenting Auth - Eitan
     * 
     * 1. Finding a dynamic way of getting games to show up
     * 2. Putting Timer into global state(Redux) -Demetrio
     */

    componentDidMount() {
        fetch("http://localhost:3000/games")
        .then(r => r.json())
        .then(arrayofGames => this.setState({apiRespone: arrayofGames}))
        .catch(console.log)
    }

    pickaGame = (gameObj) => {
        this.setState({game: gameObj.name, timer: gameObj.time_to_complete_round})
    }

    arrayofGames = () => {
        return this.state.apiRespone.map(gameEl => <GameCard key={gameEl.id} gameObject={gameEl} clickHandler={this.pickaGame}/> )
    }


    render (){
        return (
        <>
        <h1> Game Container</h1>
        <Switch>

            <Route path={`/games/${this.state.game}`} render={ () => {
                return(
                    <>
                    <MathGame timer={this.state.timer}/>
                    </>
                )}
            }/>

            <Route path="/games" render={ () => {
                return (
                    <>
                    {this.arrayofGames()}
                    </>
                )}
            } />

        </Switch>
        </>
        )
    }
}


export default GameContainer