const ExpressBrute = require("express-brute");
const RedisStore = require("express-brute-redis");
const moment = require("moment");
const Redis = require("ioredis");

const store = new RedisStore({
  host: "localhost",
  port: 6379,
});

function createRateLimitMiddleware(namespace, freeRetries, minWait) {
  const failCallback = (req, res, next, nextValidRequestDate) => {
    const remainingTime = moment.duration(
      nextValidRequestDate.getTime() - Date.now()
    );
    const minutes = remainingTime.asMinutes();
    res
      .status(429)
      .send(
        `Too many requests for the ${namespace} namespace. Please retry in ${minutes} minutes.`
      );
  };

  const bruteforce = new ExpressBrute(store, {
    freeRetries,
    minWait: minWait * 60 * 1000,
    failCallback,
    key(req) {
      return `bruteforce:${namespace}:${req.ip}`;
    },
  });

  async function clearRedis() {
    try {
      const redisClient = new Redis(store.redisOptions);

      await redisClient.flushdb();

      console.log("Data cleared from Redis");
    } catch (error) {
      console.error("Error clearing data from Redis:", error);
    }
  }

  // Call the clearRedis function to clear data from Redis
  //   clearRedis();

  return function rateLimitMiddleware(req, res, next) {
    bruteforce.prevent(req, res, next);
  };
}

module.exports = createRateLimitMiddleware;
