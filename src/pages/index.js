import styles from './index.css';
import Parse from "parse";
import TestLiveQuery from "./components/test.component"

export default function() {
  //initialize back4app
  Parse.initialize("myAppId", "myJavascriptKey");
  Parse.serverURL = "http://localhost:1337/parse";

  //render
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
        <li>
          <a href="https://umijs.org/guide/getting-started.html">
            Getting Started
          </a>
        </li>
      </ul>
      <TestLiveQuery />
    </div>
  );
}
