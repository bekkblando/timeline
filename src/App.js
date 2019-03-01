import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      locations: [{
        lat: 0,
        lng: 0
      }],
      vocabulary: '',
      startdate: '',
      enddate: '',
      notes: ''
    };

    // Constants
    // const this.defaultLocation = 

    this.buildJSON = this.buildJSON.bind(this);
    this.setLocationLng = this.setLocationLng.bind(this);
    this.setLocationLat = this.setLocationLat.bind(this);
    this.addLocation = this.addLocation.bind(this);
  }

  buildJSON = (event) => {
    console.log(this.state);
    event.preventDefault();
  }

  setLocationLng = (event, idx) => {
    let locations = this.state.locations;
    locations[idx]['lng'] = event.target.value
    this.setState({locations: locations})
  }

  setLocationLat = (event, idx) => {
    let locations = this.state.locations;
    locations[idx]['lat'] = event.target.value
    this.setState({locations: locations})
  }

  addLocation = () => {
    let locations = this.state.locations;
    locations.push({lng: 0, lat: 0});
    this.setState({locations: locations})
  }

  render() {
    let locations = this.state.locations;
    console.log(locations)
    return (
      <form onSubmit={this.buildJSON}>
        <label>
          Name:
          <input type="text" onChange = {(event) => this.setState({name: event.target.value})}/>
        </label>
        <button onClick={ this.addLocation }>Add Location</button>
        {
          locations.map((val, idx) => {
              return(
                <div>
                  <label>
                    Longitude:
                    <input type="number" onChange = {(event) => this.setLocationLng(event, idx)}/>
                  </label>
                  <label>
                    Latitude:
                    <input type="number" onChange = {(event) => this.setLocationLat(event, idx)}/>
                  </label>
                </div>
              );
          })
        }
          
        <label>
          Vocabulary:
          <input type="text" onChange = {(event) => this.setState({vocabulary: event.target.value })}/>
        </label>
        <label>
          Start Date:
          <input type="datetime" onChange = {(event) => this.setState({startdate: event.target.value })}/>
        </label>
        <label>
          End Date:
          <input type="endtime" onChange = {(event) => this.setState({enddate: event.target.value })}/>
        </label>
        <label>
          Notes:
          <input type="text" onChange = {(event) => this.setState({notes: event.target.value })}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default App;
