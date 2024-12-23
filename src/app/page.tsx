"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Button from "./components/button";
import LoginHeader from "./components/login/LoginHeader";
import LoginScreen from "./components/login/LoginScreen";
import styles from "./page.module.css";
import EnterPhoneCode from "./components/login/EnterPhoneCode";
import Loading from "./loading";
import { STEPS } from "@/utils/constants";

const Home = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [step, setStep] = useState<string>(STEPS.LOGIN_OPTIONS);
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [code, setCode] = useState<string>("");

  const loginOptionTitleSubtitle: Record<string, Record<string, string>> = {
    [STEPS.LOGIN_OPTIONS]: {
      title: "Welcome to the Command Centre",
      subtitle: "Login to access and manage the Townverse.",
    },
    [STEPS.PHONE]: {
      title: "Enter your phone number",
      subtitle: "Keep your phone closeby to verify.",
    },
    [STEPS.CODE]: {
      title: "Enter the code sent",
      subtitle: `Please check your texts on +91 ${phoneNumber}`,
    },
  };

  // A dummy timer to mimic loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Loading skeleton
  if (isLoading) {
    return (
      <div className={styles.page}>
        <main className={styles.main}>
          <Loading />
        </main>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/assets/Images/LogoTT.svg"
          alt="Turf Town"
          width={114}
          height={63}
          priority
          onClick={() => window.location.reload()}
        />
        <div>
          <LoginHeader
            title={loginOptionTitleSubtitle[step].title}
            subtitle={loginOptionTitleSubtitle[step].subtitle}
            showIcon={step === STEPS.LOGIN_OPTIONS}
          />
          {step === STEPS.LOGIN_OPTIONS ? (
            <div className={styles.buttonWrapper}>
              <div>
                <Button
                  title="Login with Google"
                  onClick={() => {}}
                  preFix={
                    <Image src="/assets/Images/google.svg" alt="Google" width={22} height={22} />
                  }
                />
              </div>
              <div className={styles.orTextWrapper}>
                <span className={styles.divider}></span>
                <span className={styles.orText}> OR </span>
                <span className={styles.divider}></span>
              </div>
              <div>
                <Button
                  title="Login with Phone"
                  onClick={() => setStep(STEPS.PHONE)}
                  preFix={
                    <Image src="/assets/Images/phone.svg" alt="Phone" width={22} height={22} />
                  }
                />
              </div>
              <div>
                <Button
                  title="Login with Email"
                  onClick={() => {}}
                  preFix={
                    <Image src="/assets/Images/email.svg" alt="Email" width={22} height={22} />
                  }
                />
              </div>
            </div>
          ) : step === STEPS.PHONE ? (
            <LoginScreen
              phoneNumber={phoneNumber}
              setPhoneNumber={setPhoneNumber}
              nextStep={() => setStep(STEPS.CODE)}
            />
          ) : (
            <EnterPhoneCode code={code} setCode={setCode} />
          )}
        </div>
      </main>

      <div className={styles.imageContainer}>
        <div className={styles.imageStack}>
          <div className={`${styles.imageWrapper} ${styles.foregroundImage}`}>
            <Image
              src="/assets/Images/image1.png"
              alt="Image 1"
              layout="fill"
              className={styles.imgStyle}
            />
          </div>
          <div className={`${styles.imageWrapper} ${styles.backgroundImage}`}>
            <Image
              src="/assets/Images/image2.png"
              alt="Image 2"
              width={300}
              height={400}
              layout="responsive"
            />
          </div>
        </div>
        <p className={styles.caption}>Let&apos;s keep the world playing!</p>
      </div>
    </div>
  );
};

export default Home;
