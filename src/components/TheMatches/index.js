import React, { Component } from 'react';
import { CircularProgress } from '@material-ui/core';
import { firebaseMatches } from '../../firebase';
import { firebaseLooper, reverseArray } from '../UI/misc';
import MatchesList from './MatchesList';
import LeagueTable from './LeagueTable';

class TheMatches extends Component {
  state = {
    loading: true,
    matches: [],
    filterMatches: [],
    playedFilter: 'All',
    resultFilter: 'All'
  };

  componentDidMount() {
    firebaseMatches.once('value').then(snapshot => {
      const matches = firebaseLooper(snapshot);
      this.setState({
        loading: false,
        matches: reverseArray(matches),
        filterMatches: reverseArray(matches)
      });
    });
  }

  renderPlayed = played => {
    const list = this.state.matches.filter(match => {
      return match.final === played;
    });
    this.setState({
      filterMatches: played === 'All' ? this.state.matches : list,
      playedFilter: played,
      resultFilter: 'All'
    });
  };

  renderResult = result => {
    const list = this.state.matches.filter(match => {
      return match.result === result;
    });
    this.setState({
      filterMatches: result === 'All' ? this.state.matches : list,
      playedFilter: 'All',
      resultFilter: result
    });
  };

  render() {
    const state = this.state;
    return (
      <div className="the_matches_container">
        <div className="the_matches_wrapper">
          <div className="left">
            <div className="match_filters">
              <div className="match_filters_box">
                <div className="tag">Show Match</div>
                <div className="cont">
                  <div
                    className={`option ${
                      state.playedFilter === 'All' ? 'active' : ''
                    }`}
                    onClick={() => this.renderPlayed('All')}
                  >
                    All
                  </div>
                  <div
                    className={`option ${
                      state.playedFilter === 'Yes' ? 'active' : ''
                    }`}
                    onClick={() => this.renderPlayed('Yes')}
                  >
                    Played
                  </div>
                  <div
                    className={`option ${
                      state.playedFilter === 'No' ? 'active' : ''
                    }`}
                    onClick={() => this.renderPlayed('No')}
                  >
                    Not Played
                  </div>
                </div>
              </div>
              <div className="match_filters_box">
                <div className="tag">Result Match</div>
                <div className="cont">
                  <div
                    className={`option ${
                      state.resultFilter === 'All' ? 'active' : ''
                    }`}
                    onClick={() => this.renderResult('All')}
                  >
                    All
                  </div>
                  <div
                    className={`option ${
                      state.resultFilter === 'W' ? 'active' : ''
                    }`}
                    onClick={() => this.renderResult('W')}
                  >
                    W
                  </div>
                  <div
                    className={`option ${
                      state.resultFilter === 'L' ? 'active' : ''
                    }`}
                    onClick={() => this.renderResult('L')}
                  >
                    L
                  </div>
                  <div
                    className={`option ${
                      state.resultFilter === 'D' ? 'active' : ''
                    }`}
                    onClick={() => this.renderResult('D')}
                  >
                    D
                  </div>
                </div>
              </div>
            </div>
            <MatchesList matches={state.filterMatches} />
          </div>
          <div className="right">
            <LeagueTable />
          </div>
        </div>
      </div>
    );
  }
}

export default TheMatches;
