import React from 'react'
import { Button, Text, View } from 'react-native'
import { Gap } from '../Gap'
import { styles } from './GameOver.nss'

export const GameOver: typeof import('./GameOver').GameOver = React.memo(
  function GameOver({ returnToMenu, openLeaderboard }) {
    return (
      <View style={styles.screen}>
        <Text style={styles.title}>{'GAME OVER'}</Text>
        <Gap size={15} />
        <Button title={'РЕКОРДЫ'} onPress={openLeaderboard} />
        <Gap size={15} />
        <Button title={'ГОТОВО'} onPress={returnToMenu} />
      </View>
    )
  },
)
