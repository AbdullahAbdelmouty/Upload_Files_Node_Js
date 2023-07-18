const not_found = (req, res, next) => {
    res.status(404).json({
        message: 'Not found',
        status: 404
    });
}

module.exports = not_found;