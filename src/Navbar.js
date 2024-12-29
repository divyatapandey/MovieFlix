import React from "react";
import styled from "styled-components";

const Nav = styled.div`
  width: 100%;
  height: 70px;
  background: linear-gradient(170deg, #1bc059, #0d47a1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CartCountContainer = styled.div`
  margin-right: 20px;
  position: relative;
  cursor: pointer;
`;

const CartCount = styled.div`
  background-color: yellow;
  border-radius: 50%;
  padding: 4px 8px;
  position: absolute;
  right: 0;
  top: -10px;
  font-size: 12px;
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
`;

const Title = styled.div`
  margin-left: 20px;
  font-size: 40px;
  color: #fff;
  font-weight: 600;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
`;

class Navbar extends React.Component {
  render() {
    const { cartCount } = this.props;
    return (
      <Nav>
        <Title>MOVIE-FLIX</Title>
        <CartCountContainer>
          <img
            alt="cart-icon"
            src="https://cdn-icons-png.flaticon.com/128/3514/3514491.png"
            style={{ height: 48 }}
          />
          <CartCount show={cartCount > 0}>{cartCount}</CartCount>
        </CartCountContainer>
      </Nav>
    );
  }
}

export default Navbar;
