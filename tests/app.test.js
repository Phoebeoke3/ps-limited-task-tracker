const request = require("supertest");
const app = require("../src/app");

describe("Task Tracker API", () => {
  test("creates a new task as incomplete", async () => {
    const response = await request(app)
      .post("/tasks")
      .send({ title: "Test CI pipeline" });

    expect(response.statusCode).toBe(201);
    expect(response.body.completed).toBe(false);
  });

  test("rejects an empty task", async () => {
    const response = await request(app)
      .post("/tasks")
      .send({ title: "" });

    expect(response.statusCode).toBe(400);
  });

  test("health endpoint returns healthy", async () => {
    const response = await request(app).get("/health");

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe("healthy");
  });
});