import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchImages = async (quary, page) => {
  const params = new URLSearchParams({
    key: '41205519-54909192cb32ba9a04be139b9',
    q: quary,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 12,
    page,
  });
  const response = await axios.get(`?${params}`);
  return response.data;
};