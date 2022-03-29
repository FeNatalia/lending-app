const notFound = (err, next) => {
  const error = err;
  error.status = 404;
  next(err);
};

const errorHandler = (_req, _res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
};

const globalErrorHandler = (err, _req, res, _next) =>
  res.status(err.status || 500).json({ error: err.message });

module.exports = { notFound, errorHandler, globalErrorHandler };
