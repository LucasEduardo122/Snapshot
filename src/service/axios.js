import axios from 'axios';

const service = axios.create({baseURL: 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=636e1481b4f3c446d26b8eb6ebfe7127&tags='})

export default service;