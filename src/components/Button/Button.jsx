import css from "./Button.module.css";

const Button = ({ onUpdate, value }) => {
  return (
    <button className={css.btn} onClick={() => onUpdate(value)}>
      {value}
    </button>
  );
};

export default Button;
