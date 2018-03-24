import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './Card.css'
import { connect } from 'react-redux'


class Card extends PureComponent {
  static propTypes = {
    value: PropTypes.number.isRequired,
    row: PropTypes.number.isRequired,
    col: PropTypes.number.isRequired,
  }

  handleClick = () => {
    const {row, col} = this.props
}

  makeClassName = () => {
    const {value} = this.props
    let classNameArray = ['Card']
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

mapStateToProps = null

export default connect(mapStateToProps, { addBoatSquareP1, addBoatSquareP2 })(Square)
