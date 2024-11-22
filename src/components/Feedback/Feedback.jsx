import FeedbackItem from "../FeedbackItem/FeedbackItem";
import css from "./Feedback.module.css";

import { AiTwotoneSmile, AiTwotoneFrown, AiTwotoneMeh } from "react-icons/ai";
import { FaFaceGrinBeam, FaFaceFrown, FaFaceGrimace } from "react-icons/fa6";

const Feedback = ({ feedback, positiveFeedback }) => {
  const positiveFeedbackIcon =
    positiveFeedback > 70
      ? FaFaceGrinBeam
      : positiveFeedback > 40
      ? FaFaceGrimace
      : FaFaceFrown;
  return (
    <>
      <ul className={css.feedbackList}>
        <li>
          <FeedbackItem
            name="Good"
            value={feedback.good}
            icon={AiTwotoneSmile}
          />
        </li>
        <li>
          <FeedbackItem
            name=" Neutral"
            value={feedback.neutral}
            icon={AiTwotoneMeh}
          />
        </li>
        <li>
          <FeedbackItem name="Bad" value={feedback.bad} icon={AiTwotoneFrown} />
        </li>
        <li>
          <FeedbackItem
            name="Positive"
            value={positiveFeedback}
            icon={positiveFeedbackIcon}
          />
        </li>
      </ul>
    </>
  );
};

export default Feedback;
