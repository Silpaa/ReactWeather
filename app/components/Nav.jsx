import React from 'react';
import {Link,IndexLink} from 'react-router';

class Nav extends React.Component{
  constructor(props){
    super(props);
    this.onSearch = this.onSearch.bind(this);
  }
  onSearch(e){
    e.preventDefault();//prevents browser from refreshing the page
    var location = this.refs.searchtxt.value;
    var encodedLocation = encodeURIComponent(location);
    console.log("onSearch1 <> "+encodedLocation);
    if(location.length > 0){
      this.refs.searchtxt.value = '';
      window.location.hash = '#/?location=' + encodedLocation;
    }
  }
  render(){
    return(
      <div className="top-bar">
          <div className="top-bar-left">
            <ul className="menu">
              <li className="menu-text">React Weather</li>
              <li>
                <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather </IndexLink>
              </li>
              <li>
                <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About </Link>
              </li>
              <li>
                <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples </Link>
              </li>
            </ul>
          </div>
          <div className="top-bar-right">
            <form onSubmit={this.onSearch}>
              <ul className="menu">
                <li>
                  <input type="search" placeholder="Search weather by city" ref="searchtxt"/>
                </li>
                <li>
                  <input type="submit" className="button" value="Get Weather"/>
                </li>
              </ul>
            </form>
          </div>
      </div>

    );
  }
}
module.exports = Nav;
