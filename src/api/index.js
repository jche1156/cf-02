import { Hono } from "hono";
import { generate } from "./generate";
import { food } from "./food";
import { luma_food } from "./luma_food";
import { oai_food } from "./oai_food";
import { health } from "./health";
import { kv } from "./kv";

export const api = new Hono();

api.get("/generate", generate);
api.post("/food", food);
api.post("/luma_food", luma_food);
api.post("/oai_food", oai_food);
api.post("/health", health);
api.post("/kv", kv);
