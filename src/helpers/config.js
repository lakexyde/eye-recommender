const config = {
  nearestNeighbors: process.env.EyeRecommender_NN || 5,
  className: process.env.EyeRecommender_CLASSNAME || "movie",
  numOfRecsStore: process.env.EyeRecommender_NOR || 30,
  factorLeastSimilarLeastLiked: false,
  redisUrl: process.env.EyeRecommender_REDIS_URL || "127.0.0.1",
  redisPort: process.env.EyeRecommender_REDIS_PORT || 6379,
  redisAuth: process.env.EyeRecommender_REDIS_AUTH || ""
};

module.exports = config;
