import axios from 'axios';
const API_KEY = 'bcc53379a67b4587952763741ee7167f';

export const getHomeNewsData = async () => {
  const url =
    'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=' + API_KEY;

  const response = await axios.get(url);
  console.log(response, 'response===');
  return response.data;
};
