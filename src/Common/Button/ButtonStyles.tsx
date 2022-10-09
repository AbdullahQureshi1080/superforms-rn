import {StyleSheet} from 'react-native';
import {colors} from '../../assets/colors';

const styles = StyleSheet.create({
  labelStyle: {
    fontSize: 16,
    color: colors.text,
    marginHorizontal: 2,
    width: `85%`,
    textAlign: 'center',
  },
  containerStyle: {
    marginVertical: 2.5,
    borderRadius: 8,
    marginHorizontal: 20,
    backgroundColor: colors.primary,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  contentStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    fontSize: 16,
    color: colors.text,
    width: '95%',
  },
  cursor: {
    color: colors.grey,
  },
  assistiveText: {
    fontSize: 12,
    color: colors.grey,
  },
  errorText: {
    fontSize: 12,
    color: colors.error,
  },
});

export default styles;
