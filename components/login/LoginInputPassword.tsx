import { StyleSheet, Text, TextInput, View } from "react-native";
import { LoginErrorField } from "@/constants/login/LoginProviders";
import { useLoginContext } from "@/lib/useContext/useLoginContext";
import { memo } from "react";

const LoginInputPassword = () => {
  const { dispatch, loginStates } = useLoginContext();

  const handleOnChange = (value: string) => {
    dispatch({ name: "password", value });
  };

  return (
    <View>
      <TextInput
        secureTextEntry={true}
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

export default memo(LoginInputPassword);

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
