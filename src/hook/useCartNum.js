import { useState } from 'react'

let shareCartNum = 0

export default function useCartNum() {
  const [cartNum, setCartNum] = useState(0)
  shareCartNum = cartNum
  return { shareCartNum, setCartNum }
}
