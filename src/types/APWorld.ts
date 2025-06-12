export type Platform =
  | "PC"
  | "Windows"
  | "macOS"
  | "Linux"
  | "VR"
  | "Android"
  | "Web"
  | "PSX"
  | "PS2"
  | "NES"
  | "SNES"
  | "N64"
  | "GC"
  | "Wii"
  | "Wii U"
  | "Switch"
  | "GB"
  | "GBC"
  | "GBA"
  | "DS"
  | "3DS"
  | "SMS"
  | "Genesis"
  | "2600"
  | "PICO-8"

export type APWorld = {
  name: string
  game_name: string
  description?: string
  img_url?: string
  github_url: string
  author: string
  version?: string
  genre?: string
  platforms?: Platform[]
  options?: {
    free?: boolean
    official?: boolean
    genres?: string[]
    other_tags?: string[]
  }
}
