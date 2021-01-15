const axios = require('axios');
require('dotenv').config();
const API_KEY = process.env.API_KEY;

module.exports = {
 
    getMovie: (req, res) => {
    const userEntry = req.params.moviesearch;
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&include_adult=false&language=en-US&query=${userEntry}&limit=10`,
    {})
      .then(response => {
        // Do work here
        // console.log('The response data from database: ', response.data);
        let newJson;
        let newJsonArray = [];
        for (let i=0; i<response.data.results.length; i++){
            newJson = {
                "movie_id": response.data.results[i].id,
                "title": response.data.results[i].title,
                "poster_image_url": `https://image.tmdb.org/t/p/w500${response.data.results[i].poster_path}`, // (https://developers.themoviedb.org/3/getting-started/images)
                "popularity_summary": `${response.data.results[i].popularity} out of ${response.data.results[i].vote_count}`, //(i.e. "{popularity} out of {vote_count}")    
            };
            newJsonArray.push(newJson);
        }
        newJson = {
            "movie_id": response.data.results[0].id,
            "title": response.data.results[0].title,
            "poster_image_url": `https://image.tmdb.org/t/p/w500${response.data.results[0].poster_path}`, // (https://developers.themoviedb.org/3/getting-started/images)
            "popularity_summary": `${response.data.results[0].popularity} out of ${response.data.results[0].vote_count}`, //(i.e. "{popularity} out of {vote_count}")
        }

        console.log(newJsonArray);
        res.status(200).send(newJsonArray);
      })
      .catch(e => {
        console.log("error", e);
        res.status(400).send(e);
      });
  }

}