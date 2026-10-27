const isServer = typeof window === 'undefined'

const createMedia = (query: string) => {
  if (isServer) return { matches: false }
  return matchMedia(query)
}

const pointerMedia = createMedia('(any-pointer: coarse)')
const pointerMedia2 = createMedia('(any-pointer: fine)')
const orientationMedia = createMedia('(orientation: portrait)')

export const device = {
  isServer,
  get touchEnabled() {
    return pointerMedia.matches
  },
  get mouseEnabled() {
    return pointerMedia2.matches
  },
  orientation: {
    get portrait() {
      return orientationMedia.matches
    }
  }
}