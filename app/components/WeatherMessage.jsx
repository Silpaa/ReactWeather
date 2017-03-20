import React from 'react';

var WeatherForm = ({temp,location}) => {
  return(
    <div>
      <h3>It's {temp} in {location}</h3>
    </div>
  );
}

module.exports = WeatherForm;
