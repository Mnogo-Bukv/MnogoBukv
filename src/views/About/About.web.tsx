import React from 'react'
import { Gap } from '../Gap'
import { classes } from './About.css'

export const About: typeof import('./About').About = React.memo(function About({
  returnToMenu,
}) {
  return (
    <div className={classes.screen}>
      <div className={classes.title}>{'ABOUT'}</div>
      <Gap size={15} />
      <input type={'button'} value={'ГОТОВО'} onClick={returnToMenu} />
    </div>
  )
})
