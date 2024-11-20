import css from "./Options.module.css";
import Button from "../Button/Button";

const Options = ({ updateFeedback, totalFeedback }) => {
  return (
    <>
      <ul className={css.optionsList}>
        <li>
          <Button onUpdate={updateFeedback} value="good" />
        </li>
        <li>
          <Button onUpdate={updateFeedback} value="neutral" />
        </li>
        <li>
          <Button onUpdate={updateFeedback} value="bad" />
        </li>
        <li>
          {totalFeedback !== 0 && (
            <Button onUpdate={updateFeedback} value="reset" />
          )}
        </li>
      </ul>
    </>
  );
};

export default Options;
