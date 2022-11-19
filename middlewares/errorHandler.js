import { DEBUG_MODE } from "../config";

const errorHandler = (error, req, res, next) => {
  let status = 500;
  let data = {
    message: "internal server error",
    ...(DEBUG_MODE === "true" && { original_message: error.message }),
  };

  res.status(status).json(data);
};

export default errorHandler;
