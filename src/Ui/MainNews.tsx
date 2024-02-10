import * as React from "react";
import MultiClamp from "react-multi-clamp";
import ReactPlaceholder from "react-placeholder";
import "react-placeholder/lib/reactPlaceholder.css";
import { NewsItem, isPlaceholder } from "../DataModel/NewsItem";
import styles from "./MainNews.module.css";

interface Props {
  item: NewsItem;
}

const MainNews = ({ item }: Props) => {
  const isReady = !isPlaceholder(item);
  return (
    <div
      className={styles.container}
      onClick={() => window.open(item.detailsUrl, "_blank")}
    >
      <ReactPlaceholder
        className={styles.thumbnail}
        showLoadingAnimation
        type="rect"
        ready={isReady}
        color="#AAA9A3"
      >
        <img className={styles.thumbnail} src={item.thumbnailUrl} />
      </ReactPlaceholder>
      {isReady ? <div className={styles.overlay} /> : null}
      <ReactPlaceholder
        className={styles.title}
        showLoadingAnimation
        type="text"
        ready={isReady}
        rows={1}
        color="#969795"
      >
        <MultiClamp className={styles.title} ellipsis="..." clamp={2}>
          {item.title}
        </MultiClamp>
      </ReactPlaceholder>
    </div>
  );
};

export default MainNews;
