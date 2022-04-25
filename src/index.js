import { Notify } from 'notiflix/build/notiflix-notify-aio';

import './sass/main.scss';
import NewsApiService from './api-servise';
import markup from './murkup';


const refs = {
    searchForm: document.querySelector('.search-form'),
    loadMoreBtn: document.querySelector('[data-action="load-more"]'),
    galleryContainer: document.querySelector('.gallery'),
    
};

const newsApiService = new NewsApiService();



refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);




function onSearch(e) {
    e.preventDefault();

    refs.loadMoreBtn.classList.add('visually-hidden');
    
    newsApiService.query = e.currentTarget.elements.searchQuery.value;
    newsApiService.resetPage();
    newsApiService.fechArticles().then(data => {
        clearGalleryContainer();
        appenedHitsMarkup(data)
        refs.loadMoreBtn.classList.remove('visually-hidden');
        
        console.log(newsApiService);

        if (data.data.totalHits === 0) {
            refs.loadMoreBtn.classList.add('visually-hidden');
            Notify.failure('Sorry, there are no images matching your search query. Please try again.');
            return;
        }
        
    });
    
    
    
}

function onLoadMore() {
    newsApiService.fechArticles().then(appenedHitsMarkup);
    
    
}

function appenedHitsMarkup(data) {
    refs.galleryContainer.insertAdjacentHTML('beforeend', markup(data.data.hits));
    if (data.data.total !== 0 && data.data.hits.length === 0) {
            refs.loadMoreBtn.classList.add('visually-hidden');
            Notify.failure(`We're sorry, but you've reached the end of search results.`);
            return;
    };
}


function clearGalleryContainer() {
    refs.galleryContainer.innerHTML = '';
}