import React from 'react';


var About =(props) => {
  return(
    <div>
    <h1 className="text-center page-title">About</h1>
    <p>This is a Weather Application built on React.I have built on my own.</p>
    <p>
      Here are some of the tools I used:
    </p>
    <ul>
      <li>
        <a href="https://facebook.github.io/react">React</a>-This was the Javascript framework used.
      </li>
      <li>
        <a href="http://openweathermap.org">Open Weather Map</a>- This is the Weather API used.
      </li>
    </ul>
    </div>
  )
};

module.exports = About;
