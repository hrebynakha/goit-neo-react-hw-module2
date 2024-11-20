import css from "./Feedback.module.css";

const Feedback = ({ feedback, positiveFeedback }) => {
  return (
    <>
      <ul className={css.feedbackList}>
        <li>Good:{feedback.good}</li>
        <li>Neutral:{feedback.neutral}</li>
        <li>Bad:{feedback.bad}</li>
        <li>Positive:{positiveFeedback} %</li>
      </ul>
    </>
  );
};

export default Feedback;
