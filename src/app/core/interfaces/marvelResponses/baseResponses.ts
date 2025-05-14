export interface BaseResponse<T> {
  code: number;
  data: {
    limit: number;
    offset: number;
    total: number;
    count: number;
    results: T[];
  };
}
