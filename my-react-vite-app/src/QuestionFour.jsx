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
  padding: 10px;
`;

const OptionsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;
  overflow-x: auto;

  @media (max-width: 750px) {
    flex-direction: column;
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
  width: 16%;
  margin-right: 10px;
  white-space: nowrap;

  &:hover {
    background-color: ${(props) => (props.selected ? "#0072a3" : "#0072a3")};
    color: white;
  }

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 750px) {
    width: 80%;
    margin-bottom: 10px;
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

const QuestionFour = () => {
  const { state } = useLocation();
  const [selectedOption, setSelectedOption] = useState(state?.selectedOption || null);
  const navigate = useNavigate();

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleNextClick = () => {
    navigate("/question-five", { state: { selectedOption } });
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
      <Question>Is there anything troubling you about your hair?</Question>
      <OptionsContainer>
        <OptionButton
          onClick={() => handleOptionClick("Breakage")}
          selected={selectedOption === "Breakage"}
        >
          Breakage
        </OptionButton>
        <OptionButton
          onClick={() => handleOptionClick("Frizz")}
          selected={selectedOption === "Frizz"}
        >
          Frizz
        </OptionButton>
        <OptionButton
          onClick={() => handleOptionClick("Scalp dryness")}
          selected={selectedOption === "Scalp dryness"}
        >
          Scalp dryness
        </OptionButton>
        <OptionButton
          onClick={() => handleOptionClick("Damage")}
          selected={selectedOption === "Damage"}
        >
          Damage
        </OptionButton>
        <OptionButton
          onClick={() => handleOptionClick("Tangling")}
          selected={selectedOption === "Tangling"}
        >
          Tangling
        </OptionButton>
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

export default QuestionFour;