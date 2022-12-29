import React from 'react'
import { Gap } from '../Gap'
import { classes } from './Game.css'

export const Game: typeof import('./Game').Game = React.memo(function Game({
  returnToMenu,
  openGameOver,
}) {
  return (
    <div className={classes.screen}>
      <div className={classes.title}>{'GAME'}</div>
      <Gap size={15} />
      <input type={'button'} value={'ВСЁ'} onClick={openGameOver} />
      <Gap size={15} />
      <input type={'button'} value={'ГОТОВО'} onClick={returnToMenu} />
    </div>
  )
})
