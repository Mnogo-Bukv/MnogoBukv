import { Command, UpdateMap } from 'react-use-backlash'

type State = {
  gameIsVisible: boolean
  aboutIsVisible: boolean
  gameOverIsVisible: boolean
  leaderboardIsVisible: boolean
}

type Actions = {
  openGame: []
  openAbout: []
  openGameOver: []
  openLeaderboard: []
  closeGame: []
  closeGameOver: []
  closeGameDeferred: []
  closeGameOverDeferred: []
  returnToMenu: []
}

type Injects = {
  defer: (call: () => void) => void
}

const init = (): Command<State, Actions, Injects> => [
  {
    gameIsVisible: false,
    aboutIsVisible: false,
    gameOverIsVisible: false,
    leaderboardIsVisible: false,
  },
]

const updates: UpdateMap<State, Actions, Injects> = {
  openAbout: (state) => [{ ...state, aboutIsVisible: true }],

  openGame: (state) => [{ ...state, gameIsVisible: true }],

  openGameOver: (state) => [{ ...state, gameOverIsVisible: true }],

  openLeaderboard: (state) => [{ ...state, leaderboardIsVisible: true }],

  closeGame: (state) => [{ ...state, gameIsVisible: false }],

  closeGameDeferred: (state) => [state, ({ closeGame }, { defer }) => defer(closeGame)],

  closeGameOver: (state) => [{ ...state, gameOverIsVisible: false }],

  closeGameOverDeferred: (state) => [
    state,
    ({ closeGameOver }, { defer }) => defer(closeGameOver),
  ],

  returnToMenu: (state) => [
    {
      ...state,
      gameIsVisible: false,
      aboutIsVisible: false,
      gameOverIsVisible: false,
      leaderboardIsVisible: false,
    },
  ],
}

export const Navigation = { init, updates } as const
