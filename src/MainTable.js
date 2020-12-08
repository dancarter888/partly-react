
import React from 'react';
import $ from 'jquery';

class MainTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      table: [[1,2], [1,2]],
      rowTotals: [0, 0],
      colTotals: [0, 0]
    }
  }

  handleChange = (totals, index, addition) => {
    let items = [...totals];
    let item = {...items[index]};
    item += addition;
    items[index] = item;
    this.setState({items});
  }

  componentDidMount = () => {
    let rows = this.props.rows;
    let cols = this.props.cols;

    this.setState({rowTotals: new Array(rows).fill(0)});
    this.setState({colTotals: new Array(cols).fill(0)});
    for (let row = 0; row < rows; row++) {
      if (!$(`#r${row}`).length) {
        $('#main-table').append(`<tr id="r${row}"></tr>`);
      }
      for (let col = 0; col < cols; col++) {
        if (!$(`#r${row}c${col}`).length) {
          $(`#r${row}`).append(`<td class="c${col}" id="r${row}c${col}"><input type="number" value="${this.state.table[row][col]}"></td>`);
        }
        this.handleChange(this.state.colTotals, col, this.state.table[row][col]);
        this.handleChange(this.state.rowTotals, row, this.state.table[row][col]);
      }
    }   
  }



  render() {
    return (
      <table id="main-table">
        
      </table>
    );
  }
  
}

export default MainTable;
