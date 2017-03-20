import React from 'react';
import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';
import openWeatherMap from '../api/openWeatherMap';
import ErrorModal from './ErrorModal'

export default class Weather extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isLoading: false
    }
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleSearch(location){
    var that = this;
console.log("What is isLoading1..."+this.state.isLoading);
    this.setState({
        isLoading: true,
        errorMessage: undefined
    });

    openWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    },function(e){

      that.setState({
        isLoading: false,
        errorMessage: e.message
      });
    })
  }
  render(){
    var {isLoading,temp,location,errorMessage} = this.state;



    console.log("What is isLoading2..."+isLoading);
    function renderMessage(){
      if(isLoading){
        return <h3 className="text-center">Fetching Weather...</h3>
      } else if (temp && location) {
        console.log("What is isLoading3..."+isLoading)
        return <WeatherMessage temp={temp} location={location} />;
      }
    }

    function renderError(){
      if(typeof errorMessage === 'string'){
        return (
          <ErrorModal message={errorMessage}/>
        )
      }
    }
    return(
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
};
