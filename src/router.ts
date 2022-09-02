import { Router, Request, Response } from "express";
import { UserController } from "./controllers/UserController";
import { ApiError } from "./helpers/api-erros";

const router = Router()

router.get('/', (req, res) => {
    throw new ApiError("Erro lançado dentro", 400)

    return res.json("ok")
})

router.post('/user', new UserController().create)

export { router }
