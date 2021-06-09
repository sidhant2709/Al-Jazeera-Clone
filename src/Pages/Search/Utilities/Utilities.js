import axios from "axios";
const accessKey = process.env.REACT_APP_NEWS_API_ACCESS_TOKEN;
const getNewsData = (searchInput) => {
  const config = {
    method: "get",
    url: "https://newsapi.org/v2/everything",
    headers: {
      Accept: "application/json",
    },
    params: {
      apiKey: accessKey,
      q: searchInput,
      pageSize: 100,
    },
  };
  return axios(config);
};
export default getNewsData;
