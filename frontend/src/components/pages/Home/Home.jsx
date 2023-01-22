/* eslint-disable no-undef */
import React from 'react';
import styled from 'styled-components';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Home.css';
import { Link } from 'react-router-dom';

const { Carousel } = require('react-responsive-carousel');

const StyledHome = styled.div`
  @media (min-width: 500px) {
    margin: 2rem;
  }
  @media(max-width: 500px) {
    margin: 0rem;
  }
`;

const StyledCarousel = styled(Carousel)`
  .slide img { 
    max-height: 75vh;
  }
`;

const StyledH1 = styled.h1`
  color: var(--s-t);
`;

const StyledGridContainer = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-items: center;
`;

const StyledGridContainer2 = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 15rem);
  grid-gap: 1rem;
  {/* align-items: center;
  justify-content: center; */}
  @media (max-width: 1600px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const StyledBox = styled.div`;
  background-color: yellow;
  padding: 1rem;
  margin: 0;
  align-self: center;
`;

const StyledSection = styled.section`
  margin-top: 1.3rem;
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
        <StyledCarousel
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
        </StyledCarousel>
        <StyledSection className="types">
          <StyledGridContainer>
            <StyledBox>
              <h1>Top Airing</h1>
              <div className="item-container">
                <img src="https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__480.jpg" className="img" alt="img" />
                <Link to="/anime" className="info-container">
                  <p>Bleach: Thousand-year blood war arc</p>
                  <ul>
                    <li>TV</li>
                    <li>EP 23</li>
                    <li> 23min</li>
                  </ul>
                </Link>
              </div>
              <div className="item-container">
                <img src="https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__480.jpg" className="img" alt="img" />
                <div className="info-container">
                  <p>Bleach: Thousand-year blood war arc</p>
                  <ul>
                    <li>TV</li>
                    <li>EP 23</li>
                    <li> 23min</li>
                  </ul>
                </div>
              </div>
              <div className="item-container">
                <img src="https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__480.jpg" className="img" alt="img" />
                <div className="info-container">
                  <p>Bleach: Thousand-year blood war arc</p>
                  <ul>
                    <li>TV</li>
                    <li>EP 23</li>
                    <li> 23min</li>
                  </ul>
                </div>
              </div>
              <div className="item-container">
                <img src="https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__480.jpg" className="img" alt="img" />
                <div className="info-container">
                  <p>Bleach: Thousand-year blood war arc</p>
                  <ul>
                    <li>TV</li>
                    <li>EP 23</li>
                    <li> 23min</li>
                  </ul>
                </div>
              </div>
              <div className="item-container">
                <img src="https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__480.jpg" className="img" alt="img" />
                <div className="info-container">
                  <p>Bleach: Thousand-year blood war arc</p>
                  <ul>
                    <li>TV</li>
                    <li>EP 23</li>
                    <li> 23min</li>
                  </ul>
                </div>
              </div>
            </StyledBox>
            <StyledBox>
              <h1>Top Airing</h1>
              <div className="item-container">
                <img src="https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__480.jpg" className="img" alt="img" />
                <div className="info-container">
                  <p>Bleach: Thousand-year blood war arc</p>
                  <ul>
                    <li>TV</li>
                    <li>EP 23</li>
                    <li> 23min</li>
                  </ul>
                </div>
              </div>
              <div className="item-container">
                <img src="https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__480.jpg" className="img" alt="img" />
                <div className="info-container">
                  <p>Bleach: Thousand-year blood war arc</p>
                  <ul>
                    <li>TV</li>
                    <li>EP 23</li>
                    <li> 23min</li>
                  </ul>
                </div>
              </div>
              <div className="item-container">
                <img src="https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__480.jpg" className="img" alt="img" />
                <div className="info-container">
                  <p>Bleach: Thousand-year blood war arc</p>
                  <ul>
                    <li>TV</li>
                    <li>EP 23</li>
                    <li> 23min</li>
                  </ul>
                </div>
              </div>
              <div className="item-container">
                <img src="https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__480.jpg" className="img" alt="img" />
                <div className="info-container">
                  <p>Bleach: Thousand-year blood war arc</p>
                  <ul>
                    <li>TV</li>
                    <li>EP 23</li>
                    <li> 23min</li>
                  </ul>
                </div>
              </div>
              <div className="item-container">
                <img src="https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__480.jpg" className="img" alt="img" />
                <div className="info-container">
                  <p>Bleach: Thousand-year blood war arc</p>
                  <ul>
                    <li>TV</li>
                    <li>EP 23</li>
                    <li> 23min</li>
                  </ul>
                </div>
              </div>
            </StyledBox>
            <StyledBox>
              <h1>Top Airing</h1>
              <div className="item-container">
                <img src="https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__480.jpg" className="img" alt="img" />
                <div className="info-container">
                  <p>Bleach: Thousand-year blood war arc</p>
                  <ul>
                    <li>TV</li>
                    <li>EP 23</li>
                    <li> 23min</li>
                  </ul>
                </div>
              </div>
              <div className="item-container">
                <img src="https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__480.jpg" className="img" alt="img" />
                <div className="info-container">
                  <p>Bleach: Thousand-year blood war arc</p>
                  <ul>
                    <li>TV</li>
                    <li>EP 23</li>
                    <li> 23min</li>
                  </ul>
                </div>
              </div>
              <div className="item-container">
                <img src="https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__480.jpg" className="img" alt="img" />
                <div className="info-container">
                  <p>Bleach: Thousand-year blood war arc</p>
                  <ul>
                    <li>TV</li>
                    <li>EP 23</li>
                    <li> 23min</li>
                  </ul>
                </div>
              </div>
              <div className="item-container">
                <img src="https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__480.jpg" className="img" alt="img" />
                <div className="info-container">
                  <p>Bleach: Thousand-year blood war arc</p>
                  <ul>
                    <li>TV</li>
                    <li>EP 23</li>
                    <li> 23min</li>
                  </ul>
                </div>
              </div>
              <div className="item-container">
                <img src="https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__480.jpg" className="img" alt="img" />
                <div className="info-container">
                  <p>Bleach: Thousand-year blood war arc</p>
                  <ul>
                    <li>TV</li>
                    <li>EP 23</li>
                    <li> 23min</li>
                  </ul>
                </div>
              </div>
            </StyledBox>
            <StyledBox>
              <h1>Top Airing</h1>
              <div className="item-container">
                <img src="https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__480.jpg" className="img" alt="img" />
                <div className="info-container">
                  <p>Bleach: Thousand-year blood war arc</p>
                  <ul>
                    <li>TV</li>
                    <li>EP 23</li>
                    <li> 23min</li>
                  </ul>
                </div>
              </div>
              <div className="item-container">
                <img src="https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__480.jpg" className="img" alt="img" />
                <div className="info-container">
                  <p>Bleach: Thousand-year blood war arc</p>
                  <ul>
                    <li>TV</li>
                    <li>EP 23</li>
                    <li> 23min</li>
                  </ul>
                </div>
              </div>
              <div className="item-container">
                <img src="https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__480.jpg" className="img" alt="img" />
                <div className="info-container">
                  <p>Bleach: Thousand-year blood war arc</p>
                  <ul>
                    <li>TV</li>
                    <li>EP 23</li>
                    <li> 23min</li>
                  </ul>
                </div>
              </div>
              <div className="item-container">
                <img src="https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__480.jpg" className="img" alt="img" />
                <div className="info-container">
                  <p>Bleach: Thousand-year blood war arc</p>
                  <ul>
                    <li>TV</li>
                    <li>EP 23</li>
                    <li> 23min</li>
                  </ul>
                </div>
              </div>
              <div className="item-container">
                <img src="https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__480.jpg" className="img" alt="img" />
                <div className="info-container">
                  <p>Bleach: Thousand-year blood war arc</p>
                  <ul>
                    <li>TV</li>
                    <li>EP 23</li>
                    <li> 23min</li>
                  </ul>
                </div>
              </div>
            </StyledBox>
          </StyledGridContainer>
        </StyledSection>
        <StyledSection>
          <StyledGridContainer2>
            <Link to="anime/:id" className="latest">
              <img src="https://img.zorores.com/_r/300x400/100/be/b8/beb8d3d34708ab455d3b97f979f55011/beb8d3d34708ab455d3b97f979f55011.jpg" alt="img" />
              <div>
                <p>Peter Grill and the Philosopher's Time: Supe...</p>
                <ul>
                  <li>TV</li>
                  <li>13m</li>
                </ul>
              </div>
            </Link>
            <div className="latest">
              <img src="https://img.zorores.com/_r/300x400/100/be/b8/beb8d3d34708ab455d3b97f979f55011/beb8d3d34708ab455d3b97f979f55011.jpg" alt="img" />
              <div>
                <p>Peter Grill and the Philosopher's Time: Supe...</p>
                <ul>
                  <li>TV</li>
                  <li>13m</li>
                </ul>
              </div>
            </div>
            <div className="latest">
              <img src="https://img.zorores.com/_r/300x400/100/be/b8/beb8d3d34708ab455d3b97f979f55011/beb8d3d34708ab455d3b97f979f55011.jpg" alt="img" />
              <div>
                <p>Peter Grill and the Philosopher's Time: Supe...</p>
                <ul>
                  <li>TV</li>
                  <li>13m</li>
                </ul>
              </div>
            </div>
            <div className="latest">
              <img src="https://img.zorores.com/_r/300x400/100/be/b8/beb8d3d34708ab455d3b97f979f55011/beb8d3d34708ab455d3b97f979f55011.jpg" alt="img" />
              <div>
                <p>Peter Grill and the Philosopher's Time: Supe...</p>
                <ul>
                  <li>TV</li>
                  <li>13m</li>
                </ul>
              </div>
            </div>
            <div className="latest">
              <img src="https://img.zorores.com/_r/300x400/100/be/b8/beb8d3d34708ab455d3b97f979f55011/beb8d3d34708ab455d3b97f979f55011.jpg" alt="img" />
              <div>
                <p>Peter Grill and the Philosopher's Time: Supe...</p>
                <ul>
                  <li>TV</li>
                  <li>13m</li>
                </ul>
              </div>
            </div>
            <div className="latest">
              <img src="https://img.zorores.com/_r/300x400/100/be/b8/beb8d3d34708ab455d3b97f979f55011/beb8d3d34708ab455d3b97f979f55011.jpg" alt="img" />
              <div>
                <p>Peter Grill and the Philosopher's Time: Supe...</p>
                <ul>
                  <li>TV</li>
                  <li>13m</li>
                </ul>
              </div>
            </div>
          </StyledGridContainer2>
          <StyledH1>Latest Episode</StyledH1>
        </StyledSection>
        <StyledSection>
          <StyledH1>New</StyledH1>
        </StyledSection>
        <StyledSection>
          <StyledH1>Top Upcoming</StyledH1>
        </StyledSection>
      </StyledHome>
    );
  }
}
