import React, { Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { plus, minus, plusAmount } from "./redux/counter";

const Container = styled.div``;
const ShowCount = styled.h1``;
const Btn = styled.button``;

const App = () => {
  const { count } = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <Container>
      <ShowCount>Count:{count}</ShowCount>
      <Btn onClick={() => dispatch(plus())}>+</Btn>
      <Btn onClick={() => dispatch(minus())}>-</Btn>
      <Btn onClick={() => dispatch(plusAmount(123))}>amount+</Btn>
    </Container>
  );
};

export default App;
