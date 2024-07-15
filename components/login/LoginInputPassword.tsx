import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { LoginErrorField } from "@/constants/login/LoginProviders";
import { useLoginContext } from "@/lib/useContext/useLoginContext";

const LoginInputPassword = () => {
  const { dispatch, loginStates } = useLoginContext();

  const handleOnChange = (value: string) => {
    dispatch({ name: "password", value });
  };

  return (
    <View>
      <TextInput
        autoCapitalize="none"
        placeholder="Password"
        style={styles.input}
        onChangeText={handleOnChange}
      />
      {loginStates.errorField === LoginErrorField.PASSWORD && (
        <Text style={styles.error}>please fill this field</Text>
      )}
    </View>
  );
};

export default LoginInputPassword;

const styles = StyleSheet.create({
  input: {
    backgroundColor: "white",
    borderColor: "gray",
    borderRadius: 8,
    height: 30,
    paddingLeft: 5,
  },
  error: {
    color: "red",
    fontSize: 12,
    marginTop: 5,
  },
});
