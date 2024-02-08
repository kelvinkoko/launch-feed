import * as React from "react";
import MultiClamp from "react-multi-clamp";
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
        <MultiClamp className={styles.title} ellipsis="..." clamp={3}>
          {item.title}
        </MultiClamp>
        <div className={styles.time}>{item.time}</div>
      </div>
    </div>
  );
};

export default NewsPreview;
