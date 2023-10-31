import { StatusCodes } from "http-status-codes";
import CustomAPIError from "./customAPIerror.js"


class UnAuthenticatedError extends CustomAPIError {
    constructor(message) {
        super(message)
        this.statusCode = StatusCodes.UNAUTHORIZED
    }
}

export default UnAuthenticatedError