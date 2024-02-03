import * as React from "react";
import { hot } from "react-hot-loader/root";
import styles from "./App.module.css";
import bgImage from "./Image/default-bg.jpg";

const App = () => {
  return (
    <>
      <img className={styles.bg} src={bgImage} />
      <div className={styles.window}>
        <div className={styles.title}>Tech News</div>
        <div>Content</div>
      </div>
    </>
  );
};

export default hot(App);
