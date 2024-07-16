import { StyleSheet, Text, View } from "react-native";
import { memo } from "react";
import LoginInputEmail from "./LoginInputEmail";
import LoginInputPassword from "./LoginInputPassword";
import Button from "../common/Button";
import { useLoginContext } from "@/lib/useContext/useLoginContext";
import { LoginErrorField } from "@/constants/login/LoginProviders";
import { fetchLogin } from "@/lib/api/auth/fetchLogin";
import { router } from "expo-router";

const LoginForm = () => {
  const { dispatch, loginStates } = useLoginContext();

  const handleSubmit = async () => {
    dispatch({ name: "errorField", value: LoginErrorField.NONE });

    if (!loginStates.password) {
      dispatch({ name: "errorField", value: LoginErrorField.PASSWORD });
      return;
    }

    if (!loginStates.email) {
      dispatch({ name: "errorField", value: LoginErrorField.EMAIL });
      return;
    }

    const request = {
      email: loginStates.email,
      password: loginStates.password,
    };
    const result = await fetchLogin(request);

    if (result.statusCode === 200) {
      router.push("(tabs)");
    }
    console.log("result", result);
  };

  return (
    <View style={styles.container}>
      <LoginInputEmail />
      <LoginInputPassword />

      <Text style={styles.forgot}>forgot password</Text>

      <View>
        <Button onPress={handleSubmit}>Sign In</Button>
      </View>
    </View>
  );
};

export default memo(LoginForm);

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: "70%",
    gap: 10,
  },
  forgot: {
    fontSize: 12,
    textAlign: "right",
    color: "white",
  },
});
