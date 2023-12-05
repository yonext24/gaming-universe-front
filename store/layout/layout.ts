import { create } from 'zustand'

export const PAGE_MOBILE_WIDTH = 640
export const PAGE_TABLET_WIDTH = 1024

type State = {
  screenWidth: number | undefined
  screenHeight: number | undefined
  isMobile: boolean | undefined
  isTablet: boolean | undefined
  setScreenData: (screenWidth: number, screenHeight: number) => void
}

export const useLayoutStore = create<State>((set) => ({
  screenWidth: undefined,
  screenHeight: undefined,
  isMobile: undefined,
  isTablet: undefined,

  setScreenData: (screenWidth: number, screenHeight: number) => {
    set({
      screenWidth,
      screenHeight,
      isMobile: screenWidth <= PAGE_MOBILE_WIDTH,
      isTablet: screenWidth > PAGE_MOBILE_WIDTH && screenWidth <= PAGE_TABLET_WIDTH
    })
  }
}))
