import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

// Styled components (same as your previous code)
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
`;

const OptionsContainer = styled.div`
  display: flex;
  justify-content: center; /* Center the buttons horizontally */
  align-items: center;    /* Center the buttons vertically */
  width: 100%;            /* Ensure container spans full width */
  flex-wrap: wrap;        /* Allow wrapping if necessary (in case of small screen) */
  margin-bottom: 2rem;
`;

const OptionButton = styled.button`
  background-color: ${(props) => (props.selected ? "#0072a3" : "transparent")};
  color: ${(props) => (props.selected ? "white" : "#008cba")};
  border: 2px solid ${(props) => (props.selected ? "#0072a3" : "#008cba")};
  padding: 1rem;
  font-size: 0.8rem; /* Smaller font size */
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  width: 15%; /* Fixed width to ensure buttons stay on one row */
  margin: 10px; /* Add space between buttons */

  &:hover {
    background-color: ${(props) => (props.selected ? "#0072a3" : "#0072a3")};
    color: white;
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

const QuestionTwo = () => {
  const { state } = useLocation();
  const [selectedOption, setSelectedOption] = useState(state?.selectedOption || null);
  const navigate = useNavigate();

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    console.log("You selected:", option);
  };

  const handleNextClick = () => {
    navigate("/question-three", { state: { selectedOption } });
  };

  const handleBackClick = () => {
    if (!selectedOption) {
    } else {
      navigate(-1, { state: { selectedOption } });
    }
  };

  return (
    <Container>
      <Question>How often do you wash your hair?</Question>
      <OptionsContainer>
        <OptionButton
          onClick={() => handleOptionClick("Daily")}
          selected={selectedOption === "Daily"}
        >
          Daily
        </OptionButton>
        <OptionButton
          onClick={() => handleOptionClick("Every other day")}
          selected={selectedOption === "Every other day"}
        >
          Every other day
        </OptionButton>
        <OptionButton
          onClick={() => handleOptionClick("Twice a week")}
          selected={selectedOption === "Twice a week"}
        >
          Twice a week
        </OptionButton>
        <OptionButton
          onClick={() => handleOptionClick("Once a week")}
          selected={selectedOption === "Once a week"}
        >
          Once a week
        </OptionButton>
        <OptionButton
          onClick={() => handleOptionClick("Once every two weeks")}
          selected={selectedOption === "Once every two weeks"}
        >
          Once every two weeks
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

export default QuestionTwo;
