import axios from 'axios';

const YOUTUBE_API_KEY = 'AIzaSyDTmsku3M2854Ncj1rdokZEYw-r3QA30QY';
const NEWS_CATEGORY = 'news shorts'; // Replace with the specific news category you want to search for

async function fetchYouTubeVideoIds() {
  try {
    const response = await axios.get(
      'https://www.googleapis.com/youtube/v3/search',
      {
        params: {
          key: YOUTUBE_API_KEY,
          q: NEWS_CATEGORY,
          type: 'video',
          maxResults: 10, // Change this value to the number of videos you want to retrieve
        },
      },
    );

    console.log(response, 'video data-----------');

    return response.data.items.map(
      (item: {id: {videoId: any}}) => item.id.videoId,
    );
  } catch (error) {
    console.error('Error fetching YouTube video IDs:', error);
    return [];
  }
}

export default fetchYouTubeVideoIds;
