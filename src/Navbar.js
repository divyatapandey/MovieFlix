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
  font-size: 48px;
  font-weight: 700;
  font-family: "Poppins", sans-serif; /* Modern and clean font */
  background: linear-gradient(90deg, #ffffff, #e0e0e0); /* Gradient in shades of white */
  -webkit-background-clip: text; /* Apply gradient to text only */
  -webkit-text-fill-color: transparent; /* Makes the text transparent to show the gradient */
  text-transform: uppercase; /* Makes text uppercase for emphasis */
  letter-spacing: 2px; /* Adds spacing between letters */
  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.2); /* Subtle shadow for depth */
  text-align: center;

}
`;



const FaviconWrapper = styled.div`
  width: 40px;
  height: 40px;
  background-color:#383838; /* Black background */
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
