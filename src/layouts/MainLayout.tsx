import { Box } from "@mui/material"
import React from "react"
import AppBar from "../components/AppBar"

type Props = {
  children: React.ReactNode
}

const MainLayout = (props: Props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar />
      {props.children}
    </Box>
  )
}

export default MainLayout
