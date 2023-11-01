/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from "express";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

const app = express();

app.use(
	"/assets",
	express.static(
		path.join(path.dirname(fileURLToPath(import.meta.url)), "assets"),
	),
);

app.get("/api", (request, response) => {
	response.send({ message: "Welcome to todo-api!" });
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
	// eslint-disable-next-line no-console
	console.log(`Listening at http://localhost:${port}/api`);
});
// eslint-disable-next-line no-console
server.on("error", console.error);
