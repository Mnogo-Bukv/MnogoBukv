import React from 'react'
import { Modal } from 'react-native'
import { useBacklash } from 'react-use-backlash'
import { About } from '../About'
import { Game } from '../Game'
import { GameOver } from '../GameOver'
import { Leaderboard } from '../Leaderboard'
import { Menu } from '../Menu'
import { Navigation } from './navigation'

const injects = {
  defer: (call: () => void) => {
    setTimeout(call, 100)
  },
}

export const App: typeof import('./App').App = () => {
  const [
    { aboutIsVisible, gameIsVisible, gameOverIsVisible, leaderboardIsVisible },
    {
      openAbout,
      openGame,
      openGameOver,
      openLeaderboard,
      closeGameDeferred,
      closeGameOverDeferred,
      returnToMenu,
    },
  ] = useBacklash(Navigation.init, Navigation.updates, injects)

  return (
    <>
      <Menu openAbout={openAbout} openGame={openGame} openLeaderboard={openLeaderboard} />
      <Modal
        visible={gameIsVisible}
        onRequestClose={returnToMenu}
        animationType={'slide'}
      >
        <Game openGameOver={openGameOver} returnToMenu={returnToMenu} />
      </Modal>
      <Modal
        visible={gameOverIsVisible}
        onRequestClose={returnToMenu}
        animationType={'slide'}
        onShow={closeGameDeferred}
      >
        <GameOver openLeaderboard={openLeaderboard} returnToMenu={returnToMenu} />
      </Modal>
      <Modal
        visible={leaderboardIsVisible}
        onRequestClose={returnToMenu}
        animationType={'slide'}
        onShow={closeGameOverDeferred}
      >
        <Leaderboard returnToMenu={returnToMenu} />
      </Modal>
      <Modal
        visible={aboutIsVisible}
        onRequestClose={returnToMenu}
        animationType={'slide'}
      >
        <About returnToMenu={returnToMenu} />
      </Modal>
    </>
  )
}
