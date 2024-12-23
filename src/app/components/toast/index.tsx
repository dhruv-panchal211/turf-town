import Image from "next/image";
import Styles from "./toast.module.css";

const ToastMessage = () => {
  return (
    <div className={Styles.toastWrapper}>
      <div className={Styles.toastImage}>
        <Image src="/assets/Images/code-resent.svg" alt="code-resend" width={12} height={11} />
      </div>
      <span>Code resent</span>
    </div>
  );
};

export default ToastMessage;
