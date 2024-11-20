import "./App.css";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import { useEffect, useState } from "react";
import Notification from "./components/Notification/Notification";

const defaultFeedback = {
  good: 0,
  neutral: 0,
  bad: 0,
};

function calcFeedbackTotal(feedback) {
  return feedback.good + feedback.neutral + feedback.bad;
}

function calcFeedbackPositive(feedback) {
  return Math.round((feedback.good / calcFeedbackTotal(feedback)) * 100);
}

function getInitialFeedback() {
  const feedback = localStorage.getItem("feedback");
  if (feedback !== null) {
    return JSON.parse(feedback);
  }
  return defaultFeedback;
}

function App() {
  const [feedback, setFeedback] = useState(getInitialFeedback);
  const totalFeedback = calcFeedbackTotal(feedback);
  const positiveFeedback = calcFeedbackPositive(feedback);

  const updateFeedback = (feedbackType) => {
    if (feedbackType === "reset") {
      setFeedback({
        ...defaultFeedback,
      });
      return;
    }
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    });
  };

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} />
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback feedback={feedback} positiveFeedback={positiveFeedback} />
      )}
    </>
  );
}

export default App;
