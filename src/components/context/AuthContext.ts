import { createContext, Dispatch, SetStateAction } from 'react'

export type AuthContextType = {
  isAuth: boolean
  setIsAuth: Dispatch<SetStateAction<boolean>>
}

export const AuthContext = createContext<AuthContextType>({
  isAuth: false,
  setIsAuth: () => {},
})
