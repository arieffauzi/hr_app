import { ReactNode, memo } from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";

interface IPageCard {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

const PageCard = (props: IPageCard) => {
  const { children, style } = props;
  return <View style={[styles.page, style]}>{children}</View>;
};

export default memo(PageCard);

const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    padding: 16,
    flex: 1,
  },
});
