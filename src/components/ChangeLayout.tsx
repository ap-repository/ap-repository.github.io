import {
  GridOn,
  GridOnOutlined,
  ViewList,
  ViewListOutlined,
  Window,
  WindowOutlined,
} from "@mui/icons-material"
import { IconButton, useMediaQuery } from "@mui/material"
import { useState } from "react"

const LAYOUT = {
  Grid: 0,
  Compact: 1,
  List: 2,
}

const ChangeLayout = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")

  const [layout, setLayout] = useState(LAYOUT.Grid)

  const handleOnClick = () => {
    setLayout((oldLayout) => {
      const newLayout = oldLayout + 1
      if (newLayout < 3) {
        return newLayout
      } else {
        return LAYOUT.Grid
      }
    })
  }

  const getAriaLabel = (): string => {
    switch (layout) {
      case LAYOUT.Grid:
        return "Grid"
      case LAYOUT.Compact:
        return "Compact"
      case LAYOUT.List:
        return "List"
    }
    return "Layout"
  }

  const getIcon = () => {
    switch (layout) {
      case LAYOUT.Grid:
        if (prefersDarkMode) return <WindowOutlined />
        return <Window />
      case LAYOUT.Compact:
        if (prefersDarkMode) return <GridOnOutlined />
        return <GridOn />
      case LAYOUT.List:
        if (prefersDarkMode) return <ViewListOutlined />
        return <ViewList />
    }
  }

  return (
    <IconButton onClick={handleOnClick} aria-label={getAriaLabel()}>
      {getIcon()}
    </IconButton>
  )
}

export default ChangeLayout
