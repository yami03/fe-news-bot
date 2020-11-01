import * as news from "./news";

const parser = async () => {
  const contents = await news.parse();
  return {
    news: contents,
  };
};

export default parser;
