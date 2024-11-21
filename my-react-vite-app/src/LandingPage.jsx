import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { useNavigate } from "react-router-dom";

// Global styles to prevent scrolling
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    overflow: hidden;
    width: 100%;
  }

  #root {
    height: 100%;
    width: 100%;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  overflow: hidden;
`;

const TopHalf = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;
  background-image: url('background.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
  text-align: center;
`;

const Title = styled.h1`
  font-family: 'Grande', sans-serif;
  font-size: 40px;
  line-height: 44px;
  color: white;
  margin-bottom: 10px;

    @media screen and (max-width: 750px) {
    font-size: 28px;
    margin-bottom: 15px;
    padding: 0 20px;
  }
`;

const Subtitle = styled.p`
  font-family: 'Proxima Nova', sans-serif;
  font-size: 16px;
  line-height: 16px;
  color: white;
  margin-bottom: 20px;
  max-width: 327px;
`;

const Button = styled.button`
  font-family: 'Proxima Nova', sans-serif;
  background-color: #C3EDFF;
  color: black;
  border: none;
  padding: 1rem 2rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #A6D1F1;
  }
`;

const BottomHalf = styled.div`
  width: 100%;
  height: 50vh;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const LandingPage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/quiz");
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <TopHalf>
          <Title>Build a self care routine suitable for you</Title>
          <Subtitle>Take our test to get a personalised self care routine based on your needs.</Subtitle>
          <Button onClick={handleButtonClick}>Start Quiz</Button>
        </TopHalf>
        <BottomHalf>
        </BottomHalf>
      </Container>
    </>
  );
};

export default LandingPage;