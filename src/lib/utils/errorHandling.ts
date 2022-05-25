const errorHandler = (err, req, res, next) => {
  const defaultErr = {
    log: err,
    status: 400,
    message: { err: 'An error occurred' },
 };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
}


export default errorHandler