import express from "express";
import { NewsModel } from "../model/news.model.js"

const newsRouter = express.Router();


//CREATE

newsRouter.post("/", async (req, res) => {
  try {
    const createdNews = await NewsModel.create(req.body);

    return res.status(201).json(createdNews);
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
});

//READ

newsRouter.get("/", async (req, res) => {
  try {
    const allNews = await NewsModel.find();

    return res.status(200).json(allNews);
  } catch (error) {
    console.log(error);

    return res.json(error);
  }
});

//UPDATE

newsRouter.put("/:id", async (req, res) => {
  try {
    const editNews = await NewsModel.findOneAndUpdate(
      { _id: req.params.id },
      { ...req.body },
      { new: true, runValidators: true }
    );

    return res.status(200).json(editNews);
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
});

//DELETE

newsRouter.delete("/:id", async (req, res) => {
  try {
    const deletedNews = await NewsModel.deleteOne({ _id: req.params.id });

    return res.status(200).json(deletedNews);
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
});

export { newsRouter };