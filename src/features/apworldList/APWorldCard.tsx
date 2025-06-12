import { faCreativeCommonsNc } from "@fortawesome/free-brands-svg-icons"
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material"
import FontAwesomeSvgIcon from "../../components/FontAwesomeSvgIcon"
import type { APWorld, Platform } from "../../types/APWorld"
import { getIconFromPlatform } from "../../util/getIcon"

type Props = {
  world: APWorld
}

const getPlatformIcons = (platforms: Platform[]) => {
  const tooManyPlatforms = platforms.length > 3
  if (tooManyPlatforms) platforms = platforms.slice(0, 3)

  const platformsJSX = platforms.map((platform) => (
    <FontAwesomeSvgIcon icon={getIconFromPlatform(platform)} />
  ))

  return (
    <>
      {platformsJSX} {tooManyPlatforms && <Typography>…</Typography>}
    </>
  )
}

const APWorldCard = (props: Props) => {
  const { world } = props

  return (
    <Card
      key={world.name}
      sx={{ width: 290, height: 360, position: "relative" }}
    >
      <CardMedia sx={{ height: 140 }} image={world.img_url} />
      <CardContent
        sx={{
          display: "flex",
          position: "relative",
          flexDirection: "column",
          height: 220,
          paddingBottom: "1.5em",
        }}
      >
        <Typography gutterBottom variant="h5" component="div">
          {world.name}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "text.secondary", marginBottom: "0.5em" }}
        >
          {world.author} {world.version ? "— " + world.version : null}{" "}
        </Typography>
        <Typography
          variant="body2"
          component="div"
          sx={{ color: "text.secondary", flexGrow: 1 }}
        >
          {world.description}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Stack direction="row" gap={1}>
            {world.platforms && getPlatformIcons(world.platforms)}
          </Stack>
          <Stack direction="row" gap={1}>
            {world.options?.free && (
              <FontAwesomeSvgIcon icon={faCreativeCommonsNc} />
            )}
            {world.options?.official && (
              <FontAwesomeSvgIcon icon={faCheckCircle} />
            )}
          </Stack>
        </Box>
      </CardContent>
    </Card>
  )
}

export default APWorldCard
