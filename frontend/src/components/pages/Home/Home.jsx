import React from 'react';
import styled from 'styled-components';

const StyledHome = styled.div`
  margin: 5rem;
`;

class Home extends React.PureComponent {
  render() {
    return (
      <StyledHome>
        <h1>Home Page</h1>
      </StyledHome>
    );
  }
}

export default Home;
