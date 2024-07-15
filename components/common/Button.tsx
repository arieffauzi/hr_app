import {
  Animated,
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
} from "react-native";
import React from "react";
import { IButtonVariants } from "@/constants/ButtonVariants";

interface IButton extends PressableProps {
  children: React.ReactNode;
  onPress?: () => void;
  width?: string;
  variants?: IButtonVariants;
}

const Button = (props: IButton) => {
  const { children, variants, width, onPress, ...rest } = props;
  const animated = new Animated.Value(1);
  const fadeIn = () => {
    Animated.timing(animated, {
      toValue: 0.1,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };
  const fadeOut = () => {
    Animated.timing(animated, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Pressable
      {...rest}
      onPress={onPress}
      onPressIn={fadeIn}
      onPressOut={fadeOut}
      style={[styles.primary]}
    >
      <Animated.View style={{ opacity: animated }}>
        <Text style={styles.text}>{children}</Text>
      </Animated.View>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  text: {
    color: "black",
  },
  primary: {
    backgroundColor: "#FFE01B",
    width: "100%",
    alignItems: "center",
    padding: 10,
    borderRadius: 8,
  },
});
