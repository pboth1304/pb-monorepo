export interface JSendResponse {
  status: JSendStatusType;
  results?: number;
  data: Object;
}

export type JSendStatusType = 'success' | 'fail' | 'error';
