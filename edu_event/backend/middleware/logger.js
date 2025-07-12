const logger = (req, res, next) => {
  const time = new Date().toISOString();
  console.log(`[${time}] ${req.method} ${req.originalUrl}`);
  next(); // kalon te middleware tjetër ose route handler
};

module.exports = logger;
