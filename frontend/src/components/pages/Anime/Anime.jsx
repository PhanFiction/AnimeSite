import React from 'react';

export default class Anime extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <section>
        <img src="https://img.zorores.com/_r/300x400/100/b3/da/b3da1326e07269ddd8d73475c5dabf2c/b3da1326e07269ddd8d73475c5dabf2c.jpg" alt="" />
        <div>
          <h1>Chainsaw Man</h1>
          <ul><li /></ul>
          <div>
            <button> Watch Now </button>
            <button> Add to List </button>
          </div>
          <p>
            {' '}
            Denji is robbed of a normal teenage life,
            left with nothing but his deadbeat father's overwhelming debt.
            His only companion is his pet, the chainsaw devil Pochita,
            with whom he slays devils for money that inevitably
            ends up in the yakuza's pockets. All Denji can ...+ More
            {' '}

          </p>
        </div>
      </section>
    );
  }
}
