import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');

  body {
    font-family: 'Poppins', sans-serif;
  }
`;

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
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;

const OptionButton = styled.button`
  background-color: ${(props) => (props.selected ? "#0072a3" : "transparent")};
  color: ${(props) => (props.selected ? "white" : "#008cba")};
  border: 2px solid ${(props) => (props.selected ? "#0072a3" : "#008cba")};
  padding: 1rem;
  font-size: 0.8rem;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  width: 15%;
  margin: 10px;

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

const QuizPage = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleNextClick = () => {
    navigate("/question-two", { state: { selectedOption } });
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Question>What's your hair type or texture?</Question>
        <OptionsContainer>
          <OptionButton
            onClick={() => handleOptionClick("Straight")}
            selected={selectedOption === "Straight"}
          >
            Straight
          </OptionButton>
          <OptionButton
            onClick={() => handleOptionClick("Curly")}
            selected={selectedOption === "Curly"}
          >
            Curly
          </OptionButton>
          <OptionButton
            onClick={() => handleOptionClick("Wavy")}
            selected={selectedOption === "Wavy"}
          >
            Wavy
          </OptionButton>
          <OptionButton
            onClick={() => handleOptionClick("Fine")}
            selected={selectedOption === "Fine"}
          >
            Fine
          </OptionButton>
        </OptionsContainer>
        <Navigation>
          <BackButton onClick={() => navigate("/")}>Back</BackButton>
          <NextButton onClick={handleNextClick} disabled={!selectedOption}>
            Next Question →
          </NextButton>
        </Navigation>
      </Container>
    </>
  );
};

export default QuizPage;
