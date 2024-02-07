import * as React from "react";
import { NewsItem } from "../DataModel/NewsItem";
import styles from "./NewsPreview.module.css";

interface Props {
  item: NewsItem;
}

const NewsPreview = ({ item }: Props) => {
  return (
    <div className={styles.container}>
      <img className={styles.thumbnail} src={item.thumbnailUrl} />
      <div className={styles.textPreviewContainer}>
        <div className={styles.title}>{item.title}</div>
        <div className={styles.time}>{item.time}</div>
      </div>
    </div>
  );
};

export default NewsPreview;
