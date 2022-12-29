import { style } from '@vanilla-extract/css'

const screen = style({
  backgroundColor: '#00FF0080',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  width: '100vw',
  position: 'absolute',
})

const title = style({
  textAlign: 'center',
  fontSize: 24,
})

export const classes = {
  screen,
  title,
} as const
