import React from 'react'
import { Button, Text, View } from 'react-native'
import { Gap } from '../Gap'
import { styles } from './Leaderboard.nss'

export const Leaderboard: typeof import('./Leaderboard').Leaderboard = React.memo(
  function Leaderboard({ returnToMenu }) {
    return (
      <View style={styles.screen}>
        <Text style={styles.title}>{'LEADERBOARD'}</Text>
        <Gap size={15} />
        <Button title={'ГОТОВО'} onPress={returnToMenu} />
      </View>
    )
  },
)
