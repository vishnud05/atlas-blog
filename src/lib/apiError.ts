export default class AtlasError extends Error {
  public isOperational: boolean;
  public status: string;
  constructor(message: string, public statusCode: number) {
    super(message);
    this.statusCode = statusCode || 500;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}
