import words from './words.json'

const contains = (word: string) => words.includes(word)

export const WordList = { contains } as const
