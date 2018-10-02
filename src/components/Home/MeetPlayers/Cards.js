import React, { Component } from 'react';
import { easePolyOut } from 'd3-ease';
import Animate from 'react-move/Animate';
import PlayerCard from '../../UI/PlayerCard';
import Otamendi from '../../../assets/images/players/Otamendi.png';

class HomeCards extends Component {
  state = {
    cards: [
      {
        bottom: 90,
        left: 300,
      },
      {
        bottom: 60,
        left: 200,
      },
      {
        bottom: 30,
        left: 100,
      },
      {
        bottom: 0,
        left: 0,
      },
    ],
  };

  renderAnimateCards = () =>
    this.state.cards.map((card, i) => (
      <Animate
        key={i}
        show={this.props.show}
        start={{
          bottom: 0,
          left: 0,
        }}
        enter={{
          bottom: [card.bottom],
          left: [card.left],
          timing: {
            duration: 500,
            ease: easePolyOut,
          },
        }}
      >
        {({ bottom, left }) => {
          return (
            <div
              style={{
                position: 'absolute',
                left,
                bottom,
              }}
            >
              <PlayerCard
                number="30"
                name="Nicolas"
                lastName="Otamendi"
                bck={Otamendi}
              />
            </div>
          );
        }}
      </Animate>
    ));

  render() {
    return <div>{this.renderAnimateCards()}</div>;
  }
}

export default HomeCards;
