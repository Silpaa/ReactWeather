import React from 'react';

var WeatherForm = ({temp,location}) => {
  return(
    <div>
      <h1 className="text-center">It's {temp} in {location}</h1>
    </div>
  );
}

module.exports = WeatherForm;
