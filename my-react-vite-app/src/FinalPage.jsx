import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { useNavigate } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
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
  margin: 0;
`;

const TopHalf = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;
  background-image: url('background2.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
  text-align: center;
  padding: 90px;
  @media (max-width: 1140px) {
    padding: 90px 10px;
  }
`;

const Title = styled.h1`
  font-family: 'Grande', sans-serif;
  font-size: 40px;
  line-height: 44px;
  color: white;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-family: 'Proxima Nova', sans-serif;
  font-size: 16px;
  line-height: 16px;
  color: white;
  margin-bottom: 20px;
  max-width: 327px;

  @media (max-width: 1140px) {
    font-size: 18px; /* Increased text size under 1140px */
    line-height: 22px; /* Adjust line height accordingly */
  }
`;

const Button = styled.button`
  font-family: 'Proxima Nova', sans-serif;
  background-color: transparent;
  color: white;
  border: 2px solid white;
  padding: 1rem 2rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #fff;
    color: #0072a3;
  }
`;

const BottomHalf = styled.div`
  width: 100%;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  flex-direction: column;

  @media (max-width: 1140px) {
  padding-top: 50px;
  }
`;

const ColumnsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;
  max-width: 1200px;
  margin-top: 2rem;
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;

  @media (max-width: 1140px) {
    flex-direction: column;
    width: 100%; /* Set the container to full width */
    padding: 1rem; /* Adjust padding for smaller screens */
  }
`;

const Column = styled.div`
  flex: 1;
  text-align: center;
  width: 350px;
  border-radius: 8px;
  position: relative;
  font-family: 'Proxima Nova', sans-serif;
  margin: 30px;
  position: relative;
  top: -175px;

  @media (max-width: 1140px) {
    width: 100%;
    margin: 10px 0;
    height: auto;
  }
`;

const HeartIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 20px;
  height: 20px;
  border: 2px solid black;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: black;
  font-size: 12px;
  cursor: pointer;

  &:after {
    content: '❤';
  }
`;

const ColumnTitle = styled.h3`
  font-family: 'Proxima Nova', sans-serif;
  font-size: 24px;
  color: black;
  padding-top: 30px;
  margin-bottom: 1rem;
  border-radius: 8px;
`;

const ColumnText = styled.p`
  font-family: 'Proxima Nova', sans-serif;
  font-size: 16px;
  color: #555;
  padding: 10px;
  line-height: 1.6;
`;

const ColumnImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 250px;
  object-fit: cover;
  border-radius: 8px;
  // @media (max-width: 1140px) {
  //   width: auto;
  //   object-fit: contain;
  // }
`;

const Price = styled.p`
  font-family: 'Proxima Nova', sans-serif;
  font-size: 18px;
  color: black;
  margin-top: 10px;
  font-weight: bold;
`;

const ProductDescription = styled.p`
  font-family: 'Proxima Nova', sans-serif;
  font-size: 14px;
  color: #555;
  margin-top: 8px;
`;

const FinalPage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/quiz");
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <TopHalf>
          <Title>Build your everyday self care routine.</Title>
          <Subtitle>
            Perfect for if you're looking for soft, nourished skin, our
            moisturizing body washes are made with skin-natural nutrients that work
            with your skin to replenish moisture. With a light formula, the bubbly 
            lather leaves your skin feeling cleansed and cared for.
            And by choosing relaxing fragrances you can add a moment of
            calm to the end of your day.
          </Subtitle>
          <Button onClick={handleButtonClick}>Retake the Quiz</Button>
        </TopHalf>

        <BottomHalf>
          <ColumnsContainer>
            <Column style={{ backgroundColor: '#EEF7FB' }}>
              <ColumnTitle>Daily Routine</ColumnTitle>
              <ColumnText>
                Perfect for if you're looking for soft, nourished skin,
                our moisturizing body washes are made with skin-natural
                nutrients that work with your skin to replenish moisture.
                With a light formula, the bubbly lather leaves your skin
                feeling cleansed and cared for. And by choosing relaxing
                fragrances you can add a moment of calm to the end of your day.
              </ColumnText>
            </Column>

            <Column>
              <HeartIcon />
              <ColumnImage src="background4.jpg" alt="Self care routine" />
              <ProductDescription>
                Milk Body Cleanser
              </ProductDescription>
              <Price>$14.00</Price>
            </Column>

            <Column>
              <HeartIcon />
              <ColumnImage src="background3.jpg" alt="Relaxation and care" />
              <ProductDescription>
                Milk Body Lotion
              </ProductDescription>
              <Price>$12.00</Price>
            </Column>
          </ColumnsContainer>
        </BottomHalf>
      </Container>
    </>
  );
};

export default FinalPage;