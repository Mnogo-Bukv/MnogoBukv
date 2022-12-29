import React from 'react'
import { Button, Text, View } from 'react-native'
import { Gap } from '../Gap'
import { styles } from './Menu.nss'

export const Menu: typeof import('./Menu').Menu = React.memo(function Menu({
  openAbout,
  openGame,
  openLeaderboard,
}) {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>{'MENU'}</Text>
      <Gap size={15} />
      <Button title={'НОВАЯ ИГРА'} onPress={openGame} />
      <Gap size={15} />
      <Button title={'РЕКОРДЫ'} onPress={openLeaderboard} />
      <Gap size={15} />
      <Button title={'ОБ ИГРЕ'} onPress={openAbout} />
    </View>
  )
})
