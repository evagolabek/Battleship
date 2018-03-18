import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './Instructions.css'
import { connect } from 'react-redux'


export class Instructions extends PureComponent {
  static propTypes = {
    currentPlayer: PropTypes.number.isRequired
  }


  render() {
    return (
      <div className="Instructions">
        <h3 className="CurrentPlayer">Player{this.props.currentPlayer} is playing..</h3>
        <h4 className="Text"> Create Boat 1 - lenght 5 squares</h4>
        <button onClick={this.handleClick} className = "okButton">OK</button>
      </div>
    )
  }
}


const mapStateToProps = (reduxState) => {
  return {
    currentPlayer: reduxState.currentPlayer
  }
}

export default connect(mapStateToProps)(Instructions)
