/**
 * To handle async/await errors.
 * With catchAsyncFunction(), every async error
 * ends up in the global error handling middleware.
 * @param fn - given async function
 */
export const wrapAsync = fn => {
  return (req, res, next) => {
    fn(req, res, next).catch(err => next(err));
  };
};

/**
 * Returns a standardized Error Response.
 * @param err - Error Object.
 * @param res - Response Object.
 */
export const globalErrorHandlingMiddleware = (err, req, res, next) => {
  let { statusCode } = err;
  const { message, status } = err;
  /** Fallback if no statusCode is provided */
  if (!statusCode) {
    statusCode = 500;
  }

  res.status(statusCode).json({
    status: status,
    statusCode,
    message
  });
};
