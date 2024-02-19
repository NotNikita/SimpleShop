import cors from "cors";
import express, { Express, Response } from "express";
import helmet from "helmet";

const app: Express = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 7777;

app.get("/", (_, res: Response) => {
  res.status(200).send("All good to go!");
});

app.listen(port, () => {
  console.log(`Server is listening on Port ${port}`);
});
