import React, { Component } from "react";
import styled from "styled-components";
import SearchForm from "./SearchForm";

const HDiv = styled.div`
  display: flex;
  position: fixed;
  height: 58px;
  left: 0;
  top: 0;
  justify-content: center;
  width: 100%;
  overflow-y: hidden;
  z-index: 999;
  background-color: #4553f4;
  box-shadow: 0 4px 3px rgba(49, 54, 68, 0.3);
`;
const HeadWrap = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  width: 100%;
  margin-left: 10%;
  margin-right: 10%;
`;

class Header extends Component {
  render() {
    return (
      <HDiv>
        <HeadWrap>
          <SearchForm />
        </HeadWrap>
      </HDiv>
    );
  }
}
export default Header;
