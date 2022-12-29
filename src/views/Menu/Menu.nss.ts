import { TextStyle, ViewStyle } from 'react-native'

const screen: ViewStyle = {
  backgroundColor: '#00FF0080',
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
}

const title: TextStyle = {
  textAlign: 'center',
  fontSize: 24,
}

export const styles = {
  screen,
  title,
} as const
