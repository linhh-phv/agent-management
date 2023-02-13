export interface IError {
  message: string;
  code: number;
  data?: any;
}

export interface ISuccess<T> {
  data?: T;
  message?: string;
}

export interface IActionCallback<T> {
  onSuccess?: (response?: ISuccess<T>) => void;
  onFail?: (error?: IError) => void;
}

export interface IApiResponse<T> {
  isSuccess: boolean;
  data?: T;
  header?: any;
  errors?: any;
}
