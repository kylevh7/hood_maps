import React, {Component} from 'react';
import MapContainer from './map_container.jsx';
import './App.css';
import Sidebar from './sideBar'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Sidebar />
          <MapContainer />
      </div>
    );
  }
}

export default App;
