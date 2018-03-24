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
  return (
    <Card
    key={colIndex}
    value={value}
    row={rowIndex}
    col={colIndex}
    />
  )
}

render() {
  return(
    <div className="Board">
    {this.props.table.map(this.renderRow)}
    </div>
  )
}

}

const mapStateToProps = (reduxState) => {
  return {
    table: reduxState.table
  }
}
export default connect(mapStateToProps)(Board)
