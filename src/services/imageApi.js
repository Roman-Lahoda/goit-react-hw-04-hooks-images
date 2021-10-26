import axios from "axios";
const API_KEY = "23036089-03f6791326ef951aa675b45d4";

axios.defaults.baseURL = "https://pixabay.com/api/";

const fetchImage = (searchQuery, currentPage) => {
  return axios
    .get(
      `/?key=${API_KEY}&q=${searchQuery}
    &page=${
      currentPage + 1
    }&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then(({ data }) => data.hits);
};

const api = {
  fetchImage,
};

export default api;
