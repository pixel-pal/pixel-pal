const defaultErr = {
  log: 'Express middleware caught an unknown error',
  status: 400,
  message: { err: 'An error occurred' },
};

const errorHandler = (err, req, res, next) => {
  const errorObj = { ...defaultErr, ...err };
  return res.json(errorObj);
};

export default errorHandler;
