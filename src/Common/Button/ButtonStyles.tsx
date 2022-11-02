import { StyleSheet } from "react-native";
import { colors } from "../../assets/colors";
import baseStyles from "../../Styles/BaseStyles";

const styles = StyleSheet.create({
  ...baseStyles,
  labelStyle: {
    fontSize: 16,
    color: colors.text,
    marginHorizontal: 2,
    width: `85%`,
    textAlign: "center",
  },
  containerStyle: {
    marginVertical: 2.5,
    borderRadius: 8,
    marginHorizontal: 20,
    backgroundColor: colors.primary,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  contentStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
