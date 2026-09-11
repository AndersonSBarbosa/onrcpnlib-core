// src/dto/response.model.ts

export interface ResponseModel<T> {
  success: boolean;
  message?: string;
  data?: T;
}