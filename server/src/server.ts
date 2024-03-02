import cors from "cors";
import express, { Express, Response } from "express";
import helmet from "helmet";

const port = process.env.PORT || 7777;

const app: Express = express();
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/", (_, res: Response) => {
  console.log("--Main endpoints called");
  res.status(200).send("All good to go!");
});

app.listen(port, () => {
  console.log(`Server is listening on Port ${port}`);
});

export default app;
