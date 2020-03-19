export const LOADING_START = 'LOADING_START'
export const LOADING_END = 'LOADING_END'

export const loadingStart = () => {
  return {
    type: LOADING_START
  }
}

export const loadingEnd = () => {
  return {
    type: LOADING_END
  }
}