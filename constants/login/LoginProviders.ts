export enum LoginErrorField {
  EMAIL,
  PASSWORD,
  NONE,
}

export interface LoginStates {
  email: string;
  password: string;
  errorField: LoginErrorField;
}

export const LOGIN_STATES: LoginStates = {
  email: "",
  password: "",
  errorField: LoginErrorField.NONE,
};
