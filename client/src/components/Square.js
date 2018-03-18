import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './Square.css'
import { addBoatSquare } from '../actions/actions'
import { connect } from 'react-redux'



class Square extends PureComponent {
  static propTypes = {
    value: PropTypes.number.isRequired,
    row: PropTypes.number.isRequired,
    col: PropTypes.number.isRequired,
    addBoatSquare: PropTypes.func.isRequired,
    boat: PropTypes.number.isRequired,
  }

  handleClick = () => {
    const {row, col, addBoatSquare, boat} = this.props
    addBoatSquare(row, col, boat)
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
    boat: reduxState.boat
  }
}

export default connect(mapStateToProps, { addBoatSquare })(Square)
