import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './Instructions.css'
import { connect } from 'react-redux'


export class Instructions extends PureComponent {
  // static propTypes = {
  //   board: PropTypes.arrayOf(
  //     PropTypes.arrayOf(PropTypes.number)
  //   ).isRequired
  // }


  render() {
    return (
      <div className="Instructions">
        <h4 className="text"> Create Boat 1 - lenght 5 squares</h4>
        <button onClick={this.handleClick} className = "okButton">OK</button>
      </div>
    )
  }
}


// const mapStateToProps = (reduxState) => {
//   return {
//     board: reduxState.board
//   }
// }


export default connect()(Instructions)
