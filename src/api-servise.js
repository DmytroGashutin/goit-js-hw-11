import axios from 'axios';


export default class NewsApiService {
  constructor() {
    this.options = {
      params: {
        key: '26857889-fd52809e26e1278e79d2723ef',
        q: '',
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: 1,
        per_page: 39,
      },
    };
  }

  async fechArticles() {
    const response = await axios.get('https://pixabay.com/api/', this.options);
      this.incrementPage();
      console.log(response);
    return response;
  }

  incrementPage() {
    this.options.params.page += 1;
  }

  resetPage() {
    this.pageNumber = 1;
  }


    
  get query() {
    return this.options.params.q;
  }
  set query(newQuery) {
        this.options.params.q = newQuery;
  }
  get pageNumber() {
    return this.options.params.page;
  }

  set pageNumber(newNumber) {
    this.options.params.page = newNumber;
  }

}