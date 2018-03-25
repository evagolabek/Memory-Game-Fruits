import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './Card.css'
import { connect } from 'react-redux'
import {flipCard} from '../actions/game'


export class Card extends PureComponent {
  static propTypes = {
    value: PropTypes.number.isRequired,
    row: PropTypes.number.isRequired,
    col: PropTypes.number.isRequired,
    visible: PropTypes.bool.isRequired,
  }

  handleClick = () => {
    const {row, col, visible, flipCard} = this.props
    if (visible) return
    flipCard(row, col)
}

  makeClassName = () => {
    const {value, visible} = this.props
    let classNameArray = ['Card']
    if (visible) classNameArray.push(`image-${value}`)

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

export default connect(mapStateToProps, {flipCard})(Card)
