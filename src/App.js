import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component{
  state = {
    show : true
   // this.manojData = this.manojData.bind(this)
  }
  
  manojData = () => {
    const { show } = this.state;
    // this.setState({show : false})
    this.setState({ show : !show})
  }

  render(){
    return(
      <div className="App" >
        <h2>Click the button to hide & show the data</h2>
        <button className="Btn" onClick={this.manojData}>Boom</button>
        {this.state.show && <Data />}
      </div>
    );
  }
}
class Data extends Component{
  render (){
    return(
      <div className="Para">
        <p>MANOJ</p>
        <p>VS</p>
        <p>HIPHOP</p>
        <p>RAP</p>
      </div>
    );
  }
}
export default App;
