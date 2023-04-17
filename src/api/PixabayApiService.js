import axios from 'axios';

const API_KEY = '33884715-0dc68d810fba427cd8d5ff839';
const BASE_URL = 'https://pixabay.com/api/';

async function getImages(searchQuery, page) {
  try {
    const response = await axios.get(
      `${BASE_URL}?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );
    return response.data.hits;
  } catch (error) {
    console.error(error);
  }
}

export default getImages;
