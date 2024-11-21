import { defaultFeedback, FEEDBACK_KEY } from "../../feedback.config";

function calcFeedbackTotal(feedback) {
  return feedback.good + feedback.neutral + feedback.bad;
}

function calcFeedbackPositive(feedback) {
  return Math.round((feedback.good / calcFeedbackTotal(feedback)) * 100);
}

function getInitialFeedback() {
  const feedback = localStorage.getItem(FEEDBACK_KEY);
  if (feedback !== null) {
    return JSON.parse(feedback);
  }
  return defaultFeedback;
}

export { calcFeedbackPositive, calcFeedbackTotal, getInitialFeedback };
