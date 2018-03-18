import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './Square.css'
import { doClick } from '../actions/actions'
import { connect } from 'react-redux'


class Square extends PureComponent {
  static PropTypes = {
    value: PropTypes.number.isRequired,
    row: PropTypes.number.isRequired,
    col: PropTypes.number.isRequired,
    doClick: PropTypes.func.isRequired,
  }

  handleClick = () => {
    const {row, col, doClick} = this.props
    doClick(row, col)
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

const mapStateToProps = null

export default connect(mapStateToProps, { doClick })(Square)
