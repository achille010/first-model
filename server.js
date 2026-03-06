import "dotenv/config";
import express from "express";
import chatModel from "./components/llama-3.3-70b-versatile.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/chat", chatModel);

export default (port = PORT) => {

  app.listen( port , () => {
    console.log(`App running on http://localhost:${port}`);
  });

};
