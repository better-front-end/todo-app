import axios from "axios";

describe("GET /", () => {
	it("should return a message", async () => {
		const response = await axios.get(`/`);

		expect(response.status).toBe(200);
		expect(response.data).toEqual({ message: "Hello API" });
	});
});
