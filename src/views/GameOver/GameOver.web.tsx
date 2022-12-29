import React from 'react'
import { Gap } from '../Gap'
import { classes } from './GameOver.css'

export const GameOver: typeof import('./GameOver').GameOver = React.memo(
  function GameOver({ returnToMenu, openLeaderboard }) {
    return (
      <div className={classes.screen}>
        <div className={classes.title}>{'GAME OVER'}</div>
        <Gap size={15} />
        <input type={'button'} value={'РЕКОРДЫ'} onClick={openLeaderboard} />
        <Gap size={15} />
        <input type={'button'} value={'ГОТОВО'} onClick={returnToMenu} />
      </div>
    )
  },
)
