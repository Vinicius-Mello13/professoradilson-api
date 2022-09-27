import { Schema, model } from "mongoose";

const reviewSchema = new Schema({
  owner: {type: Schema.Types.ObjectId, ref: "User"},
  news: {type: Schema.Types.ObjectId, ref: "News"},
  body: {type: String, required: true}
})

export const CommentsModel = model("Review", reviewSchema)