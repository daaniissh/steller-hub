const express = require("express");
const router = express.Router();
const multer = require("multer");
const Movies = require("../models/movieModel");

// Get All Movies
router.get("/", async (req, res) => {
  try {
    const usersList = await Movies.find().select("title ratings genre");
    res.status(200).json(usersList);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

// Get All Movies with Genre
router.get("/products", async (req, res) => {
  try {
    const usersList = await Movies.find()
      .where("genre")
      .ne([])
      .select("title ratings genre imageName amazon flipkart productsNum")
      .populate("genre")
    res.status(200).json(usersList);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

// Update Movie with Genre
router.put("/update", async (req, res) => {
  console.log(req.body);
  try {
    const movie = {
      imageName: req.body.image,
      title: req.body.title,
      ratings: req.body.ratings,
      genre: req.body.genre,
      amazon: req.body.amazon,
      flipkart: req.body.flipkart,
      productsNum: req.body.productsNum,
    };
    const movieList = await Movies.findByIdAndUpdate(
      req.body.id,
      {
        ...movie,
      }
    );
    res.status(200).json(movieList);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

router.post("/movieById", async (req, res) => {
  try {
    const movie = await Movies.findById(req.body.id);
    res.json(movie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
// Create new Movie\

router.post("/", async (req, res) => {
  console.log(req.body);
  try {
    const isExist = await Movies.findOne({ title: req.body.title });
    if (!isExist) {
      const movieList = await Movies.create(req.body);
      return res.status(200).json(movieList);
    }

    return res.status(400).json({
      message: "Movie with this name already exist",
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});
router.delete("/", async (req, res) => {
  const deletedMovie = await Movies.findByIdAndDelete(req.body.id);
  res.json(deletedMovie);
});
module.exports = router;
