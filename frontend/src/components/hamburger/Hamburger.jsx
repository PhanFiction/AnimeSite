import React from 'react';
import styled from 'styled-components';

const HamburgerDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledDiv = styled.div`
  width: 35px;
  height: 10px;
  border-radius: 10px;
  margin-bottom: 2px;
  background-color: black;
`;

export default class Hamburger extends React.PureComponent {
  render() {
    return (
      <HamburgerDiv>
        <StyledDiv />
        <StyledDiv />
        <StyledDiv />
      </HamburgerDiv>
    );
  }
}
