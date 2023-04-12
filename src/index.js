import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import router from "./routes";
import { establishconnection } from "./utils/db.utils";

const PORT = process.env.PORT || 8080;

const app = express();

establishconnection();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.use("/api", router);

app.get("/ping", (_, res) => {
    res.send("Library API");
});

app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
});
