const CustomAPIError = require("./custom_api_error");

class Not_Found_Error extends CustomAPIError {
    constructor(message) {
        super(message);
        this.statusCode = 404;
    }
}

module.exports = Not_Found_Error;