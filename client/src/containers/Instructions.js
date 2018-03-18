import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './Instructions.css'
import { connect } from 'react-redux'
import { checkBoat } from '../lib/game'
import { boatCompleted } from '../actions/actions'


export class Instructions extends PureComponent {
  static propTypes = {
    currentPlayer: PropTypes.number.isRequired,
    gameState: PropTypes.string.isRequired,
    boatCompleted: PropTypes.func.isRequired
  }

makeText = () => {
  const {gameState} = this.props
  switch (gameState) {
    case "addBoat1": return "Create Boat1 length 5 squares and click OK"
    case "addBoat2": return "Create Boat2 length 4 squares and click OK"
    case "addBoat3": return "Create Boat3 length 3 squares and click OK"
    case "addBoat4": return "Create Boat4 length 3 squares and click OK"
    case "addBoat5": return "Create Boat5 length 2 squares and click OK"
    default: return "game state unknown"
  }
}

handleClick = () => {
  const {gameState, boatCompleted} = this.props
  if (checkBoat(gameState) === true) {
    boatCompleted()
  }
  else {
    console.log('error!');
  }
}

  render() {
    return (
      <div className="Instructions">
        <h3 className="CurrentPlayer">Player{this.props.currentPlayer} is playing..</h3>
        <h4 className="Text">{this.makeText()}</h4>
        <button onClick={this.handleClick} className = "okButton">OK</button>
      </div>
    )
  }
}


const mapStateToProps = (reduxState) => {
  return {
    currentPlayer: reduxState.currentPlayer,
    gameState: reduxState.gameState
  }
}

export default connect(mapStateToProps, { boatCompleted })(Instructions)
