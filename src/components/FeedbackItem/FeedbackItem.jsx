import { IconContext } from "react-icons";
import css from "./FeedbackItem.module.css";

const FeedbackItem = ({ name, value, icon: Icon, color = "#333333" }) => {
  return (
    <div className={css.feedbackItem}>
      <span>
        {name}: {value}
      </span>
      <IconContext.Provider value={{ color: color, size: "25px" }}>
        <Icon />
      </IconContext.Provider>
    </div>
  );
};

export default FeedbackItem;
