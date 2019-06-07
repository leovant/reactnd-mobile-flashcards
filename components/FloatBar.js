import React, { Component } from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export default class FloatBar extends Component {
  render() {
    return <Container>{this.props.children}</Container>;
  }
}
