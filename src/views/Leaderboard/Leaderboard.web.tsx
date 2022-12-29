import React from 'react'
import { Gap } from '../Gap'
import { classes } from './Leaderboard.css'

export const Leaderboard: typeof import('./Leaderboard').Leaderboard = React.memo(
  function Leaderboard({ returnToMenu }) {
    return (
      <div className={classes.screen}>
        <div className={classes.title}>{'LEADERBOARD'}</div>
        <Gap size={15} />
        <input type={'button'} value={'ГОТОВО'} onClick={returnToMenu} />
      </div>
    )
  },
)
