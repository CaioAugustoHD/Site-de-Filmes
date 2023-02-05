import { ThemeProvider } from "styled-components";
import { AppRoutes } from "./routes";
import { GlobalStyle } from "./styles/GlobalStyle";
import { defaultTheme } from "./styles/theme/defaultTheme";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      <AppRoutes/>
    </ThemeProvider>
  )
}
