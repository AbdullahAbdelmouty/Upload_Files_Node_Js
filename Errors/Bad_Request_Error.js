class Bad_Request_Error extends CustomAPIError {
    constructor(message) {
        super(message);
        this.statusCode = 400;
    }
}

module.exports = Bad_Request_Error;