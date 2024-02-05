import axios from 'axios';

// axios.defaults.baseURL = 'https://pixabay.com/api';

export const fetchImages = async () => {
  const response = await axios.get(
    'https://pixabay.com/api/?q=cat&page=1&key=41243043-03fa0c09f0e0133208ded241a&image_type=photo&orientation=horizontal&per_page=12'
  );
  return response.data.hits;
};
