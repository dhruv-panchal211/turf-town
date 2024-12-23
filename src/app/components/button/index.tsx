"use client";
import { FC, JSX } from "react";
import Styles from "./button.module.css";

interface ButtonProps {
  title: string;
  onClick: () => void;
  preFix?: JSX.Element;
  disabled?: boolean;
  buttonStyling?: string;
  textStyling?: string;
}

const Button: FC<ButtonProps> = ({
  title,
  onClick,
  preFix,
  disabled = false,
  buttonStyling,
  textStyling,
}) => {
  return (
    <button className={`${Styles.button} ${buttonStyling}`} disabled={disabled} onClick={onClick}>
      {preFix && preFix}
      <span className={`${Styles.buttonText} ${textStyling}`}>{title}</span>
    </button>
  );
};

export default Button;
