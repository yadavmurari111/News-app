import axios from 'axios';
const API_KEY = 'bcc53379a67b4587952763741ee7167f';

export async function getSearchNewsData(searchText: string) {
  try {
    const url =
      'https://newsapi.org/v2/everything?q=' +
      searchText +
      '&apiKey=' +
      API_KEY;

    console.log('searching for :', searchText);

    const response = await axios.get(url, {params: {maxResults: 20}});
    console.log(response.data.articles, '===getSearchNewsData===');
    return response.data.articles;
  } catch (error) {
    console.error('Error fetching search data:', error);
    return [];
  }
}
