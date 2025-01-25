import React from "react";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Modal = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.4);
  width: 400px;
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: #333;
  font-size: 24px;
`;

const Amount = styled.p`
  font-size: 18px;
  margin-bottom: 30px;
  color: #555;
`;

const ConfirmButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  margin: 4px;

  &:hover {
    background-color: #45a049;
    transform: scale(1.05);
  }

  &:active {
    background-color: #388e3c;
    transform: scale(0.95);
  }

  &:focus {
    outline: none;
  }
`;

const CloseButton = styled.button`
  background-color:#106191;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color:#08407B;
    transform: scale(1.05);
  }

  &:active {
    background-color:#08407B;
    transform: scale(0.95);
  }

  &:focus {
    outline: none;
  }
`;

const PaymentWindow = ({ totalBill, closePaymentWindow }) => {
  const handlePayment = () => {
    alert(`Payment of ₹${totalBill.toFixed(2)} was successful!`);
    closePaymentWindow();
  };

  return (
    <Overlay>
      <Modal>
        <Title>Payment Window</Title>
        <Amount>Total Amount: ₹{totalBill.toFixed(2)}</Amount>
        <ConfirmButton onClick={handlePayment}>Confirm Payment</ConfirmButton>
        <CloseButton onClick={closePaymentWindow}>Close</CloseButton>
      </Modal>
    </Overlay>
  );
};

export default PaymentWindow;
