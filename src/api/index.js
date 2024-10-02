import { Hono } from "hono";
import { generate } from "./generate";
import { food } from "./food";
import { health } from "./health";
import { kv } from "./kv";

export const api = new Hono();

api.get("/generate", generate);
api.post("/food", food);
api.post("/health", health);
api.post("/kv", kv);
