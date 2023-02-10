export const truncateTextToWord = (str: string, wordCount: number) => {
  return `${str.split(" ").slice(0, wordCount).join(" ")}...`;
};
