const ExpressBrute = require("express-brute");
const RedisStore = require("express-brute-redis");
const moment = require("moment");
const Redis = require("ioredis");

// Configure the Redis store for express-brute
const store = new RedisStore({
  host: "localhost", // Replace with your Redis server details
  port: 6379,
});

// Function to create and return the rate limiting middleware
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

  // Create the brute-force middleware for the given namespace
  const bruteforce = new ExpressBrute(store, {
    freeRetries,
    minWait: minWait * 60 * 1000, // Convert minutes to milliseconds
    failCallback,
    key(req) {
      // Create a unique key for each request based on the namespace
      return `bruteforce:${namespace}:${req.ip}`;
    },
  });

  // Function to clear data from Redis
  async function clearRedis() {
    try {
      // Create a Redis client
      const redisClient = new Redis(store.redisOptions);

      // Clear the Redis database
      await redisClient.flushdb();

      console.log("Data cleared from Redis");
    } catch (error) {
      console.error("Error clearing data from Redis:", error);
    }
  }

  // Call the clearRedis function to clear data from Redis
  //   clearRedis();

  // Return the middleware function
  return function rateLimitMiddleware(req, res, next) {
    bruteforce.prevent(req, res, next);
  };
}

module.exports = createRateLimitMiddleware;
