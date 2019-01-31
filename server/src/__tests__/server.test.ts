import server from "../server";
import { createTestClient } from "apollo-server-testing";

describe("server", () => {
  describe("hello query", () => {
    it("responses with hello world", async () => {
      const { query } = createTestClient(server);
      const response = await query({ query: `{ hello }` });

      expect(response.data).toEqual({ hello: "Hello" });
    });
  });
});
