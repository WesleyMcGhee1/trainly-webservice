import express from "express";
import cors from "cors";

const app = express();
const port = 3500;

app.use(express.json());
app.use(cors());


app.listen(port, () => console.log(`listening on port ${port}`));
