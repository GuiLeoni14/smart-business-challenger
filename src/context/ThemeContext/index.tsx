import { ReactNode, createContext, useState } from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import light from '../../styles/theme/light'

interface ThemeContextData {
  theme: DefaultTheme
}

interface ThemeContextProviderProps {
  children: ReactNode
}

export const ThemeContext = createContext({} as ThemeContextData)

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [theme, setTheme] = useState(light)
  // before update theme for layout

  return (
    <ThemeProvider theme={theme}>
      <ThemeContext.Provider value={{ theme }}>
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  )
}
