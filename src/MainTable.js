
import React from 'react';

class MainTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      table: [[1,2], [1,2]],
    }
  }

  handleChange = (e) => {
    console.log(e);
  }

  addRow = () => {
    let table = this.state.table;
    let cols = this.state.table[0].length;
    table.push(new Array(cols).fill(0));
    this.setState({table: table});
  }

  addCol = () => {
    let table = this.state.table;
    let rows = this.state.table.length;
    for (let row = 0; row < rows; row++) {
      table[row].push(0);
    }
    this.setState({table: table});
  }

  calcTotals = () => {
    let rows = this.state.table.length;
    let cols = this.state.table[0].length;
    let rowTotals = new Array(rows).fill(0);
    let colTotals = new Array(cols).fill(0);
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        rowTotals[row] += this.state.table[row][col];
        colTotals[col] += this.state.table[row][col];
      }
    }
    return [rowTotals, colTotals];
  }

  renderTable = () => {
    let [rowTotals, colTotals] = this.calcTotals();

    return (<div>{this.state.table.map((row, rowIndex) => {
      return (
        <tr>{row.map((col, colIndex) => {
          return <td><input type="number" value={row[colIndex]}/></td>
        })}
        <td><input readOnly type="number" value={rowTotals[rowIndex]}/></td>
        </tr>
      )
    })}
    <tr>{this.state.table[0].map((col, colIndex) => {
      return <td><input readOnly type="number" value={colTotals[colIndex]}/></td>
    })}</tr>
    </div>)
  }

  render() {
    return (
      <div>
        {this.renderTable()}
        <button onClick={this.addRow}>+Row</button>
        <button onClick={this.addCol}>+Col</button>
      </div>
    );
  }
  
}

export default MainTable;

