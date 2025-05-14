export class CharactersOperationError extends Error {
  constructor(
    public operation: string,
    message: string,
    public originalError?: unknown
  ) {
    super(message);
    this.name = `CharactersOperationError:${operation}`;
    Error.captureStackTrace(this, this.constructor);
  }
}
