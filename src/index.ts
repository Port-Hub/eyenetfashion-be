import * as dotenv from "dotenv"
import server from "./server";
dotenv.config();


server.listen(process.env.API_PORT || "9000", () => {
    console.log(
        `The API server has successfully started. \nListening at ${
          process.env.BASE_URL || "http://localhost:9000"
        }`
    )
})