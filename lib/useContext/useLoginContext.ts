import { LoginContext } from "@/components/login/LoginProvider";
import { useContext } from "react";

export const useLoginContext = () => {
  const context = useContext(LoginContext);

  return context;
};
