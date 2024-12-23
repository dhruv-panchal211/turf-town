import { FC } from "react";
import Image from "next/image";
import styles from "../../page.module.css";

interface LoginHeaderProps {
  title: string;
  subtitle: string;
  showIcon?: boolean;
}

const LoginHeader: FC<LoginHeaderProps> = ({ title, subtitle, showIcon = false }) => {
  return (
    <>
      <div className={styles.titleTextWrapperr}>
        <div className={styles.titleText}>{title}</div>
        {showIcon && <Image src="/assets/Images/flower.svg" alt="flower" width={30} height={30} />}
      </div>
      <div className={styles.subText}>{subtitle}</div>
    </>
  );
};

export default LoginHeader;
