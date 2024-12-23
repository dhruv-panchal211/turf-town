import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import Button from "../button";
import Input from "../input";
import styles from "./loginScreen.module.css";
import { Toast } from "../toast/Toast";
import { useToast } from "@/hooks/useToast";
import ToastMessage from "../toast";
import { formatTime } from "@/utils/helpers";

interface EnterPhoneCodeProps {
  code: string;
  setCode: Dispatch<SetStateAction<string>>;
}

const EnterPhoneCode: FC<EnterPhoneCodeProps> = ({ code, setCode }) => {
  const { isVisible, message = <></>, showToast } = useToast();

  const [resendTimer, setResendTimer] = useState<number>(90);
  const [startTimer, setStartTimer] = useState<boolean>(true);
  const [isIncorrectCode, setIsIncorrectCode] = useState<boolean>(false);

  const isCodeLengthValid = code.length === 4;
  const correctCode = "4467";

  const submitCode = () => {
    if (code === correctCode) {
      setIsIncorrectCode(false);
    } else {
      setIsIncorrectCode(true);
    }
  };

  const resendCode = () => {
    setResendTimer(90);
    setStartTimer(true);
    showToast(<ToastMessage />);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (startTimer) {
        setResendTimer((prevTime) => {
          if (prevTime <= 0) {
            setStartTimer(false);
            clearInterval(timer);
            return 0;
          }
          return prevTime - 1;
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [startTimer]);

  return (
    <>
      <div className={styles.loginScreen}>
        <div className={`${styles.phoneWrapper} ${styles.codeWrapper}`}>
          <Input
            placeholder="Enter the 4 digit code"
            value={code}
            setValue={(value) => {
              if (typeof value === "string" && /^\d*$/.test(value)) {
                setCode(value);
                setIsIncorrectCode(false);
              }
            }}
            inputStyling={`${styles.codeInput} ${
              isIncorrectCode ? styles.incorrectCode : styles.codeInput
            }`}
          />
          {isIncorrectCode && <span className={styles.incorrectText}>Incorrect Code!</span>}
        </div>
        <Button
          title="Continue"
          onClick={submitCode}
          disabled={!isCodeLengthValid}
          buttonStyling={`${
            !isCodeLengthValid ? styles.submitCodeDisabled : styles.submitCodeEnabled
          }`}
          textStyling={!isCodeLengthValid ? styles.textDisabled : styles.textEnabled}
        />
      </div>
      <div className={styles.resendCodeContainer}>
        <p className={styles.text}>{`Didn't get it?`}</p>
        <p className={styles.timer}>
          {resendTimer > 0 ? (
            formatTime(resendTimer)
          ) : (
            <span onClick={resendCode} className={styles.resendCode}>
              Resend Code
            </span>
          )}
        </p>
      </div>
      <Toast isVisible={isVisible} message={message} />
    </>
  );
};

export default EnterPhoneCode;
