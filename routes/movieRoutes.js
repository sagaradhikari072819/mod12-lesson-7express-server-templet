const express = require("express");

const movieRouter = express.Router();

const movieController = require("../controllers/movieController");
// Routes

//Get /api/movies/  ====> this is for the testing puropse only.
movieRouter.get("/", (req, res) => {
  res.send("Sending all movies...");
});

//Get /api/movies/search
movieRouter.get("/search", movieController.searchMovies);

//Get /api/movie/:id
movieRouter.get("/:id", movieController.getMovieDetails);



module.exports = movieRouter;
