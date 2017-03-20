import React from 'react';

export default class WeatherForm extends React.Component{
  constructor(props) {
      super(props);
      this.onFormSubmit = this.onFormSubmit.bind(this);
    }

  onFormSubmit(event){
    var loc = this.location.value;
    console.log('1 A location was submitted: ' + loc);
    if(loc.length > 0){
      this.location.value = '';
      this.props.onSearch(loc);
    }
    console.log('2 A location was submitted: ' + loc);

    event.preventDefault();
  }
  render(){
    return(
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input
          type="text"
          ref={(input) => { this.location = input; }} />
        <button className="button expanded hollow">Get Weather</button>
        </form>
      </div>

    );
  }
};
