import * as React from "react";
import { NewsItem } from "../DataModel/NewsItem";
import styles from "./NewsInfo.module.css";

interface Props {
  item: NewsItem;
}

const NewsInfo = ({ item }: Props) => {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={item.sourceLogoUrl} />
      <div>
        <div className={styles.sourceName}>{item.source}</div>
        <div className={styles.time}>{item.time}</div>
      </div>
    </div>
  );
};

export default NewsInfo;
