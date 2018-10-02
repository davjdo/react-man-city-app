import React, { Component } from 'react';
import Featured from './Featured';
import Matches from './Matches';
import MeetPlayers from './MeetPlayers';

class Home extends Component {
  render() {
    return (
      <div className="bck_blue">
        <Featured />
        <Matches />
        <MeetPlayers />
      </div>
    );
  }
}

export default Home;
