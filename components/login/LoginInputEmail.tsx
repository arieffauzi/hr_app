import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { memo } from "react";
import { useLoginContext } from "@/lib/useContext/useLoginContext";
import { LoginErrorField } from "@/constants/login/LoginProviders";

const LoginInputEmail = () => {
  const { dispatch, loginStates } = useLoginContext();

  const handleOnChange = (value: string) => {
    dispatch({ name: "email", value });
  };

  return (
    <View>
      <TextInput
        autoCapitalize="none"
        placeholder="Email"
        style={styles.input}
        onChangeText={handleOnChange}
      />
      {loginStates.errorField === LoginErrorField.EMAIL && (
        <Text style={styles.error}>please fill this field</Text>
      )}
    </View>
  );
};

export default memo(LoginInputEmail);

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
