import React, { Component } from 'react';
import Featured from './Featured';
import Matches from './Matches';
import MeetPlayers from './MeetPlayers';
import Promotion from './Promotion';

class Home extends Component {
  render() {
    return (
      <div className="bck_blue">
        <Featured />
        <Matches />
        <MeetPlayers />
        <Promotion />
      </div>
    );
  }
}

export default Home;
