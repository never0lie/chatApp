import styles from './index.css';

function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      <link rel="shortcut icon" type="image/x-icon" href="/assets/favicon.ico" />
      <h1 className={styles.title}>Chat App!</h1>
      {props.children}
    </div>
  );
}

export default BasicLayout;
