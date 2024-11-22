import { IconContext } from "react-icons";
import css from "./Button.module.css";

const Button = ({ onUpdate, value, icon: Icon }) => {
  return (
    <button className={css[value]} onClick={() => onUpdate(value)}>
      <IconContext.Provider value={{ color: "blue", size: "20px" }}>
        <Icon />
      </IconContext.Provider>
      {value}
    </button>
  );
};

export default Button;
