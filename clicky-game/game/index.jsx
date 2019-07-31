import Container from "../container/index.js";
import Warhol from "../warhol.js";
import React from "react"

class Game extends React.Component {
    state = {
        score: 0,
        data: []
    }
    guessedIncorrectly = data => {
        this.setState({
            score: 0
        })
    }
    guessedCorrectly = data => {
        this.setState.score ({
            score: ++ this.state.score
        })
    }

    handleClick = id => {
        isGuessedCorrectly = false
        newData = this.state.data.map(item => {
            var newItem = { ...item }
            if (newItem.id = id) {
                if (!newItem.clicked) {
                    newItem.clicked = true
                    isGuessedCorrectly = true
                }
            }

            return newItem


        })
        isGuessedCorrectly ? this.guessedCorrectly(newData)
                         : this.guessedIncorrectly(newData)
    }
    render() {
        return (
            <div>
                test
                {this.state.data.map(item => (
                    <Warhol
                        id={item.id}
                        handleClick={this.handleClick}
                        img={item.url} />
                ))}
            </div>
        )
    }
}