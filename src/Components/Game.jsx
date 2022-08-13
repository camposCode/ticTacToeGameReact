import React from 'react'
import Board from './Board'

const Game = () => {

    const status = 'next player is X'
    const moves = <li><button>Start the game</button></li>
    const squares = Array(9).fill(null)
    return (
        <div className='game'>
            <div className='game__board'>
                <Board squares={ squares }/>
            </div>
            <div className="game__info">
                <div>{ status }</div>
                <div>{ moves }</div>
            </div>
            
        </div>
    )
}

export default Game