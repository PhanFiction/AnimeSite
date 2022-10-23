/* eslint-disable no-undef */
import React from 'react';
import styled from 'styled-components';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const { Carousel } = require('react-responsive-carousel');

const StyledHome = styled.div`
  @media (min-width: 300px) {
    margin: 2rem;
  }
  @media(max-width: 300px) {
    margin: 0rem;
  }
`;

// carousel library found at https://github.com/leandrowd/react-responsive-carousel

export default class Home extends React.PureComponent {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <StyledHome>
        <Carousel
          showThumbs={false}
          swipeable
          emulateTouch
          infiniteLoop
          showArrows={false}
          autoPlay
          stopOnHover
          dynamicHeight
        >
          <div>
            <img src="https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__480.jpg" alt="img" />
            <p>Item 1</p>
          </div>
          <div>
            <img src="https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__480.jpg" alt="img" />
            <p>Item 2</p>
          </div>
        </Carousel>
      </StyledHome>
    );
  }
}
