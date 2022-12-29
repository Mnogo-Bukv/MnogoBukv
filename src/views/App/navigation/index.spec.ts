import { renderHook } from 'react-hook-testing'
import { act } from 'react-test-renderer'
import { useBacklash } from 'react-use-backlash'
import { Navigation } from '.'
import { noop, TestUtils } from '../../../utils'

const { getActions, getState, delay } = TestUtils
const { init, updates } = Navigation

const defaultState = {
  gameIsVisible: false,
  aboutIsVisible: false,
  gameOverIsVisible: false,
  leaderboardIsVisible: false,
} as const

const injects = {
  defer: noop,
} as const

describe('navigation', () => {
  test('init', async () => {
    const hook = await renderHook(() => useBacklash(init, updates, injects))

    expect(getState(hook)).toEqual(defaultState)
  })

  test('should set gameIsVisible true on openGame action', async () => {
    const hook = await renderHook(() => useBacklash(init, updates, injects))

    await act(() => {
      getActions(hook).openGame()
    })

    expect(getState(hook)).toEqual({
      ...defaultState,
      gameIsVisible: true,
    })
  })

  test('should set aboutIsVisible true on openAbout action', async () => {
    const hook = await renderHook(() => useBacklash(init, updates, injects))

    await act(() => {
      getActions(hook).openAbout()
    })

    expect(getState(hook)).toEqual({
      ...defaultState,
      aboutIsVisible: true,
    })
  })

  test('should set leaderboardIsVisible true on openLeaderboard action', async () => {
    const hook = await renderHook(() => useBacklash(init, updates, injects))

    await act(() => {
      getActions(hook).openLeaderboard()
    })

    expect(getState(hook)).toEqual({
      ...defaultState,
      leaderboardIsVisible: true,
    })
  })

  test('should set gameOverIsVisible true on openGameOver action', async () => {
    const hook = await renderHook(() => useBacklash(init, updates, injects))

    await act(() => {
      getActions(hook).openGameOver()
    })

    expect(getState(hook)).toEqual({
      ...defaultState,
      gameOverIsVisible: true,
    })
  })

  test('should set gameIsVisible false on closeGame action', async () => {
    const hook = await renderHook(() =>
      useBacklash(() => [{ ...defaultState, gameIsVisible: true }], updates, injects),
    )

    await act(() => {
      getActions(hook).closeGame()
    })

    expect(getState(hook)).toEqual(defaultState)
  })

  test('should set gameIsVisible false after delay on closeGameDeferred action', async () => {
    const defer = (call: () => void) => {
      setTimeout(call, 200)
    }

    const state = { ...defaultState, gameIsVisible: true }

    const hook = await renderHook(() => useBacklash(() => [state], updates, { defer }))

    await act(() => {
      getActions(hook).closeGameDeferred()

      expect(getState(hook)).toEqual(state)

      return delay(300)
    })

    expect(getState(hook)).toEqual(defaultState)
  })

  test('should set gameOverIsVisible false after delay on closeGameOverDeferred action', async () => {
    const defer = (call: () => void) => {
      setTimeout(call, 200)
    }

    const state = { ...defaultState, gameOverIsVisible: true }

    const hook = await renderHook(() =>
      useBacklash(() => [state], updates, {
        defer,
      }),
    )

    await act(() => {
      getActions(hook).closeGameOverDeferred()

      expect(getState(hook)).toEqual(state)

      return delay(300)
    })

    expect(getState(hook)).toEqual(defaultState)
  })

  test('should set gameOverIsVisible false on closeGameOver action', async () => {
    const hook = await renderHook(() =>
      useBacklash(() => [{ ...defaultState, gameOverIsVisible: true }], updates, injects),
    )

    await act(() => {
      getActions(hook).closeGameOver()
    })

    expect(getState(hook)).toEqual(defaultState)
  })

  test('should set all isVisible false on returnToMenu action', async () => {
    const hook = await renderHook(() =>
      useBacklash(
        () => [
          {
            gameIsVisible: true,
            aboutIsVisible: true,
            gameOverIsVisible: true,
            leaderboardIsVisible: true,
          },
        ],
        updates,
        injects,
      ),
    )

    await act(() => {
      getActions(hook).returnToMenu()
    })

    expect(getState(hook)).toEqual(defaultState)
  })
})
