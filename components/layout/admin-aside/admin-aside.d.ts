export interface AsideOption {
  title: string
  href: string
  icon: React.FC
}

export interface AsideSector {
  title: string
  options: AsideOption[]
}

export interface AsideSectorWithId extends AsideSector {
  id: number
}
