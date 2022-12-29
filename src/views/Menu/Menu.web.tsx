import React from 'react'
import { Gap } from '../Gap'
import { classes } from './Menu.css'

export const Menu: typeof import('./Menu').Menu = React.memo(function Menu({
  openAbout,
  openGame,
  openLeaderboard,
}) {
  return (
    <div className={classes.screen}>
      <div className={classes.title}>{'MENU'}</div>
      <Gap size={15} />
      <input type={'button'} value={'НОВАЯ ИГРА'} onClick={openGame} />
      <Gap size={15} />
      <input type={'button'} value={'РЕКОРДЫ'} onClick={openLeaderboard} />
      <Gap size={15} />
      <input type={'button'} value={'ОБ ИГРЕ'} onClick={openAbout} />
    </div>
  )
})
