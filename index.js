try { require('dotenv').config({ path: '.env' }); } catch (e) {}
const express = require("express");
const connectDB = require("./config/db");

const PORT = Number(process.env.PORT) ;
const postRouter = require("./routers/post");
const commentRouter = require("./routers/comment");


const app = express();
app.use(express.json());

(async () => {
  await connectDB();
  
  app.get("/", (req, res) => {
    res.send("Server is up");
  });

  app.use("/posts", postRouter);
  app.use("/comments", commentRouter);

  app.listen(PORT, () => console.log("Server running on port 3000"));
})();