import * as React from "react";
import MultiClamp from "react-multi-clamp";
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
      <MultiClamp className={styles.title} ellipsis="..." clamp={2}>
        {item.title}
      </MultiClamp>
    </div>
  );
};

export default MainNews;
