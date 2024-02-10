import * as lodash from "lodash";
import { NewsItem } from "../DataModel/NewsItem";
// Webpack 5 not work
// workaround ref: https://github.com/rbren/rss-parser/issues/249
import * as moment from "moment";
import Parser from "../../node_modules/rss-parser/dist/rss-parser.min.js";

const CORS_PROXY = "https://corsproxy.io/?";

export async function fetchRss(
  feedUrl: string,
  amount: number
): Promise<NewsItem[]> {
  const parser = new Parser();
  const feed = await parser.parseURL(`${CORS_PROXY}${feedUrl}`);

  const filtered = lodash
    .chain(feed.items)
    .orderBy("isoDate", "desc")
    .take(amount)
    .value();

  return await Promise.all<NewsItem>(
    filtered.map(async (item): Promise<NewsItem> => {
      const imageUrl = await extractRepresentativeImage(
        `${CORS_PROXY}${item.link}`
      );
      return {
        title: item.title,
        detailsUrl: item.link,
        thumbnailUrl: imageUrl,
        time: moment(item.pubDate, "ddd, DD MMM YYYY HH:mm:ss ZZ").fromNow(),
        source: feed.title,
        sourceLogoUrl: feed.image.url
      };
    })
  );
}

async function extractRepresentativeImage(
  url: string
): Promise<string | undefined> {
  try {
    const response = await fetch(url);
    const html = await response.text();

    const tempElement = document.createElement("div");
    tempElement.innerHTML = html;

    const imageElement =
      tempElement.querySelector('meta[property="og:image"]') ||
      tempElement.querySelector('meta[name="twitter:image"]') ||
      tempElement.querySelector("img");

    if (imageElement) {
      const imageUrl =
        imageElement.getAttribute("src") ||
        imageElement.getAttribute("content");

      if (imageUrl) {
        return imageUrl;
      }
    }

    return undefined;
  } catch (error) {
    console.error("Error extracting representative image:", error);
    return undefined;
  }
}
