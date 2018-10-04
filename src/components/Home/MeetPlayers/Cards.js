import React, { Component } from 'react';
import { easePolyOut } from 'd3-ease';
import Animate from 'react-move/Animate';
import PlayerCard from '../../UI/PlayerCard';
import Otamendi from '../../../assets/images/players/Otamendi.png';
import Kompany from '../../../assets/images/players/Kompany.png';
import Mendy from '../../../assets/images/players/Mendy.png';
import Sterling from '../../../assets/images/players/Mendy.png';

class HomeCards extends Component {
  state = {
    cards: [
      {
        number: '30',
        name: 'Otamendi',
        lastName: 'Nicolas',
        image: Otamendi,
        bottom: 90,
        left: 300
      },
      {
        number: '22',
        name: 'Mendy',
        lastName: 'Benjamin',
        image: Mendy,
        bottom: 60,
        left: 200
      },
      {
        number: '4',
        name: 'Kompany',
        lastName: 'Vincent',
        image: Kompany,
        bottom: 30,
        left: 100
      },
      {
        number: '7',
        name: 'Raheem',
        lastName: 'Serling',
        image: Sterling,
        bottom: 0,
        left: 0
      }
    ]
  };

  renderAnimateCards = () =>
    this.state.cards.map((card, i) => (
      <Animate
        key={i}
        show={this.props.show}
        start={{
          bottom: 0,
          left: 0
        }}
        enter={{
          bottom: [card.bottom],
          left: [card.left],
          timing: {
            duration: 500,
            ease: easePolyOut
          }
        }}
      >
        {({ bottom, left }) => {
          return (
            <div
              style={{
                position: 'absolute',
                left,
                bottom
              }}
            >
              <PlayerCard
                number={card.number}
                name={card.name}
                lastName={card.lastName}
                image={card.image}
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
