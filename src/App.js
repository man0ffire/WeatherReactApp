import React, { Component } from 'react';
import SearchBar from './containers/search_bar';
import WeatherList from './containers/weather_list';


class App extends Component {
  render() {
    return (
      <div className='container'>
        <div class="page-header">
          <h1>Weather Search <small>Search for your favorite city and get a five day visual forecast</small></h1>
        </div>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}

export default App;
