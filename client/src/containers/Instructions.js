import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './Instructions.css'
import { connect } from 'react-redux'
import { checkBoat, createBoatInstruction } from '../lib/game'
import { nextBoat, changePlayer } from '../actions/actions'


export class Instructions extends PureComponent {
  static propTypes = {
    currentPlayer: PropTypes.number.isRequired,
    boat:PropTypes.number.isRequired,
    nextBoat: PropTypes.func.isRequired,
    changePlayer: PropTypes.func.isRequired,
    errorText: PropTypes.string
  }

makeText = () => {
  const {boat} = this.props
  return createBoatInstruction(boat)
}

handleClick = () => {
  const {boat, nextBoat, changePlayer} = this.props
  if (checkBoat(boat) === true) {
    if (boat === 5) changePlayer()
    nextBoat()
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
    boat: reduxState.boat
  }
}

export default connect(mapStateToProps, { nextBoat, changePlayer })(Instructions)
