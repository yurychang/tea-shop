import { FETCH_FLAVOR, SELECT_BY_FLAVOR, SELECT_BY_TEA } from 'actions/flavor'

const defaultState = {
  targetTeaFlavors: [],
  flavors: [],
  teaFlavors: [],
  selectedFlavor: ''
}

export default function flavor(state = defaultState, action) {
  const targetId = action.id
  let targetTeaFlavors = {}
  switch (action.type) {
    case FETCH_FLAVOR:
      return {
        ...state,
        ...action.data
      }
    case SELECT_BY_FLAVOR:
      targetTeaFlavors = state.teaFlavors.filter(el => {
        const ary = [el.frontId, el.midId, el.endId]
        return ary.includes(targetId)
      })
      return {
        ...state,
        selectedFlavor: targetId,
        targetTeaFlavors
      }
    case SELECT_BY_TEA:
      targetTeaFlavors = [state.teaFlavors.find(el => el.id === targetId)]
      return {
        ...state,
        targetTeaFlavors
      }
    default:
      return state
  }
}
