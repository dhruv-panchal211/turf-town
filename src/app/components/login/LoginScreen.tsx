import { Dispatch, FC, SetStateAction } from "react";
import Button from "../button";
import Input from "../input";
import styles from "./loginScreen.module.css";

interface LoginScreenProps {
  phoneNumber: string;
  setPhoneNumber: Dispatch<SetStateAction<string>>;
  nextStep: () => void;
}

const LoginScreen: FC<LoginScreenProps> = ({ phoneNumber, setPhoneNumber, nextStep }) => {
  const isCorrectPhoneLength = phoneNumber.length === 10;

  return (
    <div className={styles.loginScreen}>
      <div className={styles.phoneWrapper}>
        <div className={styles.countrySelection}>
          <span>🇮🇳</span>
          <div className={styles.countrySelectionDivider}></div>
          <span>+91</span>
        </div>
        <Input
          placeholder="Enter your phone number"
          value={phoneNumber}
          setValue={(value) => {
            if (value.length <= 10) {
              setPhoneNumber(value);
            }
          }}
          inputStyling={styles.phoneNumber}
        />
      </div>
      <Button
        title="Continue"
        onClick={nextStep}
        disabled={!isCorrectPhoneLength}
        buttonStyling={!isCorrectPhoneLength ? styles.submitCodeDisabled : styles.submitCodeEnabled}
        textStyling={!isCorrectPhoneLength ? styles.textDisabled : styles.textEnabled}
      />
    </div>
  );
};

export default LoginScreen;
