import { LOGIN_STATES, LoginStates } from "@/constants/login/LoginProviders";
import { ILoginReducerAction, LoginReducer } from "@/lib/reducers/loginReducer";
import { Dispatch, ReactNode, createContext, useReducer } from "react";

interface ILoginProvider {
  children: ReactNode;
}

export const LoginContext = createContext<{
  loginStates: LoginStates;
  dispatch: Dispatch<ILoginReducerAction>;
}>({
  loginStates: LOGIN_STATES,
  dispatch: () => {},
});

const LoginProvider = (props: ILoginProvider) => {
  const { children } = props;
  const [loginStates, dispatch] = useReducer(LoginReducer, LOGIN_STATES);

  return (
    <LoginContext.Provider value={{ loginStates, dispatch }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
