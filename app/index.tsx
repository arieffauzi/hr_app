import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import LoginForm from "@/components/login/LoginForm";
import LoginProvider from "@/components/login/LoginProvider";
import { Redirect } from "expo-router";

const index = () => {
  return (
    <Redirect href={'/login'}/>
  );
};

export default index;

const styles = StyleSheet.create({
  page: {
    alignItems: "center",
    marginTop: "50%",
    height:'100%'
  },
  title: {
    fontSize: 20,
    fontWeight: 900,
    color:'white'
  },
});
