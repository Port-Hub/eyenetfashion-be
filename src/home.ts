import { Router } from "express";
import { Request, Response } from "express";

const home: Router = Router();

// API Home Page
home.get("/", async (req: Request, res: Response): Promise<any> => {
  try {
    var title: string = `Eyenetfashion | Be`;
    res.send(
        `<!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${title}</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
            </head>
            <body style="background-color: #03182c; color: #e6e6f6">
            <div class="min-vh-100 m-0 d-flex flex-column flex-md-row align-items-center justify-content-center ">
                <div class="align-items-center"><img height="125px" src="/favicon.svg" alt="" srcset=""></div>
                <h3 class="mt-0 text-left">Server of <br> <span class="fw-bold h1">${title}</span></h3>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
            </body>
        </html>`
      );
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err.toString(),
    });
  }
});

export default home;
