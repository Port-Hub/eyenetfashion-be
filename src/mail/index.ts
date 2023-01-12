import { Router } from "express";
import Mailer from "./controller";

const router: Router = Router();
const mail: Mailer = new Mailer();

router.post("/", mail.Controller);

export default router;