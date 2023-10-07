const errMiddleware = (err, req, res, next) => {
    console.log(err);
    res.status(500).send({
        success: false,
        message: 'something wrong',
        err,
    });
    // Move next() here
    next();
};

module.exports = errMiddleware;
