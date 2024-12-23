'use client';

import { Dispatch, FC, SetStateAction } from 'react';
import styles from './input.module.css';

interface InputProps {
  placeholder: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  inputStyling?: string;
  onBlur?: () => void;
}

const Input: FC<InputProps> = ({
  placeholder,
  value,
  setValue,
  inputStyling,
}) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder}
      className={`${styles.input} ${inputStyling}`}
    />
  );
};

export default Input;
