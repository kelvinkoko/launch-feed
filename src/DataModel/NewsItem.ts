export interface NewsItem {
  title: string;
  thumbnailUrl?: string;
  time: string;
  source: string;
  sourceLogoUrl: string;
}

export const PLACEHOLDER: NewsItem = {
  title: "",
  source: "",
  sourceLogoUrl: "",
  time: ""
};

export function isPlaceholder(item: NewsItem): boolean {
  return item.thumbnailUrl == undefined && item.title == "";
}
