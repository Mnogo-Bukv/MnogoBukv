import React from 'react'
import { Button, Text, View } from 'react-native'
import { Gap } from '../Gap'
import { styles } from './About.nss'

export const About: typeof import('./About').About = React.memo(function About({
  returnToMenu,
}) {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>{'ABOUT'}</Text>
      <Gap size={15} />
      <Button title={'ГОТОВО'} onPress={returnToMenu} />
    </View>
  )
})
