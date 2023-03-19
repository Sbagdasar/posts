import { createContext } from 'react'

export type AuthContextType = {
  isAuth: boolean
  setIsAuth: (value: boolean) => void
}

export const AuthContext = createContext<AuthContextType | null>(null)
