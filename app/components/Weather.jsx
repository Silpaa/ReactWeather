import React from 'react';
import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';
import openWeatherMap from '../api/openWeatherMap'

export default class Weather extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isLoading: false
    }

    this.handleSearch = this.handleSearch.bind(this);
  }
  handleSearch(location){
    debugger;
    var that = this;
console.log("What is isLoading1..."+this.state.isLoading);
    this.setState({isLoading: true});
    openWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    },function(errorMessage){

      that.setState({isLoading: false});
      alert(errorMessage);
    })
  }
  render(){
    var {isLoading,temp,location} = this.state;
    console.log("What is isLoading2..."+isLoading);
    function renderMessage(){
      if(isLoading){
        return <h3>Fetching Weather...</h3>
      } else if (temp && location) {
        console.log("What is isLoading3..."+isLoading)
        return <WeatherMessage temp={temp} location={location} />;
      }
    }
    return(
      <div>
        <h3>Get Weather</h3>
        <WeatherForm onSearch={this.handleSearch}/>

        {renderMessage()}
      </div>
    );
  }
};
