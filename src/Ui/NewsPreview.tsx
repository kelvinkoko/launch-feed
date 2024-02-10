import * as React from "react";
import MultiClamp from "react-multi-clamp";
import ReactPlaceholder from "react-placeholder";
import { NewsItem, isPlaceholder } from "../DataModel/NewsItem";
import styles from "./NewsPreview.module.css";

interface Props {
  item: NewsItem;
}

const NewsPreview = ({ item }: Props) => {
  const isReady = !isPlaceholder(item);

  return (
    <div className={styles.container}>
      <ReactPlaceholder
        className={styles.thumbnail}
        showLoadingAnimation
        type="rect"
        ready={isReady}
        color="#a9aaa8"
        style={{ width: 145 }}
      >
        <img className={styles.thumbnail} src={item.thumbnailUrl} />
      </ReactPlaceholder>

      <div className={styles.textPreviewContainer}>
        <ReactPlaceholder
          className={styles.title}
          showLoadingAnimation
          type="text"
          ready={isReady}
          rows={2}
          color="#b9bab8"
        >
          <MultiClamp className={styles.title} ellipsis="..." clamp={3}>
            {item.title}
          </MultiClamp>{" "}
        </ReactPlaceholder>
        {isReady ? <div className={styles.time}>{item.time}</div> : null}
      </div>
    </div>
  );
};

export default NewsPreview;
