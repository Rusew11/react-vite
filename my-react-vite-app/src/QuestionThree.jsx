import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #f5f5f5;
  padding: 1rem;
`;

const Question = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  width: 100%;
  max-width: 583px;
  font-family: Poppins, sans-serif;
  padding: 1rem; /* Add padding to the question */

  @media screen and (max-width: 1450px) {
    padding-top: 170px;
    font-size: 1.8rem
  }
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;

  @media screen and (max-width: 1450px) {
    flex-direction: column; /* Stack buttons vertically */
    align-items: center;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  width: 100%;

  @media screen and (max-width: 1450px) {
    flex-direction: column; /* Stack buttons vertically under 1450px */
    align-items: center;
  }
`;

const OptionButton = styled.button`
  background-color: ${(props) => (props.selected ? "#0072a3" : "transparent")};
  color: ${(props) => (props.selected ? "white" : "#008cba")};
  border: 2px solid ${(props) => (props.selected ? "#0072a3" : "#008cba")};
  padding: 0.8rem;
  font-size: 0.9rem;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  width: ${(props) => (props.isSecondRow ? "15%" : "20%")};
  margin-right: 10px;
  white-space: nowrap;

  &:hover {
    background-color: ${(props) => (props.selected ? "#0072a3" : "#0072a3")};
    color: white;
  }
  &:last-child {
    margin-right: 0;
  }

  @media screen and (max-width: 1450px) {
    width: 80%;
    margin-bottom: 1rem;
  }
`;

const Navigation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

const NextButton = styled.button`
  background-color: #008cba;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  width: 100%;
  text-align: center;

  &:hover {
    background-color: #0072a3;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  @media screen and (max-width: 1450px) {
    width: 80%; /* Button width for smaller screens */
  }
`;

const BackButton = styled.button`
  background: none;
  color: #555;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    color: #000;
  }
`;

const QuestionThree = () => {
  const { state } = useLocation();
  const [selectedOption, setSelectedOption] = useState(state?.selectedOption || null);
  const navigate = useNavigate();

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    console.log("You selected:", option);
  };

  const handleNextClick = () => {
    navigate("/question-four", { state: { selectedOption } });
  };

  const handleBackClick = () => {
    if (!selectedOption) {
      navigate("/");
    } else {
      navigate(-1, { state: { selectedOption } });
    }
  };

  return (
    <Container>
      <Question>What benefit do you look for in your hair products?</Question>
      <OptionsContainer>
        <Row>
          <OptionButton
            onClick={() => handleOptionClick("Anti-breakage")}
            selected={selectedOption === "Anti-breakage"}
          >
            Anti-breakage
          </OptionButton>
          <OptionButton
            onClick={() => handleOptionClick("Hydration")}
            selected={selectedOption === "Hydration"}
          >
            Hydration
          </OptionButton>
          <OptionButton
            onClick={() => handleOptionClick("Soothing dry scalp")}
            selected={selectedOption === "Soothing dry scalp"}
          >
            Soothing dry scalp
          </OptionButton>
          <OptionButton
            onClick={() => handleOptionClick("Repairs the appearance of damaged hair")}
            selected={selectedOption === "Repairs the appearance of damaged hair"}
          >
            Repairs the appearance of damaged hair
          </OptionButton>
        </Row>

        <Row>
          <OptionButton
            onClick={() => handleOptionClick("Volume")}
            selected={selectedOption === "Volume"}
            isSecondRow
          >
            Volume
          </OptionButton>
          <OptionButton
            onClick={() => handleOptionClick("Curl and coil enhancing")}
            selected={selectedOption === "Curl and coil enhancing"}
            isSecondRow
          >
            Curl and coil enhancing
          </OptionButton>
        </Row>
      </OptionsContainer>
      <Navigation>
        <BackButton onClick={handleBackClick}>Back</BackButton>
        <NextButton onClick={handleNextClick} disabled={!selectedOption}>
          Next Question →
        </NextButton>
      </Navigation>
    </Container>
  );
};

export default QuestionThree;
