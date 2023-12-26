/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from "express";
import * as path from "node:path";
import { fileURLToPath } from "node:url";
import { TodoTask } from "@better-front-end/shared/util-types";

const app = express();

app.use(
	"/assets",
	express.static(
		path.join(path.dirname(fileURLToPath(import.meta.url)), "assets"),
	),
);

app.get("/api/todo", (request, response) => {
	const body: TodoTask[] = [
		{ id: "1", title: "First task" },
		{ id: "2", title: "Second task" },
	];

	response.send(body);
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
	// eslint-disable-next-line no-console
	console.log(`Listening at http://localhost:${port}/api`);
});
// eslint-disable-next-line no-console
server.on("error", console.error);
