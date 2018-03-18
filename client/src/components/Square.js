import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './Square.css'
import { addBoat } from '../actions/actions'
import { connect } from 'react-redux'
import { gameStateToBoatNumber } from '../lib/game'


class Square extends PureComponent {
  static PropTypes = {
    value: PropTypes.number.isRequired,
    row: PropTypes.number.isRequired,
    col: PropTypes.number.isRequired,
    addBoat: PropTypes.func.isRequired,
    gameState: PropTypes.string.isRequired,
  }

  handleClick = () => {
    const {row, col, addBoat, gameState} = this.props
    let boat = gameStateToBoatNumber(gameState)
    addBoat(row, col, boat)
  }

  makeClassName = () => {
    const {value} = this.props
    let classNameArray = ['Square']
    classNameArray.push(`value${value || 0}`)
    return classNameArray.join(' ')
  }

  render() {
    return (
      <div
      className = {this.makeClassName()}
      onClick = {this.handleClick}
      />

    )
  }
}

const mapStateToProps = (reduxState) => {
  return {
    gameState: reduxState.gameState
  }
}

export default connect(mapStateToProps, { addBoat })(Square)
