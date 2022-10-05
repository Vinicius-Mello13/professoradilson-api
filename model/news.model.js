import { Schema, model } from "mongoose";

const newsSchema = new Schema({
  title: {type:String, required: true},
  news: {type: String, required: true},
})

export const NewsModel = model("News", newsSchema)