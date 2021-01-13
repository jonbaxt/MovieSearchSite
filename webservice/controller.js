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
        // console.log(filterJson);
        // console.log(newJson);
        console.log(newJsonArray);
        res.status(200).send(newJsonArray);
      })
      .catch(e => {
        console.log("error", e);
        res.status(400).send(e);
      });
  }
  /*
  ,
  getGameDataFromServer: (req, res) => {
    axios.get("https://api-endpoint.igdb.com/games/?search=Sonic", {
      headers: {
        "user-key": API_KEY,
        Accept: "application/json"
      }
    })
      .then(response => {
        // Do work here
        // console.log('The response data from database: ', response.data);
        res.status(200).send(response.data);
      })
      .catch(e => {
        console.log("error", e);
        res.status(400).send(e);
      });
  },
  getGameDataFromServerV2: (req, res) => {
    axios.get("https://api-endpoint.igdb.com/games/?search=Sonic&fields=*", {
      headers: {
        "user-key": API_KEY,
        Accept: "application/json"
      }
    })
      .then(response => {
        // Do work here
        // console.log('The response data from database: ', response.data);
        res.status(200).send(response.data);
      })
      .catch(e => {
        console.log("error", e);
        res.status(400).send(e);
      });
  },
  sonicGames: (req, res) => {
    axios.get(`https://api-endpoint.igdb.com/games/89922,5165,2174,24346,9476,56739,23826,78430,50924,7862?fields=*`, {
      headers: {
        "user-key": API_KEY,
        Accept: "application/json"
      }
    })
      .then(response => {
        // Do work here
        // console.log('The response data from database: ', response.data);
        res.status(200).send(response.data);
      })
      .catch(e => {
        console.log("error", e);
        res.status(400).send(e);
      });
  },
  gameDataById: (req, res) => {
    const gameId = req.params.id;
    axios.get(`https://api-endpoint.igdb.com/games/${gameId}?fields=*`, {
      headers: {
        "user-key": API_KEY,
        Accept: "application/json"
      }
    })
      .then(response => {
        // Do work here
        // console.log('The response data from database: ', response.data);
        res.status(200).send(response.data);
      })
      .catch(e => {
        console.log("error", e);
        res.status(400).send(e);
      });
  },
  gameCallByWhole: (req, res) => {
    axios.get(`https://api-endpoint.igdb.com/games/`, {
      headers: {
        "user-key": API_KEY,
        Accept: "application/json"
      }
    })
      .then(response => {
        // Do work here
        // console.log('The response data from database: ', response.data);
        res.status(200).send(response.data);
      })
      .catch(e => {
        console.log("error", e);
        res.status(400).send(e);
      });
  },
  getSavedGameInfoFromIGDB: (req, res)=> {
    const dbInstance = req.app.get('db');

    dbInstance.get_saved_game_info().then( (response) => {
      res.status(200).send(response);
    }).catch( (err)=> res.status(400).send(err));
  },
  getGameArtwork: (req, res)=>{
    const dbInstance = req.app.get('db');

    dbInstance.get_artwork().then( (response)=>{
      res.status(200).send(response);
    }).catch( (err) => res.status(400).send(err));
  },
  getGameScreenShots: (req, res)=> {
    const dbInstance = req.app.get('db');

    dbInstance.get_screenshots().then( (response) => {
      res.status(200).send(response);
    }).catch( (err) => res.status(400).send(err));
  },
  getGamePosts: (req, res)=> {
    const dbInstance = req.app.get('db');

    dbInstance.get_gamereview_posts().then( (response) => {
      res.status(200).send(response);
    }).catch( (err) => res.status(400).send(err));
  },
  postNewReview: (req, res) => {
    const dbInstance = req.app.get('db');
    const gameId = Number(req.params.id);
    const { username, user_img_url, user_rating, user_review, recommendation } = req.body;

    dbInstance.post_review([gameId, username, user_img_url, Number(user_rating), user_review, recommendation]).then( (response) => {
      res.status(200).send(response);
    }).catch( err => res.status(400).send(err));
  },
*/
}