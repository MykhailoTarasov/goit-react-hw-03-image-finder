import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fechServisSearchImg = async (searchValue, currentPage) => {
  const params = new URLSearchParams({
    key: '41205519-54909192cb32ba9a04be139b9',
    q: searchValue,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    min_width: '360',
    min_height: '240',
    per_page: '12',
    page: currentPage,
  });

  const response = await axios.get(`?${params}`);
  return response.data;
};