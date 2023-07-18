const error_handler = function (err, req, res, next) {
    const cusomError = {
        status: err.status || 500,
        message: err.message || 'Something went wrong'
    };
    // Duplicate key error
    if(cusomError.errorCode === 11000) {
        cusomError.message = `Duplicate value entered for ${Object.keys(err.keyValue)} field, please choose another value`;
        cusomError.status = 400;
    }

    // Validation error
    if(err.name === 'ValidationError') {
        cusomError.message = Object.values(err.errors).map(value => value.message).join(', ');
        cusomError.status = 400;
    }

    // Mongoose bad object id
    if(err.name === 'CastError') {
        cusomError.message = `No item found with id: ${err.value}`;
        cusomError.status = 404;
    }

    // JWT error
    if(err.name === 'JsonWebTokenError') {
        cusomError.message = `JWT Error: ${err.message}`;
        cusomError.status = 401;
    }

    // JWT expired error
    if(err.name === 'TokenExpiredError') {
        cusomError.message = `JWT expired at: ${err.expiredAt}`;
        cusomError.status = 401;
    }
    
    res.status(cusomError.status).json({
        error: cusomError.message
    });
}

module.exports = error_handler;