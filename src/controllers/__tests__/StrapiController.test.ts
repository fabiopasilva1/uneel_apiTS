import { StrapiController } from "../StrapiController";
import { Request, Response } from "express";

describe("StrapiController", () => {
  it("Must respond whith token or authenticate", async () => {
    const mockService = { login: jest.fn().mockResolvedValue("token123") };
    const controller = new StrapiController(mockService as any);
    const req = {
      body: { identifier: "user", password: "pass" },
    } as any as Request;
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as any as Response;
    await controller.login(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ success: true, token: "token123" });
  });
});
