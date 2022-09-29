import express from "express";
import { CommentsModel } from "../model/comments.model.js"

const routerComments = express.Router();


//CREATE

routerComments.post("/", async (req, res) => {
  try {
    const createdNews = await CommentsModel.create(req.body);

    return res.status(201).json(createdNews);
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
});

//READ

routerComments.get("/", async (req, res) => {
  try {
    const allNews = await CommentsModel.find();

    return res.status(200).json(allNews);
  } catch (error) {
    console.log(error);

    return res.json(error);
  }
});

//UPDATE

routerComments.put("/:id", async (req, res) => {
  try {
    const editNews = await CommentsModel.findOneAndUpdate(
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

routerComments.delete("/:id", async (req, res) => {
  try {
    const deletedNews = await CommentsModel.deleteOne({ _id: req.params.id });

    return res.status(200).json(deletedNews);
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
});

export { routerComments };