import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Square from '../components/Square'
import './Board.css'
import { connect } from 'react-redux'


export class Board extends PureComponent {
  static propTypes = {
    board: PropTypes.arrayOf(
      PropTypes.arrayOf(PropTypes.number)
    ).isRequired
  }

  renderRow = (row, rowIndex) => {
    return (
      <div key={rowIndex} className="row">
        {row.map(this.renderSquare(rowIndex))}
      </div>
    )
  }

  renderSquare = rowIndex => (value, colIndex) => {
    return (
      <Square
      value={value}
      row={rowIndex}
      col={colIndex}
      />
    )
  }

  render() {
    return (
      <div className="Board">
        {this.props.board.map(this.renderRow)}
      </div>
    )
  }
}

// At the bottom of the file, where you connect your component:
const mapStateToProps = (reduxState) => {
  // return an object with the prop names (keys) and prop values
  // taken from the reduxState (values)
  return {
    board: reduxState.board
  }
}

// Then pass it to connect:
export default connect(mapStateToProps)(Board)
