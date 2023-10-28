import { StatusCodes } from "http-status-codes";
import CustomAPIError from "./customAPIerror.js"


class BadReqError extends CustomAPIError {
    constructor(message) {
        super(message)
        this.statusCode = StatusCodes.BAD_REQUEST
    }
}

export default BadReqError