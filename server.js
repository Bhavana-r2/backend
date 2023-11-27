import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
 
const app = express();
mongoose.connect(
  "mongodb+srv://bhavanavviet02:XrtBd8trAlbOpRs3@cluster0.6lhnvwn.mongodb.net/?retryWrites=true&w=majority",

);

const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database Connected...'));

app.use(cors());
app.use(express.json());
app.use(UserRoute);
app.use("/landing",UserRoute);
// Remove the line below if you don't have specific middleware for "/landing"
// If you do, replace `yourMiddleware` with the actual middleware function
// app.use("/landing", yourMiddleware);

app.listen(5000, () => console.log('Server up and running...'));
