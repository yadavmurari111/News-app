import axios from 'axios';
const API_KEY = 'bcc53379a67b4587952763741ee7167f';

export async function getHomeNewsData() {
  try {
    const url =
      'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=' +
      API_KEY;

    const response = await axios.get(url, {params: {maxResults: 20}});
    console.log(response.data.articles, '===getHomeNewsData===');
    return response.data.articles;
  } catch (error) {
    console.error('Error fetching search data:', error);
    return [];
  }
}
