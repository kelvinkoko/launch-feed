import * as React from "react";
import ReactPlaceholder from "react-placeholder";
import { NewsItem, isPlaceholder } from "../DataModel/NewsItem";
import styles from "./NewsInfo.module.css";

interface Props {
  item: NewsItem;
}

const NewsInfo = ({ item }: Props) => {
  const isReady = !isPlaceholder(item);

  return (
    <div className={styles.container}>
      <ReactPlaceholder
        className={styles.title}
        showLoadingAnimation
        type="text"
        ready={isReady}
        rows={2}
        color="#b9bab8"
        style={{ width: 120 }}
      >
        <img className={styles.logo} src={item.sourceLogoUrl} />
        <div>
          <div className={styles.sourceName}>{item.source}</div>
          <div className={styles.time}>{item.time}</div>
        </div>
      </ReactPlaceholder>
    </div>
  );
};

export default NewsInfo;
