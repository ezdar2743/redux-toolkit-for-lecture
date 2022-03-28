import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div``;
const ShowCount = styled.h1``;
const Btn = styled.button``;

class App extends Component {
  render() {
    return (
      <Container>
        <ShowCount>Count:</ShowCount>
        <Btn>+</Btn>
        <Btn>-</Btn>
        <Btn>amount+</Btn>
      </Container>
    );
  }
}

export default App;
