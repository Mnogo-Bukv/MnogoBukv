import React from 'react'
import { useBacklash } from 'react-use-backlash'
import { noop } from '../../utils'
import { About } from '../About'
import { Game } from '../Game'
import { GameOver } from '../GameOver'
import { Leaderboard } from '../Leaderboard'
import { Menu } from '../Menu'
import { Navigation } from './navigation'

const injects = {
  defer: noop,
}

export const App: typeof import('./App').App = () => {
  const [
    { aboutIsVisible, gameIsVisible, gameOverIsVisible, leaderboardIsVisible },
    { openAbout, openGame, openGameOver, openLeaderboard, returnToMenu },
  ] = useBacklash(Navigation.init, Navigation.updates, injects)

  return (
    <>
      <Menu openAbout={openAbout} openGame={openGame} openLeaderboard={openLeaderboard} />
      {gameIsVisible && <Game openGameOver={openGameOver} returnToMenu={returnToMenu} />}
      {gameOverIsVisible && (
        <GameOver openLeaderboard={openLeaderboard} returnToMenu={returnToMenu} />
      )}
      {leaderboardIsVisible && <Leaderboard returnToMenu={returnToMenu} />}
      {aboutIsVisible && <About returnToMenu={returnToMenu} />}
    </>
  )
}
