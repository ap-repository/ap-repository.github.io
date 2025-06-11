import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material"
import { createRouter, RouterProvider } from "@tanstack/react-router"
import MainLayout from "./layouts/MainLayout"
import { routeTree } from "./routeTree.gen"

const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
})

const router = createRouter({ routeTree })

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainLayout>
        <RouterProvider router={router} />
      </MainLayout>
    </ThemeProvider>
  )
}

export default App
