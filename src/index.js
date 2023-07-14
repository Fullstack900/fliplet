const express = require("express");
const createRateLimitMiddleware = require("./middlewares/rateLimitMiddleware");
const app = express();

const router = express.Router();

app.use(createRateLimitMiddleware("global", 2, 2));

require("./js-orm");
require("./functional-programming");

router.get(
  "/v1/users",
  createRateLimitMiddleware("users", 20, 1),
  function (req, res) {
    res.send("Done");
  }
);

router.get(
  "/v1/apps",
  createRateLimitMiddleware("apps", 5, 2),
  async function (req, res) {
    try {
      let result = await createRateLimitMiddleware("apps", 5, 2)(req, res);
      console.log(result);
      res.send(result);
    } catch (err) {
      res.status(err.code).send(err.message);
    }
  }
);

app.use(router);

const PORT = 9000;

async function startServer() {
  return new Promise((resolve, reject) => {
    const server = app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
      resolve(server);
    });

    server.on("error", (error) => {
      reject(error);
    });
  });
}

startServer();
