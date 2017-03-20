import React from 'react';

export default class WeatherForm extends React.Component{
  constructor(props) {
      super(props);
      this.onFormSubmit = this.onFormSubmit.bind(this);
    }

  onFormSubmit(event){
    var loc = this.location.value;
    if(loc.length > 0){
      this.location.value = '';
      this.props.onSearch(loc);
    }

    event.preventDefault();
  }
  render(){
    return(
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input
          type="search"
          ref={(input) => { this.location = input; }}  placeholder="Search weather by city"/>
        <button className="button expanded hollow">Get Weather</button>
        </form>
      </div>

    );
  }
};
