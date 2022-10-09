import {StyleSheet} from 'react-native';
import {colors} from '../../assets/colors';

const styles = StyleSheet.create({
  labelStyle: {
    fontSize: 14,
    color: colors.text,
    marginHorizontal: 4,
    fontWeight: '600',
  },
  containerStyle: {
    marginBottom: 10,
    marginHorizontal: 20,
    borderWidth: 0.6,
    borderRadius: 8,
    borderColor: '#929AAB',
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputStyle: {
    fontSize: 16,
    color: colors.text,
    width: '95%',
  },
  cursor: {
    color: colors.grey,
  },
  assistiveTextStyle: {
    fontSize: 12,
    color: colors.grey,
  },
  errorText: {
    fontSize: 12,
    color: colors.error,
  },
});

export default styles;
