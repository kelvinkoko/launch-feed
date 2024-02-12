import * as React from "react";
import { hot } from "react-hot-loader/root";
import styles from "./App.module.css";
import { NewsItem, PLACEHOLDER } from "./DataModel/NewsItem";
import bgImage from "./Image/default-bg.jpg";
import { fetchRss } from "./Rss/RssFetcher";
import MainNews from "./Ui/MainNews";
import NewsInfo from "./Ui/NewsInfo";
import NewsPreview from "./Ui/NewsPreview";

const App = () => {
  const [items, setItems] = React.useState<NewsItem[]>([
    PLACEHOLDER,
    PLACEHOLDER,
    PLACEHOLDER,
    PLACEHOLDER
  ]);
  const [mainItem, ...previewItems] = items;

  React.useEffect(() => {
    (async () => {
      setItems(await fetchRss("https://theverge.com/rss/frontpage", 5));
      // setItems(await fetchRss("https://techcrunch.com/feed/", 5));
    })();
  }, []);
  return (
    <>
      <img className={styles.bg} src={bgImage} />
      <div className={styles.window}>
        <div className={styles.title}>Tech News</div>
        <div className={styles.windowContent}>
          <div className={styles.mainNewsContent}>
            <MainNews item={mainItem} />
            <NewsInfo item={mainItem} />
          </div>
          <div className={styles.divider} />
          <div className={styles.previewList}>
            {previewItems.map((item, i) => (
              <NewsPreview item={item} key={i} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default hot(App);
