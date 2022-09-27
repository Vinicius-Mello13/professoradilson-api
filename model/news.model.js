import { Schema, model } from "mongoose";

const newsSchema = new Schema({
  owner: {type: Schema.Types.ObjectId, ref: "User"},
  news: {type: Schema.Types.ObjectId, ref: "News"},
})

export const NewsModel = model("News", newsSchema)