import { Box, Container } from "@mui/material"
import React from "react"
import AppBar from "../components/AppBar"

type Props = {
  children: React.ReactNode
}

const MainLayout = (props: Props) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        maxWidth: "100vw",
      }}
    >
      <AppBar />
      <Container
        sx={{
          display: "flex",
          // position: "relative",
          justifyContent: "space-between",
          gap: 3,
          maxWidth: "100%",
          height: "100%",
        }}
      >
        {props.children}
        <Box
          sx={{
            display: "flex",
            position: "sticky",
            top: 96,
            background: "red",
            width: 250,
            height: "100%",
          }}
        >
          <Box
            sx={{
              height: 500,
            }}
          ></Box>
        </Box>
      </Container>
    </Box>
  )
}

export default MainLayout
