import { Search as SearchIcon } from "@mui/icons-material"
import { alpha, InputBase, styled } from "@mui/material"

const SearchWrapper = styled("div")(() => ({
  position: "absolute",
  left: "50%",
  width: "fit-content",
}))

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  marginLeft: "-50%",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  width: "fit-content",
  [theme.breakpoints.up("sm")]: {
    width: "fit-content",
  },
}))

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "30ch",
      },
    },
  },
}))

const SearchBar = () => {
  return (
    <SearchWrapper>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search..."
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
    </SearchWrapper>
  )
}

export default SearchBar
