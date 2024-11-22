import {
  AiOutlineLike,
  AiOutlineDislike,
  AiOutlineQuestion,
  AiOutlineReload,
} from "react-icons/ai";

import css from "./Options.module.css";
import Button from "../Button/Button";

const Options = ({ updateFeedback, totalFeedback }) => {
  return (
    <>
      <ul className={css.optionsList}>
        <li>
          <Button onUpdate={updateFeedback} value="good" icon={AiOutlineLike} />
        </li>
        <li>
          <Button
            onUpdate={updateFeedback}
            value="bad"
            icon={AiOutlineDislike}
          />
        </li>
        <li>
          <Button
            onUpdate={updateFeedback}
            value="neutral"
            icon={AiOutlineQuestion}
          />
        </li>

        <li>
          {totalFeedback !== 0 && (
            <Button
              onUpdate={updateFeedback}
              value="reset"
              icon={AiOutlineReload}
            />
          )}
        </li>
      </ul>
    </>
  );
};

export default Options;
