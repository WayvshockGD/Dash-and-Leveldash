import mongoose from "mongoose";
import { db_url } from "./config.json";

import "./dash/index";
import "./leveldash/index";

mongoose.connect(db_url).then(() => console.log("Connected to database"));