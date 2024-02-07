import * as React from "react";
import { hot } from "react-hot-loader/root";
// Webpack 5 not work
// workaround ref: https://github.com/rbren/rss-parser/issues/249
// import Parser from "../node_modules/rss-parser/dist/rss-parser.min.js";
import styles from "./App.module.css";
import bgImage from "./Image/default-bg.jpg";
import MainNews from "./Ui/MainNews";
import NewsInfo from "./Ui/NewsInfo";
import NewsPreview from "./Ui/NewsPreview";

const App = () => {
  const item = {
    title: "Apple Vision Pro review: the infinite desktop",
    thumbnailUrl:
      "https://techcrunch.com/wp-content/uploads/2024/02/DSC00065.jpeg?w=1390&crop=1",
    source: "Techcrunch",
    sourceLogoUrl:
      "https://techcrunch.com/wp-content/uploads/2015/02/cropped-cropped-favicon-gradient.png?w=32",
    time: "2 hours ago"
  };
  return (
    <>
      <img className={styles.bg} src={bgImage} />
      <div className={styles.window}>
        <div className={styles.title}>Tech News</div>
        <div className={styles.windowContent}>
          <div className={styles.mainNewsContent}>
            <MainNews item={item} />
            <NewsInfo item={item} />
          </div>
          <div className={styles.divider} />
          <div className={styles.previewList}>
            <NewsPreview item={item} />
            <NewsPreview item={item} />
            <NewsPreview item={item} />
            <NewsPreview item={item} />
            <NewsPreview item={item} />
          </div>
        </div>
      </div>
    </>
  );
};

export default hot(App);
