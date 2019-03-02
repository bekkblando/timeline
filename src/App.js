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
      vocabulary: [{
        word: "",
        meaning: ""
      }],
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

  setWord(event, idx){
    let words = this.state.vocabulary
    words[idx]["word"] = event.target.value
    console.log(words)
    this.setState({vocabulary: words})
  }

  setMeaning = (event, idx) => {
    let words = this.state.vocabulary
    words[idx]["meaning"] = event.target.value
    console.log(words)
    this.setState({vocabulary: words});
  }

  addVocabulary = () => {
    let words = this.state.vocabulary;
    words.push({word: "", meaning: ""});
    this.setState({vocabulary: words})
  }

  render() {
    let locations = this.state.locations;
    let vocabulary = this.state.vocabulary;
    return (
      <div class = "container">
        <form onSubmit={this.buildJSON}>

      <div class = "row">
        <div class = "col s6">
            <h1>Name:</h1>
            <input class="input-field" type="text" onChange = {(event) => this.setState({name: event.target.value})}/>
            <h1>Location</h1>
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
        </div>
      </div>

        <div class="col s6">
          <h1>Vocabulary:</h1>
          {
            vocabulary.map((val, idx) => {
              return(
                <div>
                  <label>
                    Word
                    <input class="input-field" type="text" onChange = {(event) => this.setWord(event, idx)}/>
                  </label>
                  <label>
                    Meaning
                    <input class="input-field" type="text" onChange = {(event) => this.setMeaning(event, idx)}/>
                  </label>
                </div>
              );
            })
          }
          <button onClick={ this.addVocabulary }>Add Vocabulary</button>
      </div>

          <label>
            <h1>Start Date:</h1>
            <input type="datetime" class="input-field" onChange = {(event) => this.setState({startdate: event.target.value })}/>
          </label>
          <label>
            <h1>End Date:</h1>
            <input type="endtime" class="input-field"  onChange = {(event) => this.setState({enddate: event.target.value })}/>
          </label>
          <label>
            <h1>Notes:</h1>
            <input class="input-field" type="text" onChange = {(event) => this.setState({notes: event.target.value })}/>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default App;
