import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  font-family: Poppins, sans-serif;
  padding: 10px;
`;

const Options = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  max-width: 100%;
  margin-bottom: 2rem;
  flex-wrap: wrap;

  @media (max-width: 1140px) {
    flex-direction: column;
    align-items: center;
  }
`;

const OptionButton = styled.button`
  background-color: ${(props) => (props.selected ? "#0072a3" : "transparent")};
  color: ${(props) => (props.selected ? "white" : "#008cba")};
  border: 2px solid ${(props) => (props.selected ? "#0072a3" : "#008cba")};
  padding: 1rem 2rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  width: 15%;
  min-width: 120px;
  text-align: center;

  &:hover {
    background-color: #0072a3;
    color: white;
  }

  @media (max-width: 1140px) {
    width: 80%;
    margin-bottom: 10px;
  }
`;

const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  gap: 0.5rem;
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

const QuestionFive = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleFinishQuiz = () => {
    navigate("/final-page");
  };

  const handleBackClick = () => {
    navigate("/question-four");
  };

  return (
    <Container>
      <Question>What is your natural hair color(s) today?</Question>
      <Options>
        <OptionButton onClick={() => handleOptionClick("Black")}>
          Black
        </OptionButton>
        <OptionButton onClick={() => handleOptionClick("Brown")}>
          Brown
        </OptionButton>
        <OptionButton onClick={() => handleOptionClick("Blonde")}>
          Blonde
        </OptionButton>
        <OptionButton onClick={() => handleOptionClick("Red/Orange")}>
          Red/Orange
        </OptionButton>
        <OptionButton onClick={() => handleOptionClick("Silver/Grey")}>
          Silver/Grey
        </OptionButton>
      </Options>
      <Navigation>
        <NextButton onClick={handleFinishQuiz} disabled={!selectedOption}>
          Finish Quiz
        </NextButton>
        <BackButton onClick={handleBackClick}>Back</BackButton>
      </Navigation>
    </Container>
  );
};

export default QuestionFive;