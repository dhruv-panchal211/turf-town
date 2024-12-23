import styles from './page.module.css';

const Loading = () => {
  return (
    <div className={styles.loadingMain}>
      <div className={styles.loadingLogo}></div>
      <div>
        <div className={styles.loadingHeader}>
          <div className={styles.loadingTitle}></div>
          <div className={styles.loadingSubtitle}></div>
        </div>
      </div>
      <div className={styles.loadingContent}>
        <div className={styles.loadingLoginButton}></div>
        <div className={styles.divider}></div>
        <div className={styles.loadingEmailOrPhone}>
          <div className={styles.loadingLoginButton}></div>
          <div className={styles.loadingLoginButton}></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
