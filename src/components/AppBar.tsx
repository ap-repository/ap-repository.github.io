import {
  Container,
  AppBar as MuiAppBar,
  Toolbar,
  Typography,
} from "@mui/material"
import SearchBar from "./SearchBar"
import ChangeLayout from "./ChangeLayout"

const AppBar = () => {
  return (
    <MuiAppBar position="sticky">
      <Container>
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Home
          </Typography>
          <SearchBar />
          <ChangeLayout />
        </Toolbar>
      </Container>
    </MuiAppBar>
  )
}

export default AppBar
