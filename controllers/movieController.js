
  const axios = require('axios');
const { response } = require('express');
const { param } = require('../routes/movieRoutes');

async function searchMovies(req,res) {
    const title = req.query.title
    if (!title){
         return res.status(400).json({ "error": "Title query parameter is required" })   

    }
    try{
    
      const response = await axios.get(`http://www.omdbapi.com/?s=${title}&apikey=${process.env.OMDB_API_KEY}`)
       res.json(response.data.Search);
       
    }catch (error)  {    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error('API Error:', error.response.status, error.response.data);
      res.status(error.response.status).json({ message: 'Error fetching data from external API.' });
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Network Error:', error.message);
      res.status(500).json({ message: 'A network error occurred.' });
    }
    }
    
}
async function getMovieDetails(req,res){
const id = req.params.id
 if(id===undefined){
     return res.status(400).json({ "error": "TId Params is Requried." })
 }
  try{
    
      const response = await axios.get(`http://www.omdbapi.com/?i=${id}&apikey=${process.env.OMDB_API_KEY}`)
       res.json(response.data);
       
    }catch (error)  {    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error('API Error:', error.response.status, error.response.data);
      res.status(error.response.status).json({ message: 'Error fetching data from external API.' });
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Network Error:', error.message);
      res.status(500).json({ message: 'A network error occurred.' });
    }
    }
}
module.exports = {searchMovies, getMovieDetails}