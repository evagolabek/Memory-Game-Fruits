import React, { PureComponent } from 'react'
import Card from '../components/Card'
import './Board.css'
import { connect } from 'react-redux'


export class Board extends PureComponent {

renderRow = (row, rowIndex) => {
    return (
      <div key={rowIndex} className="row">
        {row.map(this.renderCard(rowIndex))}
      </div>
    )
  }

renderCard = rowIndex => (value, colIndex) => {
  const { flipMap } = this.props

  let visible = flipMap[rowIndex][colIndex] > 0 ? true : false

  return (
    <Card
    value={value}
    row={rowIndex}
    col={colIndex}
    visible={visible}
    />
  )
}

render() {
  return(
    <div className="Board">
    {this.props.cardMap.map(this.renderRow)}
    </div>
  )
}

}

const mapStateToProps = (reduxState) => {
  return {
    cardMap: reduxState.cardMap,
    flipMap: reduxState.flipMap,
  }
}
export default connect(mapStateToProps)(Board)
