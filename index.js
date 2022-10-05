import express from "express";
import * as dotenv from "dotenv";
import { connect } from "./config/db.config.js";
import { userRouter } from "./routes/user.routes.js";
import { routerComments } from "./routes/comments.routes.js";
import { newsRouter } from "./routes/news.routes.js";
import  cors  from "cors"

dotenv.config();
connect();

const app = express();
// const cors = require ('cors');

app.use(express.json());


app.use(cors());



const API_VERSION = "1.0";

app.use(`/api/${API_VERSION}/user`, userRouter);
app.use(`/api/${API_VERSION}/comments`, routerComments)
app.use(`/api/${API_VERSION}/news`, newsRouter)

app.listen(Number(process.env.PORT), () => {
  console.log(`Server up and running at port ${process.env.PORT}`);
});
