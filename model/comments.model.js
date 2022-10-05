import { Schema, model } from "mongoose";

const reviewSchema = new Schema({
  owner: {type: Schema.Types.ObjectId, ref: "User"},
  body: {type: String, required: true}
})

export const CommentsModel = model("Review", reviewSchema)