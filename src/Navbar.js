import React from "react";
import styled from "styled-components";
import PaymentWindow from './PaymentWindow';

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
  // margin: 8px;
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
  font-size: 40px;
  color: #fff;
  font-weight: 600;
  font-family: "Montserrat", sans-serif;
`;


const FaviconWrapper = styled.div`
  width: 40px;
  height: 40px;
  background-color: black; /* Black background */
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%; /* Optional: to make it round if the image is square */
  margin-right: 10px;
`;

const Favicon = styled.img`
  width: 50px;  /* Adjust image size */
  height: 50px; /* Adjust image size */
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

class Navbar extends React.Component {
  state = { showPayment: false };

  togglePaymentWindow = () => {
    this.setState({ showPayment: !this.state.showPayment });
  };

  render() {
    const { cartCount, totalBill } = this.props;
    const { showPayment } = this.state;

    return (
      <div>
        <Nav>
        <TitleContainer>
        <FaviconWrapper>
              <Favicon src="favicon.png" alt="Movie-Flix Logo" />
            </FaviconWrapper>
            <Title>MovieFlix</Title>
          </TitleContainer>
          <div style={{ display: "flex", alignItems: "center" }}>
            {/* <TotalBill>Total: ₹{totalBill.toFixed(2)}</TotalBill> */}
            {/* <PayButton >Pay</PayButton> */}
            <CartCountContainer onClick={this.togglePaymentWindow}>
              <img
                alt="cart-icon"
                src="https://cdn-icons-png.flaticon.com/128/3514/3514491.png"
                style={{ height: 48 }}
              />
              <CartCount show={cartCount > 0}>{cartCount}</CartCount>
            </CartCountContainer>
          </div>
        </Nav>
        {showPayment && (
          <PaymentWindow
            totalBill={totalBill}
            closePaymentWindow={this.togglePaymentWindow}
          />
        )}
      </div>
    );
  }
}

export default Navbar;
