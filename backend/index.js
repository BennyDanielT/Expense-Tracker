import express from "express";
import bodyparser from "body-parser";
import cors from "cors";
import {router} from "./routes/index.js";

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

app.use("/api/", router);

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
