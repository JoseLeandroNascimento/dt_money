import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './assets/styles/themes/default'
import { GlobalStyle } from './assets/styles/global'

export function App() {

  return (
   <ThemeProvider theme={defaultTheme}>
    <h1>Hello word</h1>
    <GlobalStyle/>
   </ThemeProvider>
  )
}

