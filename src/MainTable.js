
import React from 'react';
import $ from 'jquery';

class MainTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      table: [[1,2], [1,2]],
    }
  }

  addRow = () => {
    let table = this.state.table;
    let cols = this.state.table[0].length;
    table.push(new Array(cols).fill(0));
    console.log(table);
    $('.row-totals').remove();
    $('#col-totals').remove();
    this.setState({table: table}, () => console.log(table));
  }

  componentDidMount = () => {
    let rows = this.state.table.length;
    let cols = this.state.table[0].length;
    let rowTotals = new Array(rows).fill(0);
    let colTotals = new Array(cols).fill(0);
    for (let row = 0; row < rows; row++) {
      if (!$(`#r${row}`).length) {
        $('#main-table').append(`<tr id="r${row}"></tr>`);
      }
      for (let col = 0; col < cols; col++) {
        if (!$(`#r${row}c${col}`).length) {
          $(`#r${row}`).append(`<td class="c${col}" id="r${row}c${col}"><input type="number" value="${this.state.table[row][col]}"></td>`);
        }
        rowTotals[row] += this.state.table[row][col];
        colTotals[col] += this.state.table[row][col];
      }
    }
    for (let row in rowTotals){
      $(`#r${row}`).append(`<td class="row-totals" id="r${row}-total"><input type="number" value="${rowTotals[row]}"></td>`);
    }

    $('#main-table').append(`<tr id="col-totals"></tr>`);
    for (let col in colTotals){
      $(`#col-totals`).append(`<td id="c${col}-total"><input type="number" value="${colTotals[col]}"></td>`);
    }
  }

  render() {
    return (
      <div>
        <table id="main-table"></table>
        <button onClick={this.addRow}>+Row</button>
      </div>
    );
  }
  
}

export default MainTable;

