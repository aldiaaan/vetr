export type MangadexErrorOptions = {
  code?: string;
  status?: number;
  message?: string;
  errors?: Array<{key: string; detail: string}>;
};

export class MangadexError {
  code?: string;
  status?: number;
  message?: string;
  errors?: Array<{key: string; detail: string}>;

  constructor(options?: MangadexErrorOptions) {
    this.code = options?.code || 'MANGADEX_ERROR';
    this.status = options?.status || 500;
    this.message = options?.message || '';
    this.errors = options?.errors || [];
  }

  toJSON() {
    return {
      code: this.code,
      status: this.status,
      message: this.message,
      errors: this.errors,
    };
  }

  toString() {
    return this.message;
  }
}

export class MangadexRestError extends MangadexError {
  constructor(options?: MangadexErrorOptions) {
    super({...options, code: 'MANGADEX_REST_ERROR'});
  }
}
