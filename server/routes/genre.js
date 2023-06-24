const express = require("express");
const router = express.Router();

const Genre = require("../models/genreModel");

router.get("/", async (req, res) => {
  try {
    const userList = await Genre.find();
    res.status(200).json(userList);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const { id, title } = req.body.data;
    const isExist = await Genre.findOne({ title: req.body.data.title });
   
    let newGenre = "";
    if (id != 0) {
      newGenre = await Genre.findByIdAndUpdate(id, {
        title,
      });
    } else {
      newGenre = await Genre.create(req.body.data);
    }

    res.status(200).json(newGenre);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

// router.put("/", async (req, res) => {
//   try {
//     const { id } = req.body.data;
//     const data = await Genre.findByIdAndUpdate(id, {
//       title: req.body.data.title,
//     });
//     console.log(req.body.data);
//     res.json(data);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

router.delete("/", async (req, res) => {
  const { id } = req.body;
  const data = await Genre.findByIdAndDelete(id);
  res.json(data);
});

module.exports = router;
