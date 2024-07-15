import { LoginStates } from "@/constants/login/LoginProviders";

export interface ILoginReducerAction {
  name: keyof LoginStates;
  value: string | number;
}

export const LoginReducer = (
  state: any,
  action: ILoginReducerAction
) => {
  state[action.name] = action.value;
  return {...state};
};
