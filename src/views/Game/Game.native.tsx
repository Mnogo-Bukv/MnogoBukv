import React from 'react'
import { Button, Text, View } from 'react-native'
import { Gap } from '../Gap'
import { styles } from './Game.nss'

export const Game: typeof import('./Game').Game = React.memo(function Game({
  returnToMenu,
  openGameOver,
}) {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>{'GAME'}</Text>
      <Gap size={15} />
      <Button title={'ВСЁ'} onPress={openGameOver} />
      <Gap size={15} />
      <Button title={'ГОТОВО'} onPress={returnToMenu} />
    </View>
  )
})
