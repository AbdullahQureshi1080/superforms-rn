import { Dimensions, StyleSheet } from "react-native";
import baseStyles from "../../Styles/BaseStyles";

const styles = StyleSheet.create({
  ...baseStyles,
  placeholderImageStyles: {
    width: 85,
    height: 85,
  },
  imageStyles: {
    width: 85,
    height: 85,
    borderRadius: 8,
  },
  containerStyle: {
    width: Dimensions.get("window").width / 2 - 40,
    alignItems: "center",
  },
});

export default styles;
