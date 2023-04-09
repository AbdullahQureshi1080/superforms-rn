import { StyleSheet } from "react-native";
import { colors } from "../../assets/colors";
import baseStyles from "../../Styles/BaseStyles";

const styles = StyleSheet.create({
  ...baseStyles,
  placeholderStyle: {
    color: colors.grey,
    fontSize: 16,
  },
  containerStyle: {
    ...baseStyles.containerStyle,
    marginBottom: 10,
    marginHorizontal: 10,
    borderWidth: 0.6,
    borderRadius: 8,
    paddingVertical: 2,
  },
  pickerContainerStyle: {
    marginBottom: 10,
  },
  dropDownStyle: {
    borderWidth: 0,
    borderRadius: 8,
    borderColor: "#929AAB",
    backgroundColor: "transparent",
  },

  dropDownContainerStyle: {
    flex: 1,
    borderWidth: 0.6,
    borderBottomWidth: 0,
  },
  textStyles: {
    fontSize: 16,
    color: colors.text,
    paddingLeft: 5,
  },
  listItemContainerStyle: {
    // height: 200,
  },
  style: {
    borderWidth: 0,
    backgroundColor: "transparent",
    width: "100%",
  },
});

export default styles;
