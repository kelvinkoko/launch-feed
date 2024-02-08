import * as React from "react";
import { hot } from "react-hot-loader/root";
import styles from "./App.module.css";
import { NewsItem } from "./DataModel/NewsItem";
import bgImage from "./Image/default-bg.jpg";
import { fetchRss } from "./Rss/RssFetcher";
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
  const [items, setItems] = React.useState<NewsItem[]>([item]);
  let [mainItem, ...previewItems] = items;

  React.useEffect(() => {
    (async () => {
      setItems(await fetchRss("https://techcrunch.com/feed/", 5));
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
