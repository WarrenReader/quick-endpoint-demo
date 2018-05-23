import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      properties: [],
      rentAmount: ''
    }

    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    axios.get('/get-properties').then(res => this.setState({properties: res.data}))
  }

  onSubmit() {
    axios.get(`/update-properties-list?rentAmount=${this.state.rentAmount}`).then(res => this.setState({properties: res.data}))
  }

  render() {
    let {properties, rentAmount} = this.state;
    let propertiesList = properties.map((e, i) => 
      <div key={i}>
        <h3>Property Name: {e.property}</h3>
        <h3>Monthly Rent: ${e.rent}</h3>
      </div>
    )

    return (
      <div className="App">
        <h1>Restful APIs</h1>

        <h2>Show me rent values less than:</h2>
        <input type="text" value={rentAmount} onChange={(e) => this.setState({rentAmount: e.target.value})} />
          <button onClick={this.onSubmit}>Submit</button>

          {propertiesList}
      </div>
    );
  }
}

export default App;
