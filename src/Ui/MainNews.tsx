import * as React from "react";
import { NewsItem } from "../DataModel/NewsItem";
import styles from "./MainNews.module.css";

interface Props {
  item: NewsItem;
}

const MainNews = ({ item }: Props) => {
  return (
    <div className={styles.container}>
      <img className={styles.thumbnail} src={item.thumbnailUrl} />
      <div className={styles.overlay} />
      <div className={styles.title}>{item.title}</div>
    </div>
  );
};

export default MainNews;
