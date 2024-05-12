import express, { Express, Request, Response } from "express";
const app: Express = express();
const port: number = 8000;

app.get("/", (req: Request, res: Response) => {
  res.send({"message": "Hello World!"});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
