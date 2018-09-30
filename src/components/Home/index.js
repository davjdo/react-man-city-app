import React, { Component } from 'react';
import Featured from './Featured';
import Matches from './Matches';

class Home extends Component {
  render() {
    return (
      <div className="bck_blue">
        <Featured />
        <Matches />
      </div>
    );
  }
}

export default Home;
