type Asset = {
  id: number
  label: string
  image: string
  url: string
}

export type SubLink = {
  id: number
  label: string
  url: string
  image?: string
  assets?: Asset[]
}

export type NavbarLinksTypes = {
  id: number
  label: string
  url: string
  assets?: SubLink[]
}

export type CountUpAnimationType = {
  initialValue: number
  targetValue: number
  text: string
}

export type HomepageCompaniesServicesType = {
  id: number
  image?: string
  title: string
  description: string
  urlPath: string
  isBulletinIncluded?: boolean
}

export type IndustriesType = {
  id: number
  image: string
  title: string
  urlPath: string
}

export type StepsToFollowType = {
  id: number
  image: any
  title: string
  description: string
}

export type ServicePagePostType = {
  id: string
  title: string
  date: string
}
