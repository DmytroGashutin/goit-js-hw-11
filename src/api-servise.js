import axios from 'axios';

// export default class NewsApiService{
//     constructor() {
//         this.searchQuery = '';
//         this.page = 1;
        
//     }

//     fechArticles() {
//         const options = {
//             key: '26857889-fd52809e26e1278e79d2723ef',
//             q: '',
//             image_type: 'photo',
//             orientation: 'horizontal',
//             safesearch: 'true',
//             page: 1,
//             per_page: 39,
//         };



//         const url = `https://pixabay.com/api/?key=26857889-fd52809e26e1278e79d2723ef&q=${this.searchQuery}&page=${this.page}`;
        
//         return fetch(url, options)
//             .then(response => response.json())
//             .then(data => {
//                 console.log(data);
//                 // console.log(data.total);
//                 this.incrementPage();
//                 return data;
                
//             });
        
//     }

//     incrementPage() {
//         this.page += 1;
//         console.log(this.page);
//     }
//     resetPage() {
//         this.page = 1;
//         console.log(this.page);
//     }
//     get query(){
//     return this.searchQuery;
//     }
//     set query(newQuery) {
//         this.searchQuery = newQuery;
//     }
// }


// ////////////////////////////////////////////////////

// export default class NewsApiService{
//     constructor() {
//         this.searchQuery = '';
//         this.page = 1;
        
//         this.key = '26857889-fd52809e26e1278e79d2723ef';
          
//         this.image_type = 'photo';
//         this.orientation = 'horizontal';
//         this.safesearch = 'true';
            
//         this.per_page = 39;
        
//     }

//     fechArticles() {
//         // const options = {
//         //     key: '26857889-fd52809e26e1278e79d2723ef',
//         //     q: '',
//         //     image_type: 'photo',
//         //     orientation: 'horizontal',
//         //     safesearch: 'true',
//         //     page: 1,
//         //     per_page: 39,
//         // };



//         const url = `https://pixabay.com/api/?key=26857889-fd52809e26e1278e79d2723ef&q=${this.searchQuery}&page=${this.page}
//         &image_type=${this.image_type}&orientation=${this.orientation}&per_page=${this.per_page}`;
        
//         return fetch(url)
//             .then(response => response.json())
//             .then(data => {
//                 console.log(data);
//                 // console.log(data.total);
//                 this.incrementPage();
//                 return data;
                
//             });
        
//     }

//     incrementPage() {
//         this.page += 1;
//         console.log(this.page);
//     }
//     resetPage() {
//         this.page = 1;
//         console.log(this.page);
//     }
//     get query(){
//     return this.searchQuery;
//     }
//     set query(newQuery) {
//         this.searchQuery = newQuery;
//     }
//     // get total() {
//     //     // console.log(data.total);
//     //     return data.total;
        
//     // }
// }


///////

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

//   get searchQuery() {
//     return this.options.params.q;
//   }

//   set searchQuery(newQuery) {
//     this.options.params.q = newQuery;
//   }
    
     get query(){
    return this.options.params.q;
    }
    set query(newQuery) {
        this.options.params.q = newQuery;
    }

 
    
    
//   get pageNumber() {
//     return this.options.params.page;
//   }

//   set pageNumber(newNumber) {
//     this.options.params.page = newNumber;
//   }
}