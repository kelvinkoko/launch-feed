import * as React from "react";
import { hot } from "react-hot-loader/root";
// Webpack 5 not work
// workaround ref: https://github.com/rbren/rss-parser/issues/249
import Parser from "../node_modules/rss-parser/dist/rss-parser.min.js";
import styles from "./App.module.css";
import bgImage from "./Image/default-bg.jpg";

const App = () => {
  (async () => {
    const parser = new Parser();
    const feed = await parser.parseURL(
      "https://corsproxy.io/?https://techcrunch.com/feed/"
    );
    feed.items.forEach((item: {}) => {
      console.log(item);
    });
  })();
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
