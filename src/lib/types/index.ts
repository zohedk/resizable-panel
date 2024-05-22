import { CSSProperties } from "react";

// types for response data
interface ChildData {
  id: number;
  childName: string;
  data: string;
  createdAt: Date;
  updatedAt: Date;
}

interface CountData {
  id: number;
  addDataCount: number;
  updateDataCount: number;
}

type ResponseType = "child-data" | "count";

type Data<T extends ResponseType> = T extends "child-data"
  ? ChildData[]
  : CountData;

export interface ResponseData<T extends ResponseType> {
  success: boolean;
  message: string;
  data: Data<T>;
}

// types for input data
export interface AddData {
  childName: string;
  data: string;
}

export interface UpdateData {
  id: number;
  data: string;
}

type MutationsType = "add" | "update";

type Input<T extends MutationsType> = T extends "add" ? AddData : UpdateData;

export type InputData<T extends MutationsType> = Input<T>;

// button type
export interface ButtonProp {
  className?: string;
  style?: CSSProperties;
  text: string;
  onClick: () => void;
}
