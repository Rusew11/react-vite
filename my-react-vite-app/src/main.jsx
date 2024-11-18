import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./landingPage";
import QuizPage from "./quizPage";
import QuestionTwo from "./QuestionTwo";
import QuestionThree from "./QuestionThree";
import QuestionFour from "./QuestionFour";
import QuestionFive from "./QuestionFive";
import FinalPage from "./FinalPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/question-two" element={<QuestionTwo />} />
        <Route path="/question-three" element={<QuestionThree />} />
        <Route path="/question-four" element={<QuestionFour />} />
        <Route path="/question-five" element={<QuestionFive />} />
        <Route path="/final-page" element={<FinalPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
