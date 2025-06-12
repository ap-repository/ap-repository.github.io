import { Box, CircularProgress, Container } from "@mui/material"
import { useEffect, useState } from "react"
import { GITHUB_URI } from "../../data/env"
import type { APWorld } from "../../types/APWorld"
import APWorldCard from "./APWorldCard"

const APWorldList = () => {
  const [data, setData] = useState<APWorld[] | null>(null)

  useEffect(() => {
    refreshData()
  }, [])

  const refreshData = () => {
    fetch(GITHUB_URI)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error))
  }

  if (!data) {
    return (
      <Container
        sx={{ display: "flex", justifyContent: "center", paddingTop: 4 }}
      >
        <CircularProgress size={100} />
      </Container>
    )
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: 3,
        paddingY: 4,
        flexWrap: "wrap",
      }}
    >
      {data.map((world: APWorld) => {
        return <APWorldCard world={world} />
      })}
    </Box>
  )
}

export default APWorldList
