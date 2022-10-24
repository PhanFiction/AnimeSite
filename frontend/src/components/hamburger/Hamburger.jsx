import React from 'react';
import styled from 'styled-components';

const HamburgerDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledDiv = styled.div`
  width: 2rem;
  height: 6px;
  border-radius: 10px;
  margin-bottom: 2px;
  background-color: var(--p-t);
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
