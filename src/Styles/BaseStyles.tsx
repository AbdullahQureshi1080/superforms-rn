import { StyleProp, StyleSheet } from "react-native";
import { colors } from "../assets/colors";

const baseStyles = StyleSheet.create({
  labelStyle: {
    fontSize: 14,
    color: colors.text,
    marginHorizontal: 4,
    fontWeight: "600",
  },
  containerStyle: {
    marginBottom: 10,
    marginHorizontal: 20,
    borderWidth: 0.6,
    borderRadius: 8,
    borderColor: "#929AAB",
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  assistiveTextStyle: {
    fontSize: 12,
    color: colors.grey,
  },
  errorText: {
    fontSize: 12,
    color: colors.error,
    marginHorizontal: 5,
  },
  contentStyle: {},
});

const errorStyle = (
  errorVisibility: boolean | undefined,
  errorMessage: string | undefined
): StyleProp<any> => {
  const borderColor =
    errorVisibility && errorMessage ? colors.error : colors.grey;
  return { ...baseStyles, borderColor };
};

export { errorStyle };
export default baseStyles;
