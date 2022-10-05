import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: { type: String, required: true, trim: true },
  // surname: {type: String, required: true, trim: true},
  email: {type: String, required: true, unique: true, trim: true, match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/gm,},
  passwordHash: { type: String, required: true },
  role: { type: String, enum: ["ADMIN", "USER"], default: "USER" },
  createdAt: { type: Date, default: Date.now() },
  whatsapp:{type: Number, required: true, trim: true},
  address:{type: String, required: true, trim: true},
  burgh: {type: String, required: true, trim: true},
  city: {type: String, required: true, trim: true},
  comments: [{type: Schema.Types.ObjectId, ref: "Comments"}],
  news: [{type: Schema.Types.ObjectId, ref: "News"}]
});

export const UserModel = model("User", userSchema);
