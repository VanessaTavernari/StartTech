import { Router } from "express";
import User from "./app/models/User";

const routes = new Router();

routes.get("/", async(req, res) => {
    const user = {
        name: "Vanessa",
        password_hash: "123456"
    }
    return res.json(user)
})

export default routes;