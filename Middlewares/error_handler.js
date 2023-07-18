const error_handler = function (err, req, res, next) {
    res.status(500).json({
        message: 'Something went wrong',
        status: 500
    });
}

module.exports = error_handler;