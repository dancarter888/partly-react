
import React from 'react';
import MainTable from './MainTable';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: 2,
      cols: 2
    }
  }

  render() {
    return (
      <div className="App">
        <MainTable rows={this.state.rows} cols={this.state.cols} />
      </div>
    );
  }
}

export default App;
