import {
  faApple,
  faLinux,
  faWindows,
  type IconDefinition,
} from "@fortawesome/free-brands-svg-icons"
import {
  faComputer,
  faMobileScreen,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons"
import type { Platform } from "../types/APWorld"

export const getIconFromPlatform = (
  icon: Platform
): IconDefinition | string => {
  switch (icon) {
    case "Windows":
      return faWindows
    case "macOS":
      return faApple
    case "Linux":
      return faLinux
    case "PC":
      return faComputer
    case "Android":
      return faMobileScreen
  }
  return faQuestion
}
