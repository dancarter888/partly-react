
import React from 'react';
import './MainTable.css';
import {Container, Row, Col} from 'react-bootstrap';

class MainTable extends React.Component {
  constructor() {
    super();
    this.state = {
      table: [[0,0], [0,0]]
    }
  }

  handleChange = (e, rowIndex, colIndex) => {
    let table = this.state.table;
    let newVal = parseInt(e.target.value);
    table[rowIndex][colIndex] = newVal;
    console.log(e.target.value);
    this.setState({table: table});    
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

    return (<tbody key='body'>{this.state.table.map((row, rowIndex) => {
      return (
        <tr key={rowIndex}>{row.map((col, colIndex) => {
          return <td key={'r'+rowIndex+'c'+colIndex}><input type="number" value={row[colIndex]} onChange={(e) => {this.handleChange(e, rowIndex, colIndex)}}/></td>
        })}
        <td className='totals' key='row-totals'><input readOnly type="number" value={rowTotals[rowIndex]}/></td>
        </tr>
      )
    })}
    <tr>{this.state.table[0].map((col, colIndex) => {
      return <td className='totals' key={colIndex+'col-totals'}><input readOnly type="number" value={colTotals[colIndex]}/></td>
    })}
      <td className='totals' key={'all-totals'}><input readOnly type="number" value={rowTotals.reduce((a, b) => a + b)}/></td>
    </tr>
    </tbody>)
  }

  render() {
    return (
      <div>
        <div id ="table-and-addCol">
          <table >
            {this.renderTable()}
          </table>
          <button className='addButton' id='addCol' onClick={this.addCol} />
        </div>
        <button className='addButton' id='addRow' onClick={this.addRow} />
      </div>
    );
  }
  
}

export default MainTable;

