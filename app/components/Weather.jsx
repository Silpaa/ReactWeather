import React from 'react';
import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';
import openWeatherMap from '../api/openWeatherMap';
import ErrorModal from './ErrorModal'

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleSearch(location){
    var that = this;
    this.setState({
        isLoading: true,
        errorMessage: undefined,
        location: undefined,
        temp: undefined
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
  componentDidMount(){
    var location = this.props.location.query.location;
    if(location && location.length > 0){
      this.handleSearch(location);
      window.location.hash = '#/';

    }
  }
  componentWillReceiveProps(newProps){
    var location = newProps.location.query.location;
    if(location && location.length > 0){
      this.handleSearch(location);
      window.location.hash = '#/';

    }
  }
  render(){
    var {isLoading,temp,location,errorMessage} = this.state;

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
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
}

module.exports = Weather;
